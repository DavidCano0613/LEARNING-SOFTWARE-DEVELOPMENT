# Programación orientada a objetos 

# 1) Creación de un una clase simple: Construcción de la clase
class Carros(): 
    # Propiedades (Inizialización de variables)
    largoChasis=250
    anchoChasis=120
    ruedas=4
    enmarcha=False
    #Metodos-Funciónes
    # Siempre self como primer argumento.
    def arrancar(self,arrancar): 
       self.enmarcha=arrancar 
       if(self.enmarcha==True):
           return print("El carro esta encendido")
       else:
           return print("El carro esta apagado")

    def estado(self):
        print("El carro tiene: ",self.ruedas," ruedas. Un ancho de: ",self.anchoChasis," y un largo de: ",self.largoChasis)

# print("--------------------------------------------Instancia del primer objeto carro------------------------------------------------------------")
# # Instancia 1 de la clase Carros
# mazdaCX9=Carros()
# # Invocando propiedades
# print(mazdaCX9.largoChasis)
# print(mazdaCX9.anchoChasis)
# # Invocando métodos
# mazdaCX9.arrancar(True)
# mazdaCX9.estado()
# print("--------------------------------------------Instancia del segundo objeto carro---------------------------------------------------------")

# # Instancia 2 de la clase carros
# mazdaCX10=Carros()
# # Invoocando propiedades
# print(mazdaCX9.largoChasis)
# print(mazdaCX9.anchoChasis)
# # Invocando métodos
# mazdaCX9.arrancar(False)
# mazdaCX9.estado()

# ==============================================================================================================

# 2) Creación de una clase con función constructora y algunos ejemplos

# class Humanos():
#     # Atributo de tipo clase, fuera del constructor
#     especie="Humano"
#     # Función constructora
#     def __init__(self,nombre,edad,iden,state):
#         # Atributos de tipo instancia dentro del constructor
#         self.name=nombre
#         self.age=edad
#         self.id=iden
#         self.state=state
#         self.comidasFavoritas=[]
#     def verEdad(self):
#         if self.age >=18:
#             return print("Eres mayor de edad")
#         else:
#             return print("Eres menor de edad")
#     def estado(self):
#         print("Me llamo", self.name, "tengo", self.age, "años y mi id es:",self.id,"mi estado civil es:",self.state)

# Invocando el atributo de tipo clase
# print(david.especie)

# Leyendo el atributo de clase sin haber instanciado un objeto, es posible dado que es un atributo de clase
# print(Humanos.especie)

# Creando dinamicamente un atributo de tipo clase
# Humanos.planeta_Habitado = "Planeta tierra"
# print(david.planeta_Habitado)
# print(wilson.planeta_Habitado)

# Instancia de clase y paso de parámetros al constructor
# david=Humanos("Juan David",21,123,"soltero")
# print(david.name)
# david.estado()
# david.verEdad()

# Creando dinamicamente un atributo de tipo instancia(no en todos los lenguajes)
# david.pareja="Daniela"
# print(david.pareja)
# wilson=Humanos("Wilson",34,321,"Casado")
# wilson.estado()
# print(wilson.pareja)

# Accediendo a un atributo y un método que no existe, saldra error.
# print(david.carrera)
# david.correr()

# Asignando valores a la lista del objeto 
# david.comidasFavoritas=["Hamburguesa","Perro","Pizza"]
# david.comidasFavoritas.append("Burritos")
# print(david.comidasFavoritas)

# Asignando nuevos valores a la lista anterior sin append
# david.comidasFavoritas=["Sopa","Ensaladas","Vegetales"]
# print(david.comidasFavoritas)

# Asiganando dinamicamente un nuevo atributo de tipo lista al objeto
# david.favoriteFood=["Hamburguesas"]
# print(david.comidasFavoritas)
# print(david.favoriteFood)

#===============================================================================================================

# 3) Encapsulación. 
# Para encapsular en python una propiedad se usa dos guiones bajos y el nombre de la propiedad (variable) así: __variables=valor

# class motos():
#     def __init__(self,color,marca,cilindraje):
#         self.color=color
#         self.marca=marca
#         self.cilidraje=cilindraje
#         self.__ruedas=2
        
# libero=motos("Gris","Yam",125)
# libero.__ruedas=4
# print(libero.__ruedas)


# =============================================================================================================

# 4) Herencia

# 4.1) Construcción de la clase padre.

# class Vehiculos():
#     # Función Constructora
#     def __init__(self, marca, modelo):
#         self.marca=marca
#         self.modelo=modelo
#         self.andando=False
#         self.acelerando=False
#         self.frena=False

#     def arrancar(self):
#         self.andando=True

#     def acelerar(self):
#         self.acelerando=True

#     def frenar(self):
#         self.frena=True

#     def estado(self):
#         #con \n se da un salto de linea
#          print("Marca: ", self.marca, "\nModelo: ", self.modelo, "\nAndando: ", self.andando, "\nAcelerando: ", self.acelerando, "\nFrendando: ", self.frena)
        
# Sintaxis de la herencia
# Poniendo entre el parentesis el nombre de una clase, indico que la clase heredara de la clase que este dentro del parentesis en este caso vehiculos.

# 4.2) Construcción de clase hija
# class Motos(Vehiculos):
#     piqueMoto=""
#     def pique(self):
#         self.piqueMoto="Se esta picando la moto"
        
    # Sobreescritura de métodos, cuando se ejecute el metódo estado de la clase hija va sobreescribir o anular el metódo estado de la clase padre que es por decirlo así el original, pero en este caso esta sobreescrito.
    
    # def estado(self):
    #     print("Marca: ", self.marca, "\nModelo: ", self.modelo, "\nAndando: ", self.andando, "\nAcelerando: ", self.acelerando, "\nFrendando: ", self.frena, "\n", self.piqueMoto) 
        
    # pass #Esta palabra reservada permite no crear nada en la clase moto si no que solo tenga lo que hereda. 

# Instancia de la clase hija moto.
# boxerCt= Motos("Yamaha","MT-09")

# Invocación de propiedades y métodos
# boxerCt.arrancar()
# boxerCt.acelerar()
# boxerCt.frenar()
# boxerCt.pique() 
# boxerCt.estado()


# 4.3) Cadena o jerarquia de herencia
# Clase que hereda de motos y de vehiculos
# class MotosEnduro(Motos):
#     pass


# Otra clase que solo hereda de vehiculos
# class CamionDeCarga(Vehiculos):
#     def carga(self,cargar):
#         self.cargado=cargar
#         if(self.cargado==True):
#             return print("la furgoneta está cargada")
#         else: 
#             return print("La fugoneta no esta cargada")

# Instancia clase camión
# micamion=CamionDeCarga("D1","Foton")
# micamion.arrancar()
# micamion.estado()
# micamion.carga(True)

# Error a proposito, moto no hereda de furgoneta
# boxerCt.carga(True)

# Error a propositvo, camión no hereda de moto
# micamion.pique()

#  4.4) Herencia multiple

# Otra clase
# class VElectricos():
#     tipo_Vegiculo="Vehiculo electrico"
#     def __init__(self,autonomia):
#         self.autonomia=autonomia
        
#     def cargaEnergia(self):
#         self.cargando=True


# Clase que hereda de dos clases cuando hay herencia multiple se da preferencia siempre a la primera clase que se ponga. 

# 1)
# class bicicletaElectrica(Vehiculos,VElectricos):
#     pass

# ciclaGWZ=bicicletaElectrica("GW","2019")
# ciclaGWZ.estado()
# print(ciclaGWZ.cargaEnergia())

# 2)
# class bicicletaElectrica(VElectricos,Vehiculos):
#     pass

# ciclaGW=bicicletaElectrica(100)
# print(ciclaGW.autonomia)

# 4.5) Super()
# Va a llamar al método de la clase padre

# class empleado:
#     def __init__(self,nombre,edad,iden,sueldo):
#         self.nombre = nombre
#         self.edad = edad
#         self.iden = iden
#         self.sueldo = sueldo

#     def calcularSueldo(self,descuentos,bonos):
#         return self.sueldo-descuentos+bonos

# class AgenteVentas(empleado):
#     def __init__(self, nombre, edad, iden, sueldo,caja): 
#         super() .__init__(nombre, edad, iden, sueldo)
#         self.numeroDeCaja=caja

# class Tripulante(empleado):
#     def __init__(self, nombre, edad, iden, sueldo,caja):
#         super() .__init__(nombre, edad, iden, sueldo)
#         self.numeroDeCaja=caja

#     def mostrarLicencia(self):
#         if self.edad >= 50 and self.edad <100:
#             return print("Renuevas tu licencia cada año")
#         else:
#             return print("Renuvas tu licencia cada 6 meses")

# santiago=Tripulante("Santiago",23,12345,1200,6)
# print(santiago.nombre)
# santiago.mostrarLicencia()

# 4.6) isinstance()
# Nos va informar si un objeto es instancia de una clase determinada, podemos saber el objeto a que clase pertenece y devuelve true si si pertenece a esa clase y false si no, recibe dos parámetros nombre del objeto y clase. 
# print(isinstance(santiago,AgenteVentas))

# =============================================================================================================

# 5) Polimorfismo
# Como se comporta un objeto ante la misma orden. 

# class carro():
#     def desplazamiento(Self):
#         print("Me desplazo usando 4 ruedas")

# class motos():
#     def desplazamiento(Self):
#         print("Me desplazo usando 2 ruedas")

# class camion():
#     def desplazamiento(Self):
#         print("Me desplazo usando 6 ruedas")

# # Esto es una función y recibe un objeto como parámetro y llama al metódo desplazamiento, es una función que llama al método del objeto
# def desplazamientoVehiculo(vehiculo):
#     # Aquí se llama al método del objeto
#     vehiculo.desplazamiento()

# rx115=motos()
# mazda3=carro()
# mercedes=camion()

# desplazamientoVehiculo(rx115)
# desplazamientoVehiculo(mazda3)
# desplazamientoVehiculo(mercedes)