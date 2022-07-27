# Iterfaces gráficas - Teoría y consideraciones importantes. 

# Son ventanas con las que se puede interacutar con los usuarios. 
# Es el intermediario entre el usuario y el programa.
# lIBRERIAS = Tkinter, WxPython, PyQT, PyGTK.
# La extensión pyw en el archivo de interfaz grafica no abre la consola.
# Buscar la documentación de tkinter



# Importación de la libreria
from tkinter import*
from typing import NoReturn

# 1) Construcción de la raíz
raiz=Tk()

# Para dar titulo a la ventana
raiz.title("Ventana de pruebas")

# Sirve para fijar el tamaño de la ventana, Recibe dos parametros el width y el height 
raiz.resizable(10,5)

# Para cambiar icono
# raiz.iconbitmap("aquivalaruta")

# Para cambiar el tamaño de la ventana
# raiz.geometry()

# Para cambiar color de fondo
raiz.config(bg="black")


# 2) Construcción de un frame
# El frame debe empaquetarse, es decir, meterlo dentro de la raíz.
# Al frame debe darse tamaño, este tamaño es fijo.
miFrame=Frame(raiz,width=500,height=400)

# Empaquetado del frame en la raíz.
miFrame.pack()
label =Label(miFrame,text="Hola",fg="Blue", font=(18))




# Ubica el texto con coordenadas
label.place(x=250,y=5)

# miFrame.config(bg="Blue")


# Este metodo debe estar siempre al final, es como un bucle infinito que mantiene la ventana activa. 
raiz.mainloop() 

