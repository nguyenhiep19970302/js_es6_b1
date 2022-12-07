let txtStr = document.getElementsByClassName("heading")[0].innerHTML;
let str = [...txtStr];

let content = "";
str.forEach(element => {
    if (element.trim() !== "") {
        content += `<span>${element}</span>`
    }
});
document.getElementsByClassName("heading")[0].innerHTML = content;