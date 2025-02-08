const displayscreen = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
let displayvalue = '';  // This holds the current expression.

function display() {
    // Adding event listeners to each button.
    buttons.forEach((button) => {  
        button.addEventListener('click', (e) => {  
            let buttonText = e.target.innerHTML;  
            console.log(buttonText);  // This logs the button pressed.

            if (buttonText == 'AC') {  
                // Clear display and reset displayvalue.
                displayvalue = '';  
                displayscreen.value = displayvalue;
            } else if (buttonText == '=') {  
                // Try evaluating the expression. If invalid, show 'Error'.
                try {
                    // Check if there is a valid expression.
                    if(displayvalue!==' ') {
                        displayscreen.value = eval(displayvalue);
                    } else {
                        displayscreen.value = 'Error';
                    }
                } catch (error) {
                    displayscreen.value = 'Error';  // If eval fails, display 'Error'.
                }
            } else if (buttonText == 'X') {  
                // Replace 'X' with '*' for multiplication and append it.
                buttonText = '*';
                displayvalue += buttonText;
                displayscreen.value = displayvalue;
            } else {  
                // Append other button values to displayvalue.
                displayvalue += buttonText;
                displayscreen.value = displayvalue;
            }
        });
    });
}

display();  // Initialize the function and attach event listeners once.
