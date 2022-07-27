# Estructuras de control condicionales en Python
# Python admite los siguientes tres condicionales: 
# 1) if 
# 2) elif
# 3) else
# Nota: dado que en Python los condicionales no se meten en bloque de código como corchetes {} en JavaScript, es muy importante la indentación donde cada bloque de código debe tener una sangria de tres espacios debajo del if, del elif o del else. 

# if (confición): 
#   aqui empiezan las condiciones

#Ejemplo multiple

# edad = int(input("Ingrese su edad"))
# if edad < 99:
#    pass
# else:
#    print("No creo que tengas esta edad usted dice que tiene {edad} años lo cual es muy poco probable")   

# Ejemplo condicional anidado
# Ejemplo:

# curso1="Requerimientos"
# curso2="Algoritmos"
# print("El curso1 es: ", curso1)
# print("El curso2 es: ", curso2)

# if curso1 == "Requerimientos":
#        if curso2 == "Algoritmos":
#               print ("Usted estudia Programación de Software")
#        else:
#               print ("Usted estudia otro programa diferente a Programación de Software")
#               print ("***** Final del Análisis del Programa de Formación SENA *****") 


# Explicación mas detallada del uso de ELIF: 

# Existen también las llamadas Condicionales encadenadas. A veces hay más de dos posibilidades y necesitamos más de dos ramificaciones. Una forma de expresarlo es con una condicional encadenada, donde solo se puede cumplir una de las ramificaciones o ninguna de ellas.

# La sentencia elif es una abreviatura de “else if”. No existe un límite definido al uso de sentencias elif, pero solo se permite una sentencia else (que es opcional) y debe ser la última rama de la sentencia:

# if condición1:
  # bloque de instrucciones para ‘Verdadero’ a la condición1
# elif condición2:
  # bloque de instrucciones para ‘Verdadero’ a la condición2
# elif condición3:
  # bloque de instrucciones para ‘Verdadero’ a la condición3
# else:
  # hacer esto solo para ‘Falso’ a todas las condiciones anteriores

# bloque de instrucciones

# Siguiente instrucción después de la condicional

# bloque de instrucciones

# Aquí se presenta una aplicación de elif:

# Ejemplo 1==========================================================================================

# voto= int(input(" \n digite su número de candidato (1=X 2=Y 3=Z) "))
# if voto==1 :
# print (" \n su voto es para el candidato X " )
# elif voto==2 :
# print (" \n su voto es para el candidato Y " )
# elif voto==3 :
# print (" \n su voto es para el candidato Z " )
# else:
# print ("su voto es inválido.")
# print (" \n Ya ha depositado su voto, puede solicitar su documento y salir. Gracias")


# Ejemplo 2========================================================================================= 
# salarioPresidente = int(input("Introduce salario presidente"))
# print("Salario presidente: " + str(salarioPresidente))

# salarioDirector = int(input("Introduce salario presidente"))
# print("Salario presidente: " + str(salarioDirector))

# salarioJefeArea = int(input("Introduce salario presidente"))
# print("Salario presidente: " + str(salarioJefeArea))

# salarioAdministrativo = int(input("Introduce salario presidente"))
# print("Salario presidente: " + str(salarioAdministrativo))

# if salarioAdministrativo<salarioJefeArea<salarioDirector<salarioPresidente:
#    print("Todo funciona correctamente, hay un orden lógico")
# else:
#    print("No hay un orden lógico en los rangos salariales")


# Ejemplo 3: ========================================================================================
# print("Programa de becas Año 2017")
# distanciaEscuela = int(input("Introduce la distancia a la escuela en km: "))
# print(distanciaEscuela)

# numeroHermanos = int(input("Ingrese el número de hermanos que tiene: "))
# print(numeroHermanos)

# salarioFamiliar = int(input("Digite el salario familiar anual bruto: "))
# print(salarioFamiliar)

# if distanciaEscuela > 40 and numeroHermanos >2 and salarioFamiliar < 20000:
#    print("Tienes derecho a beca") 
# else: 
#    print("No tienes derecho a beca")
 
# Ejemplo 4======================================================================================

print("Inicio del programa")
nPersonas = int(input("Ingrese el número de personas que asistiran al evento: "))
if nPersonas >300:
    print("Debe pagar por persona 75")
elif nPersonas >200:
    print("Debe pagar por persona 85")
elif nPersonas>0 and nPersonas <200:
    print("Debe pagar por persona 95")
else:
    print("Ingresaste un valor menor que 1 lo cual no es valido")
print("Fin del programa")















































