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