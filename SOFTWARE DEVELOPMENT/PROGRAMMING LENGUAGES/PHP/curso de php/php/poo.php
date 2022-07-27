<?php

//* POO EN PHP
//* CLASES

class Persona{
  public $nombre;
  private $edad;
  protected $altura;

  public function asignarNombre($nuevoName){
    $this->nombre=$nuevoName;
  }
  public function imprimirNombre(){
    echo "Hola soy ". $this->nombre." \n";
  }
  public function mostrarEdad(){
    $this->edad=21;
    return  $this->edad;
  }
  
}

//*instanciando clases y accediendo a las propiedades 
$david = new Persona();
$david->asignarNombre("David");
$david->imprimirNombre();


$daniela = new Persona();
$daniela->asignarNombre("Maria Daniela");
$daniela->imprimirNombre();

echo $daniela->nombre;
// echo $daniela->edad;
// echo $daniela->altura;
echo $daniela->mostrarEdad();

//* Herencia

class Empleado extends Persona{
  public $puesto;
  public function presentarse(){
    echo "Hola soy ".$this->nombre." y mi puesto es: ".$this->puesto;
  } 

}

$wilson = new Empleado();
$wilson->asignarNombre("Wilson Paniagua");
$wilson->puesto="Domiciliario";
$wilson->presentarse();

//* Constructor en PHP

class Profesores{
  function __construct($name,$age,$ocupation){
    $this->nombre=$name;
    $this->edad=$age;
    $this->ocupation=$ocupation;
  }

  //*Métodos estaticos
  public static function unMetodo(){
    echo "Soy un metodo estatico";
  }
}

// clase::unMetodo();

$carlos = new Profesores("Carlos",21,"Matematico");





//* 
//* 
//* 
//* 
//* 
//* 
//* 
//* 
//* 
//* 
//* 


?>