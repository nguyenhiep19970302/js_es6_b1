const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

const changeColor = () => {
    let content = "";
    colorList.forEach(color => {
        content += `
        <button class="color-button ${color}"></button>
        `;
    });
    document.getElementById("colorContainer").innerHTML = content;
};
changeColor()

let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add("active");

        let changecolor = document.getElementById("house").classList;
        if (changecolor[1]) {
            changecolor.remove(changecolor[1]);
        };
        document.getElementById("house").classList.add(button.classList[1]);
    });
});