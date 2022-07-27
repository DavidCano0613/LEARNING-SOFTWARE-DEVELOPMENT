# Archivos externos
# Cómo trabajar con ficheros externos de texto cn el módulo IO

# Objetivo: Persistencia de datos-Consiste en conversvar la información para trabajar con ella en el futuro. 
# Manejo de archivos externos 
# Trabajo con BD

# Archivos de texto plano
# Fases necesarias para guardar información en archivos externos
# Creación -
# Apertura -
# Manipulación -
# Cierre -

from io import open #open para poder abrir un archivo externo

# 1)
archivo_texto=open("archivo.txt","w")
frase="Buenos días es hora de estudiar python \n el lunes"
archivo_texto.write(frase)
archivo_texto.close()

# 2)
archivo_texto=open("archivo.txt","r")
texto=archivo_texto.read()
# readlines, lee todo linea a linea y almacena la información en una lista
lineas_texto=archivo_texto.readlines()
archivo_texto.close()
print(texto)
print(lineas_texto[2])

# 3)
archivo_texto=open("archivo.txt","a")
archivo_texto.write("\n siempre es una buena ocasión para estudiar")
archivo_texto.close()

# 4)
# Seek nos sirve para poner el puntero donde queramos
archivo_texto=open("archivo.txt","r")
archivo_texto.seek(11)
# Con len para ponerlo en la mitad
archivo_texto.seek(len(archivo_texto.read())/2)

print(archivo_texto.read())
