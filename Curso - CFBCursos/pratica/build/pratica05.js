"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products = [
    { id: 1, name: "Mouse", price: 100 },
    { id: 2, name: "Keyboard", price: 250 },
    { id: 3, name: "Monitor", price: 900 },
];
let cart = [];
const addToCart = (productId, quantity) => {
    if (quantity > 0) {
        const cartProd = cart.find((prod) => prod.id === productId);
        if (!cartProd) {
            const prod = products.find((prod) => prod.id === productId);
            prod ? cart.push({ ...prod, quantity }) : console.log("Não existe esse produto");
        }
        else {
            if (cartProd.quantity) {
                cartProd.quantity += quantity;
            }
        }
    }
    else {
        console.log("A quantidade precisa ser maior que 0");
    }
};
const removeFromCart = (productId) => {
    cart = cart.filter((prod) => prod.id !== productId);
};
const updateQuantity = (productId, quantity) => {
    if (quantity > 0) {
        let currentProd = cart.find((prod) => prod.id === productId);
        currentProd ? currentProd.quantity = quantity : console.log("Produto não encontrado");
    }
    else {
        removeFromCart(productId);
    }
};
const getCartTotal = () => {
    return cart.reduce((total, prod) => total + prod.price * prod.quantity, 0);
};
const getCartSummary = () => {
    const lines = cart.map((prod) => {
        return `${prod.name} x${prod.quantity} -> R$${prod.price * prod.quantity}`;
    });
    return `${lines.join('\n')}\nTotal: ${getCartTotal()}`;
};
addToCart(1, 2);
addToCart(2, 1);
updateQuantity(1, 5);
removeFromCart(2);
console.log(getCartSummary());
