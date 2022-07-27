<?php
//* Forma 1 
$servidor="localhost";
$usuario="root";
$contraseña="";

try{ 
  $conexion=new PDO("mysql:host=$servidor;dbname=album",$usuario,$contraseña);
  $conexion->setAttibute(PDO::ATTR_ERRORMODE,PDO::ERRORMODE_EXCEPTION);
  echo "Conexión establecida";
}catch(PDOException $error){
  echo "Conexión erronea".$error;

}

//*Forma 2







?>