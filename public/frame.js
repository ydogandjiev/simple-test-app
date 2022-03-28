let p = document.createElement("P");
if (window.parent !== window.self) {
    p.innerText = "This is an iframe";
} else if (window.opener) {
    p.innerText = "This is a popup";
} else {
    p.innerText = "This is a top-level page";
}
document.body.appendChild(p);

let alertButton = document.createElement("BUTTON");
alertButton.textContent = "Alert";
alertButton.addEventListener("click", () => {
    window.alert("Button clicked!");
});
document.body.appendChild(alertButton);

let callButton = document.createElement("BUTTON");
callButton.textContent = "Call";
callButton.addEventListener("click", () => {
    window.location.href = "tel:4255169868";
});
document.body.appendChild(callButton);

let teamsButton = document.createElement("BUTTON");
teamsButton.textContent = "Teams";
teamsButton.addEventListener("click", () => {
    window.location.href = "msteams://";
});
document.body.appendChild(teamsButton);

let popupButton = document.createElement("BUTTON");
popupButton.textContent = "Popup";
popupButton.addEventListener("click", () => {
    window.open("/frame.html", "_blank", "height=400,width=400");
});
document.body.appendChild(popupButton);