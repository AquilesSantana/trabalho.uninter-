let button = document.querySelector("#button");

document.getElementById("button").addEventListener("click", function() {
    let message ="A esperança é o sonho do homem acordado!";
    let messageElement = document.createElement("p");
messageElement.textContent = message;
document.getElementById("messageContainer").appendChild(messageElement);
})
