-- donuts database

CREATE DATABASE donuts_db;

USE donuts_db;

CREATE TABLE donuts(
	id INT NOT NULL AUTO_INCREMENT,
    donut_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    primary key(id)
);