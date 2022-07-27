# # Ejercicio 1
# name = str(input('A continuación ingrese por favor su nombre: '))
# age = int(input('A continuación ingrese por favor su edad: '))
# sex = int(input('A continuación ingrese por favor su sexo 1 si es mujer 2 si es hombre: '))

# if (age <= 0):
#   print("La edad que ingresaste es invalida debe ser un número mayor que 0")
# elif (age >= 18 and sex == 2):
#   print("Hola %s tienes %d años, por lo cual eres mayor de edad y eres hombre "%(name,age))
# elif(sex == 2):
#   print("Hola %s tienes %d años, por lo cual eres menor de edad y eres hombre "%(name,age))
# elif(age >= 18 and sex == 1):
#    print("Hola %s tienes %d años, por lo cual eres mayor de edad y eres mujer "%(name,age))
# else:
#     print("Hola %s tienes %d años, por lo cual eres menor de edad y eres mujer "%(name,age))

#Ejercicio 2 

# name = str(input('A continuación ingrese por favor su nombre: '))
# print(name)
# age = int(input('A continuación ingrese por favor su edad: '))
# print(age)
# sex = int(input('A continuación ingrese por favor su sexo 1 si es mujer 2 si es hombre: '))
# print(sex)
# stage = int(input("Ingrese su estado 1 para casado(a) 2 para soltero(a) 3 otro: "))

# if ((age <= 0) or (sex < 1 or sex > 2) or (stage < 1 or stage > 3)):
#   print("Los datos ingresados no son validos")
# elif (age >= 18 and sex == 2 and stage == 1):
#    print("Hola %s tienes %d años, por lo cual eres mayor de edad, eres hombre y estas casado"%(name,age))
# elif(sex ==2 and stage == 2):
#    print("Hola %s tienes %d años, por lo cual eres mayor de edad, eres hombre y estas soltero "%(name,age))
# elif(stage == 3):
#     print("Hola %s tienes %d años, por lo cual eres mayor de edad, eres hombre y tu estado civil es otro "%(name,age))
# elif(age >= 18 and sex == 1 and stage == 1):
#    print("Hola %s tienes %d años, por lo cual eres mayor de edad, eres mujer y estas casada "%(name,age))
# elif(sex == 1 and stage == 2):
#    print("Hola %s tienes %d años, por lo cual eres mayor de edad, eres mujer y estas soltera "%(name,age))
# else:
#     print("Hola %s tienes %d años, por lo cual eres mayor de edad, eres mujer y tu estado civil es otro "%(name,age))


#Ejercicio 3 
# x = float(input("Ingrese un número " ))
# y = float(input("Ingrese otro número " ))


# if x > 0:
#    print("El primer número ingresado es positivo ",x) 
# if y > 0:
#    print("El segundo número ingresado es positivo ", y)
# elif x < 0:
#    print("El primer número ingresado negativo ", x)
# elif y < 0:
#    print("El segundo número ingresado negativo ", y) 
# else: 
#    print("Ingresaste otro tipo de dato")   


# Ejercicio 4
# x = float(input("Ingrese un número " ))
# y = float(input("Ingrese otro número " ))
# if ((x < 0 and y > 0) or (x > 0 and y < 0))and(x != 0 and y != 0):
#    print("la condición se cumple, ambos numeros son diferentes de cero y tienen signos contrarios", x,y)
# else: 
#    print("No se cumple la condición uno o ambos numeros son iguales a cero o tienen los mismos signo") 


# Ejercicio 5 

# x = float(input("Ingrese un número " ))
# y = float(input("Ingrese otro número " ))
# if y != 0:
#    res = x/y 
#    print("El resultado de la división es de: ", res)
# else: 
#    print("No es posible esta división pues el cociente es 0")
    
# #Ejercicio 6 
# print("INICIO")
# retencion = 0
# nameEmployee = input("Ingrese su nombre: ")
# salarioBruto = float(input("Ingrese su salario: "))
# if salarioBruto <= 250500:
#    retencion = 0
# elif salarioBruto >= 250501 <= 300000:
#    retencion = salarioBruto * 0.05
# else:
#    retencion = salarioBruto * 0.08 
# salarioNeto = salarioBruto - retencion 
# print("Hola empleado: ", nameEmployee, "A continuación se presentan los detalles de su salario")
# print("El salario bruto es de: ", salarioBruto)
# print("El valor de la retención es de: ", retencion)
# print("El salario neto es de: ", salarioNeto)
# print("FIN")

#Ejercicio 7 
# print("INICIO DEL PROGRAMA")
# name = (input("Ingrese su nombre completo: "))
# payment = float(input("Ingrese su salario básico por hora: "))
# numberHours = float(input("Ingrese el número de horas trabajadas en la semana: "))
# if numberHours > 48:
#     extraHours = numberHours - 48
#     surcherge =  0.25
#     extraPayment = ((extraHours * payment) + ((extraHours * payment) * surcherge)) 
#     totalPayment = (payment * 48)+ extraPayment
# else: 
#     print("No trabajo horas extras")
#     totalPayment = payment * numberHours
# print("Hola ",name," a continuación se presenta el calculo de su salario")
# print("El valor de su hora es de: ", payment)
# print("Usted trabajo: ",numberHours," horas")
# print("Su salario es de: ",totalPayment)
# print("FIN DEL PROGRAMA")


#Ejercicio 8 
# print("INICIO DEL PROGRAMA")
# name = (input("Ingrese su nombre completo: "))
# investment = float(input("Ingrese el valor de la inversión: "))
# interest = float(input("Ingrese el interes efectivo mensual que le pagara el banco: "))/100
# bankPayment = investment * interest
# profit = investment + bankPayment
# print("Hola ",name," a continuación se presenta la ganancia de su inversión")
# if profit > 7000: 
#     print("Su ganancia a sido superior a 7.000$ por ende se invertira este valor: ",profit," nuevamente")
#     newInvestment = profit * interest
#     totalProfit = profit + newInvestment
#     print("AL reinvertir su dinero su ganacia total es de: ",totalProfit)
# else: 
#     print("La ganancia es inferior a 7000 por ende no se invertira más")
#     print("Su ganancia total es de: ", profit)
# print("FIN DEL PROGRAMA")
 

#Ejercicio 9 

# print("INICIO DEL PROGRAMA")
# name = (input("Ingrese su nombre completo: "))
# hours = float(input("Ingrese las horas que pasara realizando la actividad: "))
# hours *= 60
# Activity = input("Ingrese la actividad que realizara como: Dormido o Sentado: ")
# if Activity == "Dormido" or "dormido":
#     consumo = hours * 1.08
# elif Activity == "Sentado" or  "sentado":
#     consumo = hours * 1.66
# else: 
#     print("No ingreso valores validos")
# print("Hola ",name," a continuación se presenta cuantas calarios quemaria basado en el tiempo y actividad que usted ingreso")
# print("Cantidad de calorias quemadas: ",consumo)
# print("FIN DEL PROGRAMA")



#Ejercicio 10
# print("INICIO DEL PROGRAMA")
# articulo = input("Ingrese el nombre del articulo: ")
# precio = float(input("Ingrese el precio: "))
# clave = int(input("Ingresa la clave: "))
# Dscto = 0
# if clave == 1:
#     Dscto = .10
#     precio = precio - (precio*Dscto)
# elif clave == 2: 
#     Dscto = .20
#     precio = precio - (precio*Dscto)
# else:
#     print("El valor que has ingresado como clave es invalido, intente de nuevo por favor")
# print("Has adquirido el articulo: ",articulo)
# print("Con el descuento aplicado el precio es de: ",precio)
# print("FIN DEL PROGRAMA")

#Ejercicio 11
# print("INICIO DEL PROGRAMA")
# print("VENTA DE CAMISETAS")
# precioUnidad = float(input("Ingrese el precio de la unidad: "))
# cantidad = int(input("Ingrese la cantidad de camisas que va a comprar: "))
# if cantidad >= 3:
#     totalFactura = (precioUnidad - (precioUnidad)*0.20)*cantidad
# elif cantidad >0 <3 :
#     precio = 0.10
#     totalFactura = (precioUnidad - (precioUnidad)*0.20)*cantidad
# else:
#     print("La cantidad ingresada no es valida")
# print("El total con descuento por las camisetas compradas es de: ",totalFactura)
# print("FIN DEL PROGRAMA")

#Ejercicio 12
# print("INICIO DEL PROGRAMA")
# print("Creación de factura de compra")
# cantidadLlantas = float(input("Ingrese la cantidad de llantas de que comprara: "))
# if cantidadLlantas >0 and cantidadLlantas <5:
#     precioLlantas = 80000
#     totalCompra = cantidadLlantas * precioLlantas
#     print("Total factura de venta: ",totalCompra)
# elif cantidadLlantas >= 5:
#     precioLlantas = 70000
#     totalCompra = cantidadLlantas * precioLlantas
#     print("Total factura de venta: ",totalCompra)
# else:
#     print("No ingresante una cantidad valida: ", cantidadLlantas)
# print("FIN DEL PROGRAMA")


# Ejercicio 13
# print("INICIO DEL PROGRAMA")
# print("Obtendras un descuento dependiendo del número que saques, animate!")
# number = int(input("Saca un número de la canasta"))
# if number>0 and number<74:
#     print("Felicidades has obtenido un descuento de 15%")
# elif number >= 74:
#     print("Felicidades has obtenido un descuento de 20%")
# else:
#     print("No existen números menores o iguales a 0 en la canasta")
# print("FIN DEL PROGRAMA")


# #Ejercicio 14
# print("INICIO DEL PROGRAMA")
# edad = int(input("Ingresa tu edad: "))
# genero = input("Ingresa tu genero: ")
# if genero == "Femenino" or genero == "femenino":
#     numPulsaciones = (220-edad)/10
#     print("Según tu edad y genero tus pulsaciones por cada 10 segundos deben ser de: ",numPulsaciones)
# elif genero == "Masculino" or genero == "masculino":
#     numPulsaciones = (210-edad)/10
#     print("Según tu edad y genero tus pulsaciones por cada 10 segundos deben ser de: ",numPulsaciones)
# else:
#     print("Ingresaste valores invalidos") 
# print("FIN DEL PROGRAMA")

# Ejercicio 15
# print("INICIO DEL PROGRAMA")
# print("El siguiente programa evaluara su cuota a pagar de acuerdo al monto por el cual efectúe su fianza")
# fianza = float(input("Ingrese el monto: "))
# if fianza >0 and fianza < 50000:
#     cuota = fianza * 0.03
#     print("Su couta a pagar será del 3% del monto es decir: ",cuota)
# elif fianza >= 50000:
#     cuota = fianza * 0.02
#     print("Su couta a pagar será del 2% del monto es decir: ",cuota)
# else:
#     print("Los valores ingresados no son validos")
# print("FIN DEL PROGRAMA")


#Ejercicio 16
# print("INICIO DEL PROGRAMA")
# print("Hay tres grupos de Jubilación para determinar la suya por favor ingrese los siguientes datos:")
# age = int(input("Digite su edad: "))
# antiguedad = int(input("Digite la antiguedad de su empleo: "))
# if age >0 and age >= 60 and antiguedad >0 and antiguedad < 25:
#     print("Usted que clasificado dentro del grupo de jubilación por edad")
# elif age < 60 and antiguedad >= 25:
#     print("Usted que clasificado dentro del grupo de jubilación por antiguedad joven")
# elif age >= 60:
#     print("Usted que clasificado dentro del grupo de jubilación por antiguedad adulta")
# else:
#     print("Los valores ingresados no son validos, intente nuevamente")
# print("FIN DEL PROGRAMA")

#Ejercicio 17
# print("INICIO DEL PROGRAMA")
# computersNumbers = int(input("Digite el número de computadores que comprara: "))
# price = float(input("Digite el precio de cada unidad: "))
# total = 0
# descto=0
# if computersNumbers >0 and computersNumbers <5 and price >0:
#    descto = 0.10
#    total = (computersNumbers * price) - ((computersNumbers * price)*descto)
# elif computersNumbers >= 5 and computersNumbers < 10:
#     descto = 0.20
#     total = (computersNumbers * price) - ((computersNumbers * price)*descto)
# elif computersNumbers > 10:
#     descto = 0.40
#     total = (computersNumbers * price) - ((computersNumbers * price)*descto)
# else:
#     print("Los valores ingresados no son validos")
# print("El total a pagar es de: ",total," usted tiene un descuento de: ",descto)
# print("FIN DEL PROGRAMA")


# #Ejercicio 18
# El ejercicio 18 y 19 estan mal planteados, del enunciado 18 salta al 19 sin terminar lo que dice el 18 es como si se unieran ambos puntos.
# De hecho es exactmanete al punto 12 solo que cambian 2 valores.

# print("INICIO DEL PROGRAMA")
# print("Creación de factura de compra")
# cantidadLlantas = float(input("Ingrese la cantidad de llantas de que comprara: "))
# if cantidadLlantas >0 and cantidadLlantas <5:
#     precioLlantas = 30000
#     totalCompra = cantidadLlantas * precioLlantas
#     print("Total factura de venta: ",totalCompra)
# elif cantidadLlantas >=5 and cantidadLlantas <=10:
#     precioLlantas = 25000
#     totalCompra = cantidadLlantas * precioLlantas
#     print("Total factura de venta: ",totalCompra)
# elif cantidadLlantas > 10:
#     precioLlantas = 20000
#     totalCompra = cantidadLlantas * precioLlantas
#     print("Total factura de venta: ",totalCompra)
# else:
#     print("No ingresante una cantidad valida: ", cantidadLlantas)
# print("FIN DEL PROGRAMA")

 #Ejercicio 20
# print("INICIO DEL PROGRAMA")
# precioAparato = float(input("Ingrese el precio del aparato: "))
# marca = input("Ingrese la marca del aparato: ")
# if precioAparato >0:
#     if precioAparato > 20.000 and marca == "NOSY":
#         totalPagarSinIVa = precioAparato - (precioAparato*0.15)
#         totalIvaIncluido = totalPagarSinIVa + (totalPagarSinIVa* 0.19)
#     elif precioAparato >= 20000:
#         totalPagarSinIVa = precioAparato - (precioAparato * 0.10)
#         totalIvaIncluido = totalPagarSinIVa + (totalPagarSinIVa * 0.19)
#     elif precioAparato <20.000:
#         totalPagarSinIVa = precioAparato 
#         totalIvaIncluido = totalPagarSinIVa + (totalPagarSinIVa * 0.19)
# else: 
#     print("Los valores ingresados no son validos")
# print("El total a pagar sin Iva incluido es de: ",totalPagarSinIVa)
# print("El total a pagar con Iva incluido es de: ",totalIvaIncluido)
# print("FIN DEL PROGRAMA")


# Ejercicio 21 
# print("INICIO DEL PROGRAMA")
# numKilosComprados = float(input("Digite el número de kilos comprados: "))
# precio = float(input("Digite el precio de las manzanas: "))
# total = 0
# if numKilosComprados >=0 and numKilosComprados<=2:
#     total = precio * numKilosComprados
# elif numKilosComprados >=2.01 and numKilosComprados <=5:
#     total = precio - (precio*0.10)*numKilosComprados
# elif numKilosComprados >=5.01 and numKilosComprados<=10:
#     total = (precio - (precio * 0.15))*numKilosComprados
# elif numKilosComprados >10.01:
#      total = (precio - (precio * 0.20))*numKilosComprados
# else: 
#     print("Los valores ingresados no son validos")
# print("El total a pagar es: ",total)
# print("FIN DEL PROGRAMA")

# CICLOS

# # Ejercicio 1 
# print("Inicio del programa")
# n = int(input("Ingrese el número total de personas con las que se va promediar el peso: "))
# acumuladorPesoNiños = 0
# acumuladorPesoJovenes = 0
# acumuladorPesoAdultos = 0
# acumuladorPesoViejos= 0
# promedioPesoNiños = 0
# promedioPesoJovenes = 0
# promedioPesoAdultos = 0
# promedioPesoViejos = 0
# contadorNiños = 0
# contadorJovenes = 0
# contadorAdultos = 1
# contadorViejos = 1
# for i in range(1,n,+1):
#     edad = int(input("Ingrese la edad de la persona #: "))
#     peso = float(input("Ingrese el peso de esa persona #: "))
#     if edad >0 and edad<=12:
#         acumuladorPesoNiños = acumuladorPesoNiños + peso
#         contadorNiños =contadorNiños+1
#     elif edad >=13 and edad<=29:
#         acumuladorPesoJovenes = acumuladorPesoJovenes + peso
#         contadorJovenes =contadorJovenes+1
#     elif edad >=30 and edad<=59:
#         acumuladorPesoAdultos = acumuladorPesoAdultos + peso
#         contadorAdultos =contadorAdultos+1
#     else:
#         acumuladorPesoViejos = acumuladorPesoViejos + peso
#         contadorViejos =contadorViejos+1

# promedioPesoNiños = acumuladorPesoNiños/contadorNiños
# promedioPesoJovenes = acumuladorPesoJovenes/contadorJovenes
# promedioPesoAdultos = acumuladorPesoAdultos/contadorAdultos
# promedioPesoViejos = acumuladorPesoViejos/contadorViejos
# print("El promedio de los pesos ingresados para niños es de: ",promedioPesoNiños)
# print("El promedio de los pesos ingresados para jovenes es de: ",promedioPesoJovenes)
# print("El promedio de los pesos ingresados para adultos es de: ",promedioPesoAdultos)
# print("El promedio de los pesos ingresados para viejos es de: ",promedioPesoViejos)
# print("Fin del programa")


# Ejercicio 2
# print("Inicio del programa")

# nPersona = int(input("Ingrese el número de personas que faltan  por pagar: "))
# venta = 0
# acumuladorVentas = 0
# descto = 0.85
# for i in range(0,nPersona,+1):
#     print("Persona número #: ",i+1)
#     cantidad = float(input("Ingrese la cantidad en kilos: "))
#     precio = float(input("Ingrese el precio por kilo: "))
#     if cantidad >10:
#         venta=(cantidad*precio)*descto
#     else:
#         venta=cantidad*precio
#     print("La persona #: ",i+1," debe pagar un total de: ",venta)
#     acumuladorVentas = acumuladorVentas + venta
# print("El total vendido por las personas faltantes fue  de: ",acumuladorVentas)
# print("Fin del programa")

# Ejercicio 3 
# print("Inicio del programa")
# print("Fin del programa")

# # Ejercicio 4
# print("Inicio del programa")
# vendedores=[]
# sueldosBase=[]
# ventas=[]
# sueldoTotal=[]
# comisiones=[]
# for i in range(0,vendedores,+1):
#     print("Vendedor #: ",i+1)
#     sueldosBase=float(input("Ingrese su sueldo base"))
#     ventas=float(input())
#     comisiones=ventas*0.10
# print("Fin del programa")

# # Ejercicio 5
# print("Inicio del programa")
# n=int(input("Ingrese el número de personas totales: "))
# contador=0
# acumuladorHombres=0
# acumuladorMujeres=0
# while contador < n:
#     persona=int(input("Digite el sexo de la persona 1 para hombre y 2 para mujer: "))
#     if persona == 1:
#         acumuladorHombres=acumuladorHombres+1
#         contador+=1
#     elif persona ==2:
#         acumuladorMujeres=acumuladorMujeres+1
#         contador+=1
#     else:
#         print("No ingresaste un valor valido")
#         contador -=1
# print("El total de hombres es: ",acumuladorHombres)
# print("El total de mujeres es de: ",acumuladorMujeres)
# print("Fin del programa")

# # Ejercicio 6 
# print("Inicio del programa")
# n = int(input("Ingrese el número total de carros: "))
# acumuladorAmarillo = 0
# acumuladorRosa = 0
# acumuladorRoja = 0
# acumuladorVerde= 0
# acumuladorAzul=0

# for i in range(0,n,+1):
#     print("Digite el número #: ",i+1)
#     digito = int(input("Ingrese el digito: "))
    
#     if digito == 1 or digito ==2:
#         acumuladorAmarillo = acumuladorAmarillo+1
#     elif digito == 3 or digito ==4:
#         acumuladorRosa = acumuladorRosa+1
#     elif digito == 5 or digito ==6:
#         acumuladorRoja = acumuladorRoja+1
#     elif digito == 7 or digito ==8:
#         acumuladorVerde = acumuladorVerde+1
#     elif digito == 9 or digito ==0:
#         acumuladorAzul = acumuladorAzul+1
#     else:
#         print("El digito no es valido")


# print("El total de carros que entra con calcomania amarilla es de: ",acumuladorAmarillo)
# print("El total de carros que entra con calcomania rosa es de: ",acumuladorRosa)
# print("El total de carros que entra con calcomania roja es de: ",acumuladorRoja)
# print("El total de carros que entra con calcomania verde es de: ",acumuladorVerde)
# print("El total de carros que entra con calcomania azul es de: ",acumuladorAzul)

# Ejercicio 7 
# print("Inicio del programa")
# n=int(input("Ingrese el número de personas totales: "))
# contador=0
# acumuladorHombres=0
# acumuladorMujeres=0
# edadHombres=0
# edadMujeres=0
# while contador < n:
#     persona=int(input("Digite el sexo de la persona 1 para hombre y 2 para mujer: "))
#     edad=int(input("Ingrese la edad de la persona: "))
#     if persona == 1:
#         acumuladorHombres=acumuladorHombres+1
#         edadHombres = edadHombres+edad
#         contador+=1
#     elif persona ==2:
#         acumuladorMujeres=acumuladorMujeres+1
#         contador+=1
#         edadMujeres = edadMujeres+edad
#     else:
#         print("No ingresaste un valor valido")
#         contador -=1
# promedioHombres = edadHombres/acumuladorHombres
# promedioMujeres = edadMujeres/acumuladorMujeres
# print("El total de hombres es: ",acumuladorHombres)
# print("El total de mujeres es de: ",acumuladorMujeres)
# print("El promedio de edad de los hombres es de: ",promedioHombres)
# print("El promedio de edad de los hombres es de: ",promedioMujeres)
# print("Fin del programa")

#Ejercicio 8 
# print("Inicio del programa")
# n=5
# totalVentas=0
# for i in range(0,n-1,+1):
#     print("Estimado cliente: ",i+1)
#     cantidad = int(input("Ingrese la cantidad que va a comprar: "))
#     articulo = float(input("Ingrese el precio: "))
#     total = cantidad*articulo
#     print("Debe pagar un total de: ",total)
#     totalVentas = totalVentas+total
# print("El total en ventas fue de: ",totalVentas)
# print("Fin del programa")

#Ejercicio 9
# print("Inicio del programa")
# n = int(input("Ingrese cuantos números va a comparar: "))
# contador=0
# case1=0
# case2=0
# case3=0
# while contador <n:
#     number=int(input("Digite un número: "))
#     if number <15:
#         case1=case1+1
#     elif number >50:
#         case2=case2+1
#     elif number > 15 and number <50:
#         case3=case3+1
#     contador+=1
# print("El total de número menores que 15 es de: ",case1)
# print("El total de número mayores que 50 es de: ",case2)
# print("El total de numeros comprendidos entre 15 y 50 de: ",case3)
# print("Fin del programa")

#Ejercicio 10 
# print("INICIO DEL PROGRAMA")
# numKilosComprados = float(input("Digite el número de kilos comprados: "))
# precio = float(input("Digite el precio de las manzanas: "))
# total = 0
# if numKilosComprados >=0 and numKilosComprados<=2:
#     total = precio * numKilosComprados
# elif numKilosComprados >=2.01 and numKilosComprados <=5:
#     total = precio - (precio*0.10)*numKilosComprados
# elif numKilosComprados >=5.01 and numKilosComprados<=10:
#     total = (precio - (precio * 0.15))*numKilosComprados
# elif numKilosComprados >10.01:
#      total = (precio - (precio * 0.20))*numKilosComprados
# else: 
#     print("Los valores ingresados no son validos")
# print("El total a pagar es: ",total)
# print("FIN DEL PROGRAMA")

# Ejercicio 10
print("Inicio del programa")
n = int(input("Ingrese el número total de personas que ingresaran al teatro: "))
case1=0
case2=0
case3=0
case4=0
case5=0
des=0
precio=500
for i in range(0,n-1,+1):
    edad = int(input("Ingrese la edad de la persona #: "))
    if edad >=5 and edad<=14:
        des=0.35
        dinero = precio*des
        case1 = case1+dinero
    elif edad >=15 and edad<=19:
        des=0.25
        dinero = precio*des
        case2 = case2+dinero
    elif edad >=20 and edad<=45:
        des=0.10
        dinero = precio*des
        case3 = case3+dinero
    elif edad >=46 and edad<=65:
        des=0.25
        dinero = precio*des
        case4 = case4+dinero
    elif edad>66:
        des=0.35
        dinero = precio*des
        case5 = case5+dinero
    else:
        print("La edad ingresada no es valida, debe ingresarla nuevamente")
        continue

print("En la categoria 1 el teatro al otorgar ese descuento deja de ganar: ",case1)
print("En la categoria 2 el teatro al otorgar ese descuento deja de ganar: ",case2)
print("En la categoria 3 el teatro al otorgar ese descuento deja de ganar: ",case3)
print("En la categoria 4 el teatro al otorgar ese descuento deja de ganar: ",case4)
print("En la categoria 5 el teatro al otorgar ese descuento deja de ganar: ",case5)


# # Ejercicio 11
# print("Inicio del programa")
# n=int(input("Ingrese el número de personas totales: "))
# contador=0
# edad=0
# hombresMayores=0
# hombresMenores=0
# mujeresMenores=0
# mujeresMayores=0
# while contador < n:
#     persona=int(input("Digite el sexo de la persona 1 para hombre y 2 para mujer: "))
#     edad=int(input("Ingrese la edad de la persona: "))
    

#     if persona == 1 and edad >=18:
#         hombresMayores=hombresMayores+1
#         contador+=1
#     elif persona ==1 and edad <18:
#         hombresMenores=hombresMenores+1
#     if persona ==2 and edad <18:
#         mujeresMenores=mujeresMenores+1
#         contador+=1
#     elif persona ==2 and edad>18:
#         mujeresMayores=mujeresMayores+1
#         contador+=1
#     else:
#         print("No ingresaste un valor valido")
#         contador -=1
#     totalAdultos=hombresMayores+mujeresMayores
#     totalMenores=hombresMenores+mujeresMenores

# print("El total de hombres mayores de edad es: ",hombresMayores)
# print("El total de mujeres menores de edad es de: ",mujeresMenores)
# print("El total de personas mayores de edad es de: ",totalAdultos)
# print("El total de personas menores de edad es de: ",totalMenores)
# print("Fin del programa")


