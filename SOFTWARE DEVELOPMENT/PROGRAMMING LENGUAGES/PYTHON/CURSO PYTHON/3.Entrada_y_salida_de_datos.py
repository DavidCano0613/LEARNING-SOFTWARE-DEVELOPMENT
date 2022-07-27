
# Metodos de entrada y salida de datos

# 1.1 Entrada estándar
# Para solicitar al usuario que introduzca algún dato a través del teclado, se debe usar el método input().
# Este método recibe como parámetro un mensaje del usuario entre comillas:
# input entiende todo como un carácter por ende si el tipo de dato que se esta pidiendo es un número debe convertirse int o float anteponiendolo al input
# Por otro lado el metodo print impreme por pantalla lo que se tenga en una variable o un siemple tipo de dato, es decir se puede escribir directamente el tipo de dato ya sea un carácter o número o el dato puede almacenarse en una variable y luego imprimir la variable por pantalla.

# Ejemplos

# edad = input("¿Cuantos años tienes bro?") #Esta seria la entrada del dato edad y se guarda aquí la edad ingresada por el usuario
# print(edad)  #Esta seria la salida del dato edad 

# nombre = input("Ingrese por favor su nombre")
# age = int(input("Igrese porfavor su edad"))
# print("Estimado aprendiz su nombre es: ", nombre ," y el otro año usted tendra" ,age+1 ,"años")

# estatura = float(input("Ingrese la estatura que dice en la CC bro"))
# print = ("Su estatura es: ", estatura ,"pero como la cc siempre miente su verdadera estatura es mas o menos de:", estatura-0.2)

# 2.2 Salida de datos con formato
# Python es compatible con la salida de datos con formato. El caracter módulo % es un operador integrado en Python. Este es conocido como el operador de interpolación. Se deben digitar los formatos deseados, el signo % (porcentaje), seguido por paréntesis con los datos que necesitan ser convertidos.

# La sintaxis de la instrucción es:

# print (“cadena con formato” % (variables separadas por comas))

# Se utilizan los siguientes formatos para la salida de datos:

# %c = un caracter

# %s = str, cadena de caracteres

# %d = int, enteros

# %f = float, flotantes

#Ejemplos:

# mensaje = "raíz cuadrada de 25"
# raiz = 5
# print("El resultado de: %s es igual a: %f"%(mensaje,raiz))


# Es posible controlar el formato de salida, por ejemplo, para obtener el valor con ocho (8) dígitos después del punto decimal, se digita %.8f; para una salida con 2 decimales se digita %.2f

# Ejemplo:

# titulo = "raíz cuadrada de tres"

# valor = 3**0.5

# print ("el resultado de %s es %.8f " % (titulo, valor)) #salida con 8 decimales
# print ("el resultado de %s es %.3f " % (titulo, valor)) #salida con 1 decimal

# Concatenación de cadenas 

# Frase1="David"
# Frase2="es un programador"
# Frase3="que quiere aprender Python"

# Metodo1 = Frase1+" "+Frase2+" "+Frase3 #Metodo 1  
# print(Metodo1)

# Metodo2 = "%s %s %s"%(Frase1,Frase2,Frase3)#Metodo 2  
# print(Metodo2)

# Formatos de salida
# nombre = "david"
# edad= 21
# print("Mi nombre es: {} y tengo: {}".format(nombre,edad))


# Alineación con format
# producto = "Playstation"
# precio = 1400
# iva = 0.19
# total = precio +(precio*iva)
# print("{:^10} {:^10} {:^10,.0f}".format(producto,precio,total))

# Otro
# precio = 1.400000
# print("el precio es de: {:.6f}".format(precio))