const products = [
        {name: "Bread", price: '$7'},
        {name: "Cheese", price: '$4'},
        {name: "Ham", price: '$12'},
        {name: "Lettuce", price: '$2'}
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