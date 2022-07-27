# Serialización
# Consiste en guardar en un fichero externo, colecciones de datos, diccionarios e incluso un objeto, la particularidad es que se va a guardar en un fichero externo codificado en código binario, es decir en una suseción de Bytes. Esto se hace con el objetivo de querer distribuir un objeto por ejemplo, o si se quiere guardar en un dispositivo de almacenamiento externo o una base de datos. 

# Para poder llevarlo a cabo se debe usar laa libreria Picle, que tiene varios métodos 

# Método dump() volcado de datos al fichero binario externo.
# Método load() Carga de los datos del fichero. 

# # importación de pickle
# import pickle

# # Creación de una lista
# lista_nombres=["Juan David","Juliana","Fercho","Julian"]
# # Se crear el fichero externo, recibe dos parametros nombre del fichero y el wb que es escribir en fora binaria
# fichero_binario=open("Lista_nombres","wb")
# # Volcado de la lista al fichero externo
# # recibe dos argumentos información que se quiere volcar y el nombre del fichero.
# pickle.dump(lista_nombres,fichero_binario)
# # Se cierra el fichero
# fichero_binario.close()
# del(fichero_binario)

# # Rescatarlo y leer su información
# import pickle
# # Creación fichero en memorio y apertura
# fichero=open("lista_nombres","rb")
# # guardando la información en memoria con pickle.load que permite cargar la información.
# lista=pickle.load(fichero)
# print(lista)

# Serialización de objetos
import pickle
class Vehiculos():
    def __init__(self, marca, modelo):
        self.marca=marca
        self.modelo=modelo
        self.andando=False
        self.acelera=False
        self.frena=False

    def arrancar(self):
        self.andando=True

    def acelerar(self):
        self.acelera=True

    def frenar(self):
        self.frena=True

    def estado(self):
        #con \n se da un salto de linea
        print("Marca: ", self.marca, "\nModelo: ", self.modelo, "\nAndando: ", self.andando, "\nAcelerando: ", self.acelera, "\nFrendando: ", self.frena)

carro1=Vehiculos("Mazda","Cx3")

carro2=Vehiculos("Mazda","Cx5")

carro3=Vehiculos("Mazda","Cx9")

carros=[carro1,carro1,carro3]

fichero=open("losCarros","wb")
pickle.dump(carros,fichero)
fichero.close()
del (fichero)

ficheroApertura=open("LosCarros","rb")
misCarros=pickle.load(ficheroApertura)
ficheroApertura.close()
for i in misCarros:
    print(i)
    print(i.estado())

    