CREATE DATABASE subs;

USE subs;

CREATE TABLE persona (
	id INT AUTO_INCREMENT,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    correo VARCHAR(50),
    whatsapp VARCHAR(20) UNIQUE NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO persona 
(nombre, apellido, correo, whatsapp) 
VALUES
("Uno", "Primero", "1@gmail.com", "1111111111"),
("Dos", "Segundo", "2@gmail.com" , "2222222222"),
("Tres", "Tercero", "3@gmail.com" , "3333333333"),
("Cuatro", "Cuarto", "4@gmail.com" , "4444444444");

-- Pruebo integridad
INSERT INTO persona 
(nombre, apellido, correo, whatsapp) 
VALUES
("Tres", "Tercero", "3@gmail.com" , "3333333333");