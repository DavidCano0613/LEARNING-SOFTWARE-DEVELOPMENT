
# Nota: Solo se puede importar desde la misma carpeta y no archivos externos, por ahora
# Importando una función una por una. 
import Módulos 
Módulos.sumar(4,5)

# Importando de otra forma
from Módulos import sumar
sumar(3,2)

# Importanto TODO le código y no función por función
# Optimización, esto no siempre es conveniente, debe tenerse cuidado y saber que funciones importar para tener espacio en memoria
from Módulos import *
sumar(2,3)
saludar()

# Instancia
juanDavid=empleados("David",21,"Calle 58",2)
print(juanDavid.nombre,juanDavid.edad,juanDavid.direccion)

# Importando funciones desde un paquete. 
from calculos.calculosgenerales import dividir
dividir(10,2)

from calculos.calculosgenerales import multiplicar
multiplicar(2,10)

from calculos.calculosedad.calculos_edad import calculadordeedad
calculadordeedad()
