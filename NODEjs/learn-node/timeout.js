const foo=()=>{
    console.log("Hi abhishek");
    bar();
}
const bar=()=>{
    console.log("Hello");
    setTimeout(()=>{
        console.log("I am executed");
    },2000);
    baz();
}
const baz=()=>{
    console.log("Hi");
}
foo();
const placeOrder = () => {
    const orderData = {
        amount: 1000,
        discount: 100
    };
    console.log("Placing order...");
    let orderId = sendOrderDataToServer(orderData);
    displaySuccessfulOrder(orderId);
}

const sendOrderDataToServer = (orderData) => {
    // imitating writing data to the server
    let orderId = null;
    setTimeout(() => {
        orderId = "101";
    }, 2000); // assuming that it will take 2 seconds to save new order details to the server
    return orderId;
}

const displaySuccessfulOrder = (orderId) => {
    console.log(`Your order has been placed successfully. Your order ID is ${orderId}.`)
}

placeOrder();