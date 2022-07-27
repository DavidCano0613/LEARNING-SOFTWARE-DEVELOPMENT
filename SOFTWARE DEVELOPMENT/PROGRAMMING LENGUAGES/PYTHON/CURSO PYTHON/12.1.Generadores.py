# Generadores en Python
# ¿Qúe son?
# Son estructuras que extraen valores de una función y se almacenan en objetos iterables que se pueden recorren.
# Estos valores se almacenan de uno en uno. 
# Cada vez que un generador almacena un valor, este permanece en un estado pausado hasta que se solicita el siguiente. Esta caracteristica es conocida como "suspensión de estado".
# Cada vez que un generador almacena un valor, esta permanece en un estad>o pausado hasta que se solicita el siguiente. Esta caracteristica es conocida como "suspensión de estado".

#¿Como funcionan un generador?
# Es como una especie de función, pero en lugar de la instrucción return se usa YIELD lo que se consigue es cuando en el código hay una llamada a esa función el control de ejeución pasa a la función y construye un objeto iterable con el primer valor. 

# ¿Qué utilidad tiene?
# El generador es mas eficiente, pues en algunes ocasiones es conveniente que una función devuelva un valor de uno en uno. 
# Muy útiles con listas de valores infinitos

# ¿Cuál es su sintaxis?
# Muy similar a la sintaxis de una función tradicional, solo se usa en lugar de return un yield. 

# Ejemplo como función
def generaPares(limite):
    num =1
    miLista=[]
    while num < limite:
        miLista.append(num*2)
        num +=1
    return miLista

print(generaPares(10))

# Ejemplo como generador
def generaPares(limite):
    num =1
    while num < limite:
        yield num*2
        num +=1
devuelvePares = generaPares(10)
print(devuelvePares)
for i in devuelvePares:
    print(i)
    
