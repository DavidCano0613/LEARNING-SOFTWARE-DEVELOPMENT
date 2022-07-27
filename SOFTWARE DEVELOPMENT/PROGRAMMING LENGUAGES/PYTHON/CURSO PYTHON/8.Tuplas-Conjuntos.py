# 2) Tuplas = tuple 

# Las tuplas son listas inmutables, es decir no se pueden modificar después de su creación. 
# No se permiten añadir, eliminar, mover elementos etc (no append, extend, remove).
# Las tuplas son listas inmutables, es decir, no se pueden modificar después de su creación.
# Permiten extraer porciones, pero el resultado de la extracción no es que modifiquemos la tupla si no que estamos obteniendo una nueva tupla en si. 
# Si permiten comprobar si un elemento se encuentra en la tupla

# ¿Qúe utilidad o ventaja tienen respecto a las listas?
# Son mucho mas rapidas que uno lista ya que tienen algunas optimizaciones respecto a las listas
# Ocupan menor espacio en memoria por ende da un mayor rendimiento en cuanto tiempo de ejecución  
# Formatean Strings
# Permiten utilizarse como claves en un diccionario (las listas no)
# Las tuplas se representan escribiendo los elementos entre paréntesis y separados por comas. La función len() devuelve el número de elementos de una tupla. Una tupla puede no contener ningún elemento, es decir, puede ser una tupla vacía. Una tupla puede incluir un único elemento seguido de una coma.

# Ejemplo tuplas

tupla= (8, "b", 4.91,"Hello")
len(tupla)
print(tupla)
print(tupla[2])

# Conversión de un tupla a una lista
listaConvertida = list(tupla)
print(listaConvertida)

# Conversion de una lista a tupla 

listaEjemplo = ["God bye",21,22,34,35,21]
tuplaConvertida = tuple(listaEjemplo)
print(tuplaConvertida)
print("God bye" in tuplaConvertida)
print(tuplaConvertida.count(21))
print(len(tuplaConvertida))

# Metodos para tuplas
print(tupla.count("b"))
print(len(tupla))

# Tuplas unitaria, el elemento debe tener una coma 

tuplaUnitaria = ("Daniela Muñoz",)
print(len(tuplaUnitaria))

tuplaSinParentesis = "Juan",2,4,5,1999 # Lo mejor es poner la tupla con parentesís de todos modos. 

# Desempaquetado de tupla = Consiste en asignar todos los elementos que forman parte de una tupla a diferentes variables. 
# Asi python asigna por orden cada valor a cada variable
mitupla=("Juan David","21","Soltero","Masculina","Programador")
name,age,state,sex,ocupation = mitupla

# Busqueda en tuplas

# 3) Conjuntos: set 
# Los conjuntos son una colección no ordenada y sin elementos repetidos. Se definen con la palabra set, seguida de llaves que contienen los elementos separados por comas. Si se desea remover un elemento de un conjunto, se puede usar el método remove().

# Ejemplo conjuntos
frutas = set([ 'mango', 'pera', 'manzana', 'limón' ])
print(frutas)
frutas.remove('manzana')
print(frutas)


