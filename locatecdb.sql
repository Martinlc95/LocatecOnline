-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 12, 2018 at 11:57 PM
-- Server version: 5.6.34-log
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `locatecdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `alumnos`
--

CREATE TABLE `alumnos` (
  `matricula` varchar(50) NOT NULL,
  `contra` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `alumnos`
--

INSERT INTO `alumnos` (`matricula`, `contra`) VALUES
('A01250373', 'mar3'),
('A01250374', 'mar4'),
('A01250375', 'mar5');

-- --------------------------------------------------------

--
-- Table structure for table `encontrados`
--

CREATE TABLE `encontrados` (
  `objetoEnc` varchar(50) NOT NULL,
  `encontrador` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `encontrados`
--

INSERT INTO `encontrados` (`objetoEnc`, `encontrador`, `email`, `categoria`, `descripcion`, `fecha`) VALUES
('Audifonos', 'Erick', 'erick@itesm.mx', 'PersonalObjects', 'Audifonos marca Bose, color gris, cable un poco roto.', '2018-11-12 05:32:22'),
('Calculadora', 'Alexa', 'alexa@itesm.mx', 'Electronics', 'Calculadora marca casio, color gris con negro, encontrada en la biblioteca 2 piso.', '2018-11-12 05:32:43'),
('Collar', 'Humberto', 'humberto@itesm.mx', 'PersonalObjects', 'Collar de perlas color beige, lo encontre en una mesa de biblio olvidado.', '2018-11-12 05:33:26'),
('Mouse', 'Juan', 'juan@itesm.mx', 'Electronics', 'Eagle Warrior mouse, color gray and black, found in the library', '2018-11-12 06:05:28'),
('IFE', 'Amanda', 'amanda@items.mx', 'IDCards', 'Encontre una ife a nombre de Kairo Hunnigan.', '2018-11-12 05:33:35'),
('Mochila', 'Kevin', 'kevin@itesm.mx', 'PersonalObjects', 'Encontre una mochila deportiva en el salon A4-207, es color azul con negro.', '2018-11-12 05:33:39'),
('Lentes', 'Federico', 'federico@itesm.mx', 'PersonalObjects', 'Encontre unos lentes de aumento en las mesitas ubicadas en la entrada de Centro Estudiantil, color blanco.', '2018-11-12 05:33:43'),
('Gorra', 'Ernesto', 'ernesto@itesm.mx', 'Clothes', 'Gorra deportiva marca nike, color verde, la encontre por las canchas de tennis.', '2018-11-12 06:04:29'),
('Sueter', 'Miranda', 'miranda@itesm.mx', 'Clothes', 'Tela de licra, color guinda con flores.', '2018-11-12 05:34:50');

-- --------------------------------------------------------

--
-- Table structure for table `perdidos`
--

CREATE TABLE `perdidos` (
  `objetoPer` varchar(50) NOT NULL,
  `perdedor` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `perdidos`
--

INSERT INTO `perdidos` (`objetoPer`, `perdedor`, `email`, `categoria`, `descripcion`, `fecha`) VALUES
('Chaleco', 'Miriam', 'miriam@itesm.mx', 'Clothes', 'Chaleco marca nike deportivo, color negro con amarillo.', '2018-11-12 05:35:22'),
('Chamarra', 'Sofia', 'sofia@itesm.mx', 'Clothes', 'Chamarra negra de tela rompe vientos, marca calvin klein.', '2018-11-12 05:35:32'),
('Lentes', 'Karen', 'karen@itesm.mx', 'PersonalObjects', 'Lentes de sol con armazon cafe, tipo gota. Los perdi el 5 de Noviembre.', '2018-11-12 05:35:40'),
('Arduino', 'Elias', 'elias@itesm.mx', 'Electronics', 'Olvide un arduino UNO en el laboratorio de electronica y ya no se encuentra ahi.', '2018-11-12 05:35:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`matricula`);

--
-- Indexes for table `encontrados`
--
ALTER TABLE `encontrados`
  ADD PRIMARY KEY (`descripcion`);

--
-- Indexes for table `perdidos`
--
ALTER TABLE `perdidos`
  ADD PRIMARY KEY (`descripcion`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
