//declare variable to be dislayed
var currentSum = 0;
//assign value to display
document.getElementById("display").value = currentSum;


//assign button press value to variable
function getButtonNumber () {
    var buttons = document.getElementsByTagName("button")
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(){
            console.log(this.value)
            //append this value to displayed value while keeping displayed value outside of loop
            if (this.value === "clear") {
                currentSum = 0
                document.getElementById("display").value = currentSum
            } else {
                currentSum = currentSum + this.value
                document.getElementById("display").value = currentSum
            }
        })
    }
};
getButtonNumber();


//on math operator, store currentSum in 2nd smaller display
//store the math operator itself (can do this by staying on current conditional tree)
//start storing new numbers in secondSum
//on equals click, operate on currentSum and secondSum with the stored math operator and display finalSum