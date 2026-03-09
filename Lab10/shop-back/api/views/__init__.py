# Switch between implementations by changing this import.
# Level 2: from api.views.fbv import products_list, product_detail
# Level 3: from api.views.cbv import ProductListAPIView, ProductDetailAPIView
# Level 4: from api.views.mixins import ProductListAPIView, ProductDetailAPIView
# Level 5 (active):
from api.views.generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)
