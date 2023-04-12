CREATE DATABASE  IF NOT EXISTS `spotify` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `spotify`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: spotify
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `album`
--

DROP TABLE IF EXISTS `album`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `album` (
  `idAlbum` int NOT NULL AUTO_INCREMENT,
  `Nombre_cancion` varchar(50) NOT NULL,
  `Año_publicacion` year NOT NULL,
  `Imagen` varchar(250) NOT NULL,
  `idArtista` int NOT NULL,
  `Discografica_idDiscografica` int NOT NULL,
  PRIMARY KEY (`idAlbum`),
  KEY `fk_Album_Artista1_idx` (`idArtista`),
  KEY `fk_Album_Discografica1_idx` (`Discografica_idDiscografica`),
  CONSTRAINT `fk_Album_Artista1` FOREIGN KEY (`idArtista`) REFERENCES `artista` (`idArtista`),
  CONSTRAINT `fk_Album_Discografica1` FOREIGN KEY (`Discografica_idDiscografica`) REFERENCES `discografica` (`idDiscografica`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album`
--

LOCK TABLES `album` WRITE;
/*!40000 ALTER TABLE `album` DISABLE KEYS */;
/*!40000 ALTER TABLE `album` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artista`
--

DROP TABLE IF EXISTS `artista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artista` (
  `idArtista` int NOT NULL,
  `Nombre_artista` varchar(45) NOT NULL,
  `Foto` varchar(250) NOT NULL,
  PRIMARY KEY (`idArtista`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artista`
--

LOCK TABLES `artista` WRITE;
/*!40000 ALTER TABLE `artista` DISABLE KEYS */;
/*!40000 ALTER TABLE `artista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cancion`
--

DROP TABLE IF EXISTS `cancion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cancion` (
  `idCancion` int NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(150) NOT NULL,
  `Duracion` time NOT NULL,
  `Numero_reproducciones` int NOT NULL,
  `Cantidad_likes` int NOT NULL,
  `Album_idAlbum` int NOT NULL,
  PRIMARY KEY (`idCancion`),
  KEY `fk_Canciones_Album1_idx` (`Album_idAlbum`),
  CONSTRAINT `fk_Canciones_Album1` FOREIGN KEY (`Album_idAlbum`) REFERENCES `album` (`idAlbum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cancion`
--

LOCK TABLES `cancion` WRITE;
/*!40000 ALTER TABLE `cancion` DISABLE KEYS */;
/*!40000 ALTER TABLE `cancion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `canciones_x_genero`
--

DROP TABLE IF EXISTS `canciones_x_genero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `canciones_x_genero` (
  `IdCanciones_X_Genero` int NOT NULL,
  `IdCanciones` int NOT NULL AUTO_INCREMENT,
  `IdGenero` int NOT NULL,
  PRIMARY KEY (`IdCanciones_X_Genero`),
  KEY `fk_Canciones_has_Genero_Canciones1_idx` (`IdCanciones`),
  KEY `fk_Canciones_has_Genero_Genero1_idx` (`IdGenero`),
  CONSTRAINT `fk_Canciones_has_Genero_Canciones1` FOREIGN KEY (`IdCanciones`) REFERENCES `cancion` (`idCancion`),
  CONSTRAINT `fk_Canciones_has_Genero_Genero1` FOREIGN KEY (`IdGenero`) REFERENCES `genero` (`idGenero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `canciones_x_genero`
--

LOCK TABLES `canciones_x_genero` WRITE;
/*!40000 ALTER TABLE `canciones_x_genero` DISABLE KEYS */;
/*!40000 ALTER TABLE `canciones_x_genero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discografica`
--

DROP TABLE IF EXISTS `discografica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discografica` (
  `idDiscografica` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  `Pais_idPais` int NOT NULL,
  PRIMARY KEY (`idDiscografica`),
  KEY `fk_Discografica_Pais1_idx` (`Pais_idPais`),
  CONSTRAINT `fk_Discografica_Pais1` FOREIGN KEY (`Pais_idPais`) REFERENCES `pais` (`idPais`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discografica`
--

LOCK TABLES `discografica` WRITE;
/*!40000 ALTER TABLE `discografica` DISABLE KEYS */;
/*!40000 ALTER TABLE `discografica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estadoplaylist`
--

DROP TABLE IF EXISTS `estadoplaylist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estadoplaylist` (
  `idEstado_playlist` int NOT NULL AUTO_INCREMENT,
  `Estado_playlist` tinyint NOT NULL,
  PRIMARY KEY (`idEstado_playlist`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estadoplaylist`
--

LOCK TABLES `estadoplaylist` WRITE;
/*!40000 ALTER TABLE `estadoplaylist` DISABLE KEYS */;
/*!40000 ALTER TABLE `estadoplaylist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genero`
--

DROP TABLE IF EXISTS `genero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genero` (
  `idGenero` int NOT NULL AUTO_INCREMENT,
  `Genero` varchar(30) NOT NULL,
  PRIMARY KEY (`idGenero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genero`
--

LOCK TABLES `genero` WRITE;
/*!40000 ALTER TABLE `genero` DISABLE KEYS */;
/*!40000 ALTER TABLE `genero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pais`
--

DROP TABLE IF EXISTS `pais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pais` (
  `idPais` int NOT NULL AUTO_INCREMENT,
  `Nombre_pais` varchar(45) NOT NULL,
  PRIMARY KEY (`idPais`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pais`
--

LOCK TABLES `pais` WRITE;
/*!40000 ALTER TABLE `pais` DISABLE KEYS */;
/*!40000 ALTER TABLE `pais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playlist`
--

DROP TABLE IF EXISTS `playlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playlist` (
  `idPlaylist` int NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(20) NOT NULL,
  `Numero_canciones` int NOT NULL,
  `Fecha_creacion` date DEFAULT NULL,
  `idEstado_playlis` int NOT NULL,
  PRIMARY KEY (`idPlaylist`),
  KEY `fk_Playlist_Estado_playlist2_idx` (`idEstado_playlis`),
  CONSTRAINT `fk_Playlist_Estado_playlist2` FOREIGN KEY (`idEstado_playlis`) REFERENCES `estadoplaylist` (`idEstado_playlist`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlist`
--

LOCK TABLES `playlist` WRITE;
/*!40000 ALTER TABLE `playlist` DISABLE KEYS */;
/*!40000 ALTER TABLE `playlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playlist_x_cancion`
--

DROP TABLE IF EXISTS `playlist_x_cancion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playlist_x_cancion` (
  `idPlaylist_X_cancion` int NOT NULL AUTO_INCREMENT,
  `Playlist_idPlaylist` int NOT NULL,
  `Cancion_idCancion` int NOT NULL,
  PRIMARY KEY (`idPlaylist_X_cancion`),
  KEY `fk_Playlist_has_Cancion_Cancion1_idx` (`Cancion_idCancion`),
  KEY `fk_Playlist_has_Cancion_Playlist1_idx` (`Playlist_idPlaylist`),
  CONSTRAINT `fk_Playlist_has_Cancion_Cancion1` FOREIGN KEY (`Cancion_idCancion`) REFERENCES `cancion` (`idCancion`),
  CONSTRAINT `fk_Playlist_has_Cancion_Playlist1` FOREIGN KEY (`Playlist_idPlaylist`) REFERENCES `playlist` (`idPlaylist`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlist_x_cancion`
--

LOCK TABLES `playlist_x_cancion` WRITE;
/*!40000 ALTER TABLE `playlist_x_cancion` DISABLE KEYS */;
/*!40000 ALTER TABLE `playlist_x_cancion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipousuario`
--

DROP TABLE IF EXISTS `tipousuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipousuario` (
  `idTipo_usuario` int NOT NULL AUTO_INCREMENT,
  `Tipo_usuario` tinyint NOT NULL,
  PRIMARY KEY (`idTipo_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipousuario`
--

LOCK TABLES `tipousuario` WRITE;
/*!40000 ALTER TABLE `tipousuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipousuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `IdUsuario` int NOT NULL AUTO_INCREMENT,
  `Contrasenia` char(10) NOT NULL,
  `Fecha_nacimiento` date NOT NULL,
  `Sexo` varchar(15) DEFAULT NULL,
  `Codigo_postal` char(6) DEFAULT NULL,
  `Fecha_validacion` date NOT NULL,
  `Email` varchar(100) NOT NULL,
  `idTipo_usuario` int NOT NULL,
  `dPais` int NOT NULL,
  PRIMARY KEY (`IdUsuario`),
  KEY `fk_Usuario_Tipo_usuario1_idx` (`idTipo_usuario`),
  KEY `fk_Usuario_Pais1_idx` (`dPais`),
  CONSTRAINT `fk_Usuario_Pais1` FOREIGN KEY (`dPais`) REFERENCES `pais` (`idPais`),
  CONSTRAINT `fk_Usuario_Tipo_usuario1` FOREIGN KEY (`idTipo_usuario`) REFERENCES `tipousuario` (`idTipo_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_x_playlist`
--

DROP TABLE IF EXISTS `usuario_x_playlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_x_playlist` (
  `idUsuario_X_Playlist` int NOT NULL AUTO_INCREMENT,
  `idUsuario` int NOT NULL,
  `idPlaylist` int NOT NULL,
  PRIMARY KEY (`idUsuario_X_Playlist`),
  KEY `fk_Usuario_has_Playlist_Playlist1_idx` (`idPlaylist`),
  KEY `fk_Usuario_has_Playlist_Usuario1_idx` (`idUsuario`),
  CONSTRAINT `fk_Usuario_has_Playlist_Playlist1` FOREIGN KEY (`idPlaylist`) REFERENCES `playlist` (`idPlaylist`),
  CONSTRAINT `fk_Usuario_has_Playlist_Usuario1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`IdUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_x_playlist`
--

LOCK TABLES `usuario_x_playlist` WRITE;
/*!40000 ALTER TABLE `usuario_x_playlist` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario_x_playlist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-04 15:00:30
