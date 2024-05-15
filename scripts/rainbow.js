let colorlist = ["maroon", "red", "purple", "fuchsia", "navy", "blue", "aqua"];
let rainbowEl = document.createElement("ul");

for (let i = 0; i < colorlist.length; i++) {
    let listEl = document.createElement("li");
    listEl.innerText = colorlist[i];
    listEl.style.color = colorlist[i];
    rainbowEl.appendChild(listEl);
}
document.body.appendChild(rainbowEl);
console.log(listEl);
