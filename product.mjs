const products = [
        {name: 'Bread', price: '$7', image:'Bread.jpeg'},
        {name: "Cheese", price: '$4', image:'cheese-slice.jpg'},
        {name: "Ham", price: '$12', image:'ham.png'},
        {name: "Lettuce", price: '$2', image:'lettuce.jpg'}
]


//functions to add a new product

function addProduct(name, price){
    const newProduct = {name, price};
    products.push(newProduct)
}

//Function to get all products

 function getAllProducts(){
    return products;
}

export { addProduct, getAllProducts };