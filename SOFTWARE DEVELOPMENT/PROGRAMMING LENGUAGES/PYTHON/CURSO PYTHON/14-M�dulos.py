# Módulos imports 
# Qué son?
# Un archivo con extensión py o pyc (Python compilado) o archivo escrito en C para Cpython, que posee su propio espacio de nombres y que puede contener variables, funciones, clases e incluso otro módulos. 
# ¿Para que sirven?
# Para organizar y reutilizar el código (modularización y reutilización del código)
# ¿Como se crea?

def sumar(num1,num2):
    print("El resultado de la suma es : ",num1+num2)

def saludar(name=input("Ingrese su nombre: ")):
    print("Hola su nombre es: ",name)

class empleados():
    def __init__(self,nombre,edad,direccion,antiguedad):
        self.nombre=nombre
        self.edad=edad
        self.direccion=direccion
        self.antiguedad=antiguedad
    
    

