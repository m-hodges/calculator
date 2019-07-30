//declare variable to be dislayed
var currentSum = 0;
//cached sum variable
var cachedSum = 0;
//final output
var finalSum = 0;
//operator cache
var operator = "";
//operator functions
var add = function (a, b) {
    return a + b
}
var subtract = function (a, b) {
    return a - b
}
var multiply = function (a, b) {
    return a * b
}
var divide = function (a, b) {
    return a / b
}

//assign value to display
document.getElementById("display").value = currentSum;

//full non-refactored calculator function
function calculate () {
    var buttons = document.getElementsByTagName("button")
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(){
            console.log(this.value)
            //append this value to displayed value while keeping displayed value outside of loop
            if (this.value === "clear") {
                currentSum = 0
                cachedSum = 0
                finalSum = 0
                document.getElementById("display").value = currentSum
            } else {
                currentSum = currentSum + this.value
                document.getElementById("display").value = currentSum
                if (this.value === "x") {
                    operator = multiply
                    cachedSum = cachedSum + currentSum.replace(/[x]/, "")
                    console.log(cachedSum)
                    currentSum = 0
                    document.getElementById("display").value = currentSum
                }
                else if (this.value === "/") {
                    operator = divide
                    cachedSum = cachedSum + currentSum.replace(/[/]/, "")
                    console.log(cachedSum)
                    currentSum = 0
                    document.getElementById("display").value = currentSum
                }
                else if (this.value === "-") {
                    operator = subtract
                    cachedSum = cachedSum + currentSum.replace(/[-]/, "")
                    console.log(cachedSum)
                    currentSum = 0
                    document.getElementById("display").value = currentSum
                }
                else if (this.value === "+") {
                    operator = add
                    cachedSum = cachedSum + currentSum.replace(/[+]/, "")
                    console.log(cachedSum)
                    currentSum = 0
                    document.getElementById("display").value = currentSum
                }      
                //on equals click, operate on currentSum and secondSum with the stored math operator and display finalSum
                else if (this.value === "=") {
                    currentSum = currentSum.replace(/[=]/, "")
                    a = Number(currentSum)
                    b = Number(cachedSum)
                    finalSum = operator(a, b)
                    document.getElementById("display").value = finalSum
                }
            }
        })
    }
};
calculate();

//double operations don't work yet