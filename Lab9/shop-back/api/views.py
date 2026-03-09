from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.filters import OrderingFilter

from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'], url_path='products')
    def products(self, request, pk=None):
        category = self.get_object()
        products = category.products.all()

        ordering_param = request.query_params.get('ordering', '-price')
        ordering_fields = ordering_param.split(',')

        allowed_fields = [
            'price', '-price',
            'name', '-name',
            'count', '-count',
            'is_active', '-is_active'
        ]

        valid_ordering = [field for field in ordering_fields if field in allowed_fields]

        if valid_ordering:
            products = products.order_by(*valid_ordering)
        else:
            products = products.order_by('-price')

        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [OrderingFilter]
    ordering_fields = ['name', 'price', 'count', 'is_active']
    ordering = ['-price']