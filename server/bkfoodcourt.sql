CREATE DATABASE bkfoodcourt;
USE bkfoodcourt;

CREATE TABLE food (
	title varchar(255),
    price varchar(255),
    description varchar(255),
    category varchar(255),
    rating int,
    id int,
    PRIMARY KEY (ID)
);

CREATE TABLE users (
    username varchar(255) unique NOT NULL,
    password varchar(255) NOT NULL,
    id varchar(255),
    avtUrl varchar(255),
    role varchar(255),
    email varchar(255),
    PRIMARY KEY (id)
)