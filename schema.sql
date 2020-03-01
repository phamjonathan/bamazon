DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABSE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INTEGER (11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(255), NULL,
    department_name VARCHAR(255) NULL,
    price DECIMAL (10,2) NULL,
    stock_quantity INT NULL,
);

 