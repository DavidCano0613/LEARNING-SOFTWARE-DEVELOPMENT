# Guardar datos de forma permante en ficheros. 

# Para la ejemplificación de este ejercicio:
# Se crearan clases
# Se instanciaran las clases
# Se creara un archivo externo donde se guarden los objetos
# Se podra usar desde diferentes programas diferentes ficheros de python y diferentes momentos en el tiempo 


import pickle
from types import MethodDescriptorType

class humanos:
    def __init__(self,name,gen,age):
        self.name=name
        self.gen=gen
        self.age=age
        print("Se ha creado una persona con el nombre: ",self.name)
    def __str__(self):
        return "{} {} {}".format(self.nombre, self.gen, self.edad)
     
 
# Se crearan una lista que guarde las personas, que sirva para gaurdar y leer esa información en un fichero externo
class listaPersonas:
    people=[]
    def __init__(self):
        # 
        listaDePersonas=open("ficheroExterno","ab+")
        # 
        listaPersonas.seek(0)
        # volcado de información
        try:
            self.people=pickle.load(listaPersonas)
            print("Se cargaron {} personas del fichero externo".format(len(self.mostrarPersonas)))
        except:
            print("El fichero está vacio")
        finally:
            listaDePersonas.close()
            del(listaDePersonas) 

    


    # Metodo para agregar personas a la lista
    def agregarPersonas(self,p):
        self.people.append(p) 
    # Metodo para leer las personas de la lista
    def mostrarPersonas(self):
        for p in self.people:
            print(p)
    # Metodo para guardar personas en el fichero externo
    def guardarPersonasFicheroExterno(self):
        listaDePersonas=open("ficheroExterno","wb")
        pickle.dump(self.people,listaDePersonas)
        listaDePersonas.close()
        del(listaDePersonas)

    def mostrarInfoFicheroExterno(self):
        print("La información del fichero externo es la siguiente: ")
        for p in self.people:
            print(p)



miLista=listaPersonas()
p=humanos("Sandra","Femenino",39)
miLista.agregarPersonas(p)
p=humanos("Ana","Femenino",25)
miLista.agregarPersonas(p)
p=humanos("Carolina","Femenino",35)
miLista.agregarPersonas(p)
miLista.mostrarPersonas()
miLista.mostrarInfoFicheroExterno()





