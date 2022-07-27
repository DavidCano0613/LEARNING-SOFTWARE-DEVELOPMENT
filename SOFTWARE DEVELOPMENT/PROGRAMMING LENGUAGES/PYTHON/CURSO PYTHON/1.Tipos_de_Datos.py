
# Tipos de datos números, strings y booleanos
# Numéricos 

# Numeros enteros
# Valor1 = 5 # Es una variable que contiene un dato puro 
# Valor2 = -5 + 7 #Es una variable que tiene asignada una expresión
# Resultado = Valor1 + Valor2 
# print(Resultado) 

# Números en formato binario 
# decimal = 8
# binario = 0b1101
# octal = 0o11
# hexadecimal = 0xc
# print(decimal)
# print(binario)
# print(octal)
# print(hexadecimal)

# Numeros de punto flotantes (decimales)
# Num1 = 34.678
# Num2 = 500.000
# print(round(Num1,2))
# print(round(Num2,10))

# Numeros complejos o complex = Hace referencia al manejo de los números imaginarios
# Ejemplo
# imaginario = 3j
# complejo = 5 + imaginario 
# complejo.real
# complejo.imag
# print(complejo)

# Se pueden realizar operaciones con numeros de distintos tipos, si se suma un int con un float el resultado es un float, si se suma un int con un complex el resultado es un complex.

# Ejemplo
# x = 2
# y = x**3 # y es 2 elevado a la 3
# print(x,y)

# b = 31
# c = b//4 # c es la parte entera de dividir b entre 4
# print(c)

# g = 31.0
# h = g/4 # h es la parte entera de dividir g entre 4
# print(h)


# Cadenas de caracteres - Strings 
# Name = "Hola mi nombre es: `Juan David Paniagua`" 
# Nombre = 'Hola mi nombre es "Juan David Paniagua " '
# print(type(Name))
# print(Name,Nombre)
# caracter1 = 'z'
# print(caracter1)

#  Booleanos
# a = False
# b = True
# c = None
# print(type(a))
# print(a)
# print(b)
# print(c)


# Identificación de el tipo de variable o dato - Como saber que tipo de dato. 
# existen dos funciones en Python para determinar el tipo de dato que contiene una variable: 
# type() e isinstance()

# 1) type() Recibe como parámetro un objeto y devuelve de que tipo es.

# Ejemplo

# print(type(5))
# print(type(3.14))
# print(type(5j))
# print(type('Hola mundo'))
# print(type(True))
# print(type(False))


# 2) isinstance() Recibe dos parámetros: un objeto y un tipo. Devuelve True si el objeto es del tipo que se pasa como parámetro y False en caso contrario.

# print(isinstance(7, float))
# print(isinstance(8, int))
# print(isinstance(2, bool))
# print(isinstance(False, bool))
# print(isinstance(7.5, int))
# print(isinstance(True, bool))


# 3) CONVERSIÓN DE TIPOS DE DATOS (COMO CONVERTIR DATOS A OTROS DATOS)

# En algunos casos se requiere convertir un tipo de dato a otro que sea más adecuado. Por ejemplo, si una cadena contiene el valor “10” para poderlo sumar a otra variable tipo entero, se debe convertir la cadena en un dato tipo entero.

# str(): devuelve la representación en cadena de caracteres del objeto que se pasa como parámetro.
# int(): devuelve un int a partir de un número o secuencia de caracteres.
# float(): devuelve un float a partir de un número o secuencia de caracteres.

# Ejemplos


# Edad = "25"
# Edad = int(Edad) + 10 # Convierte edad a int 
# print(Edad)

# Edad = str(Edad) # Convierte edad a str
# Edad # edad es un str (se muestran las '35')

# float('18.66') # Convierte un str a float

# float('hola') # Convierte un str a float (pero no es válido puesto que hola no es un número, solo aplica para números dentro de comillas)

