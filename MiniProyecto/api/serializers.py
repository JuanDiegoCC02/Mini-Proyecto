from .models  import Producto
from rest_framework import serializers

#Serializer del Producto
class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

#Validacion para los datos de los Productos 
#validacion nombre
def validate_nombre(self, value):
    if len(value)<2:
        raise serializers.ValidationError("El nombre debe contener mas de 2 caracteres.")
    return value

#validacion descripcion
def validate_descripcion(self, value):
    if len(value)<5:
        raise serializers.ValidationError("La descripcion debe contener al menos 5 caracteres.")
    return value

#validacion precio
def validate_precio(self, value):
    if value < 0:
        raise serializers.ValidationError("El precio debe ser mayor a 0.")
    return value

#validacion cantidad
def validate_cantidad(self, value):
    if value < 0:
        raise serializers.ValidationError("La cantidad debe ser mayor a 0.")
    return value

