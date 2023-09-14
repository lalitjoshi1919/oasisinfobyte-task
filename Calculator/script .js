const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let str = "";
Array.from(str)

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerText;
        
        if (buttonValue === "=") {
           str = eval(str);
           inputBox.value = str;
        } else if (buttonValue === "Ac") {
            str = "";
            inputBox.value = "";
        } else if(buttonValue === "Del"){
           let s = str.substring(0,str.length-1)
           str = s;
            inputBox.value = s;
        } 
        else if(str === isNaN ){
            console.log("invalid index")
            input.value = str
        }
        else if(buttonValue === "+" ||buttonValue === " -"){
            str += buttonValue;
            inputBox.value = str
            return;
        }
        else {
            str += buttonValue;
            inputBox.value += buttonValue;
        }
    });
});