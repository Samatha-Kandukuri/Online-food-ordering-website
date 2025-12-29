let cartCount = 0;
const cartList = document.getElementById("cartList");
const cartCountSpan = document.getElementById("cartCount");

function addToCart(itemName) {
    cartCount++;
    cartCountSpan.textContent = cartCount;

    const li = document.createElement("li");
    li.textContent = itemName + " ";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";

    removeBtn.onclick = function () {
        cartList.removeChild(li);
        cartCount--;
        cartCountSpan.textContent = cartCount;
    };

    li.appendChild(removeBtn);
    cartList.appendChild(li);
}
