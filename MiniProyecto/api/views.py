from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Producto
from .serializers import ProductoSerializer


class ProductoListCreateView(ListCreateAPIView):
    queryset =  Producto.objects.all()
    serializer_class = ProductoSerializer


class ProductoDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer


