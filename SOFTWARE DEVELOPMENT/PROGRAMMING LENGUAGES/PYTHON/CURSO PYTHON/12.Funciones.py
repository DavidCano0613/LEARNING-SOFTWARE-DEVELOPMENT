# Funciones en Python
# Las funciones son rutinas de código o bloques de código que permiten la reutilización del mismo.
# Su principal funcion es ahorrar lineas de código.
# Las funciones se declaran, se crean y se llaman. 
# Una función nunca va realizar su tarea o cometido hasta que es llamada, es decir no va ejecutar el bloque de código que tiene adentro. 
# Las funciones pueden o no recibir parametros (según sea necesario) aunque generalmente lo hacen. 
# Las funciones pueden retornar o no valores(según sea necesario). 
# Su sintaxis es la siguiente:
# Palabra reservada def - nombre de la función - (parámetros): - instrucciones. 


# Ejemplo 1) Esta funcion no recibe ningun parámetro ni retorna ningun valor
# Declaración de la función 
# def saludo():
    # cuerpo de la función
#     print("Hola este es un programa de Python")
# Llamado a la función 
# saludo()

# Ejemplo 2) Esta función recibe como parámetros dos números los cuales sumara. 
# def funcionque_Suma(num1,num2):
#     print(num1+num2)
# funcionque_Suma(5.3,4.1)

# Ejemplo 3
# def funcionque_saluda(name = input("Ingresa tu nombre: ")):
#     print("Hola tu nombre es:",name)
# funcionque_saluda()

# Ejemplo 4
# def invoice(amount, vat=21):
#     """Función de aplica el IVA a una factura.
#     Parametros
#     amount: Es la cantidad sin IVA
#     vat: Es el porcentaje de IVA
#     Devuelve el total de la factura una vez aplicado el IVA. 
#     """
#     return amount + amount*vat/100

# print(invoice(1000,16))
# print(invoice(1000))


# Ejemplo 5 nota: hacerlo funcionar

# def circle_area(radius = float(input("Ingrese el radio: "))):
#     """Función que calcula el area de un círculo.
#     Parámetros
#     radius: Es el radio del círculo.
#     Devuelve el área del círculo de radio radius. 
#     """
#     pi = 3.1415
#     return pi*radius**2

# def cilinder_volume(radius, high = float(input("Ingrese la altura"))):
#     """Función que calcula el volumen de un cilindro.
#     Parámetros
#     radius: Es el radio de la base del cilindro.
#     high: Es la altura del cilindro.
#     Devuelve el volumen del clindro de radio radius y altura high.
#     """
#     return circle_area(radius)*high
# print(cilinder_volume())


# Ejemplo 6
# def funcion(lista):
#     return sum(lista)/len(lista)
# print(funcion([1,2,3,4]))


# Ejemplo 7 
# def funcion(lista):
#     list =[]
#     for i in lista:
#         list.append(i**2)
#     return lista, list
# print(funcion([1,2,3,4]))


# Ejemplo 8 

# def funcion(lista):
#     dic = {}
#     dic["nombre"] = lista[0]
#     dic["apellido"] = lista[1]
#     dic["edad"] = lista[2]
#     dic["ocupation"] = lista[3]
#     print(dic)

# funcion(["Juan David","Cano",21,"Developer"])


# Ejemplo 9
# def definir_compra(name = input("Ingrese su nombre")):
#     dinero = float(input("Ingrese su dinero: "))
#     if dinero >= 0.6 and dinero <1: return print("Helado de agua")
    
# definir_compra()


# Ejemplo 10 
def mcd(n, m):
    """Función que calcula el máximo común divisor de dos números.
    Parámetros:
        - n: Es un número entero.
        - m: Es un número entero.
    Devuelve:
        El máximo común divisor de n y m.
    """
    rest = 0
    while(m > 0):
        rest = m
        m = n % m
        n = rest
    return n

def mcm(n, m):
    """Función que calcula el mínimo común múltiplo de dos números.
    Parámetros:
        - n: Es un número entero.
        - m: Es un número entero.
    Devuelve:
        El mínimo común múltiplo de n y m.
    """
    if n > m:
        greater = n
    else:
        greater = m
    while (greater % n != 0) or (greater % m != 0):
        greater += 1
    return greater

print(mcd(24,36))
print(mcm(24,36))



# Ejemplo 11 
# Escribir un programa que reciba una cadena de caracteres y devuelva un diccionario con cada palabra que contiene y su frecuencia. Escribir otra función que reciba el diccionario generado con la función anterior y devuelva una tupla con la palabra más repetida y su frecuencia.
def count_words(text):
    """Función que cuenta el número de veces que aparece cada palabra en un texto.
    Parámetros:
        - text: Es una cadena de caracteres.
    Devuelve: 
        Un diccionario con pares palabra:frecuencia con las palabras contenidas en el texto y su frecuencia.
    """
    text = text.split()
    words = {}
    for i in text:
        if i in words:
            words[i] += 1
        else:
            words[i] = 1
    return words

def most_repeated(words):
    max_word = ''
    max_freq = 0
    for word, freq in words.items():
        if freq > max_freq:
            max_word = word
            max_freq = freq
    return max_word, max_freq

text = 'Como quieres que te quiera si el que quiero que me quiera no me quiere como quiero que me quiera'
print(count_words(text))
print(most_repeated(count_words(text)))


# queda pendiente por estudiar range
# end
# funciones

