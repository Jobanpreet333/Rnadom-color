const getColor = () => {
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode = "#"+randomNumber.toString(16);
    // 16 stands for hexadecimal number
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode

    navigator.clipboard.writeText(randomCode)
}
// event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
    )


// initial call
getColor();      //to get color at the start