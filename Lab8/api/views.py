from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Category, Product

def index(request):
    categories = Category.objects.prefetch_related('products').all()
    return render(request, 'api/index.html', {'categories': categories})

def product_list(request):
    is_active = request.GET.get('is_active')
    products = Product.objects.all()
    
    if is_active is not None:
        products = products.filter(is_active=is_active.lower() in ['true', '1'])
        
    ordering = request.GET.get('ordering', 'id')
    products = products.order_by(ordering)
    
    data = [
        {
            'id': p.id,
            'name': p.name,
            'price': p.price,
            'description': p.description,
            'count': p.count,
            'is_active': p.is_active,
            'category_id': p.category.id,
        }
        for p in products
    ]
    return JsonResponse(data, safe=False)

def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    data = {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category_id': product.category.id,
    }
    return JsonResponse(data)

def category_list(request):
    categories = Category.objects.all()
    data = [{'id': c.id, 'name': c.name} for c in categories]
    return JsonResponse(data, safe=False)

def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    data = {'id': category.id, 'name': category.name}
    return JsonResponse(data)

def category_products(request, id):
    category = get_object_or_404(Category, id=id)
    is_active = request.GET.get('is_active')
    products = category.products.all()
    
    if is_active is not None:
        products = products.filter(is_active=is_active.lower() in ['true', '1'])
        
    ordering = request.GET.get('ordering', 'id')
    products = products.order_by(ordering)
    
    data = [
        {
            'id': p.id,
            'name': p.name,
            'price': p.price,
            'description': p.description,
            'count': p.count,
            'is_active': p.is_active,
        }
        for p in products
    ]
    return JsonResponse(data, safe=False)
