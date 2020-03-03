# bamazon
## Instructions

### Challenge #1: Customer View (Minimum Requirement)

1. Create a MySQL Database called `bamazon`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.


# Motivation

A beginner's guide to utitlize MySQL and Inquirer npm packages for data input and storage to create an Amazon-like storefront.

# Screenshots
Use the screenshots below as a reference

## Schema 

![Schema](https://user-images.githubusercontent.com/55514757/75814882-7fc3bf80-5d60-11ea-8d4a-7dada154f5e7.png)

## Seeds

![Seeds](https://user-images.githubusercontent.com/55514757/75814681-2b204480-5d60-11ea-8983-24009878a769.png)

## Product List

![Productlist](https://user-images.githubusercontent.com/55514757/75814895-85210a00-5d60-11ea-8b09-d21898208e80.png)

## Command Line Interface

![CLI](https://user-images.githubusercontent.com/55514757/75815089-d03b1d00-5d60-11ea-9691-814d04b4731d.png)


## Installation & Configuration

In order to run this application you should install the required packages. Run the following installations in your terminal:
`npm install mysql` and `npm install inquirer`

After installation run `node` to start the application `node bamazoncustomer.js`


