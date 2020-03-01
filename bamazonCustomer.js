var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table")

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "password",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    displayAllProducts()

})

function displayAllProducts() {
    connection.query("select * from products", function (err, data) {
        console.table(data)

        askQuestion()
    })

}
function askQuestion() {
    inquirer.prompt([
        {
            type: "input",
            message: "choose the item number",
            name: "item_id"
        },
        {
            type: "input",
            message: "how many units would you like to buy",
            name: "quantity"
        }
    ])
        .then(function (input) {
            console.log(input.item_id)
            console.log(input.quantity)


            connection.query("SELECT * FROM products where item_id = ? ", input.item_id, function (err, data) {
                  var productPrice = data[0].price
                  var productQuantity = data[0].stock_quantity - input.quantity
                connection.query("update products set stock_quantity = ? where item_id = ? ", [productQuantity, input.item_id], function(err, data){
                  var totalPrice = input.quantity * productPrice 
                  console.log("Total Price:", totalPrice) 
                    displayAllProducts()
                })
            })
        })


}