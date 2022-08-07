let display = document.getElementById('display');                                  //to get .div display ID in .js file I used document.ElementByID().
let buttons = Array.from(document.getElementsByClassName('button'));               //to get all the buttons in .js file but in Array form because I'm making a calculator I used Array.from func to tell Javascript that I need the buttons in array from a class in my HTML file thus I wrote it as document.getElementByClassName.
buttons.map(button => {                                                            //to make a map of button so that each element of my buttons I type is called separately so I become able to calculate each element I used map().
    button.addEventListener('click', (e) => {                                      //since OnClick over-writes so I've used an EventListener to tell my .js file that button will need to be clicked to call the element. (e) is short of MouseEvent to make .js file know that it'll be a mouse click. (e) contains all the info about previous func so we can use it later to tell .js to do same on another element.
         switch(e.target.innerText){                                               // here I'm not using if statement to tell .js about what actions to perform, I've rather used switch statement here for this block of code to perform different functions based on conditions such as erasing all elements on display screen, calculations, erasing each element on display etc.
             case 'ESC':                                                           //here I referred ECS with case statement to tell .js to empty the display screen when ECS button is clicked.
                 display.innerText = '';                                           //here innerText is used because it is used to return the selected (input data from user like cin in C++) element on screen. 
                 break;                                                            //break is used to quite the loop of this switch statement so this order cannot be followed by other buttons.
                 case '←':                                                         //now I'm using backspace button (written in HTML as &larr) to give it a functioning.
                     if(display.innerText){                                        //now telling .js file if there's an input on display then what this &larr can do next.
                     display.innerText = display.innerText.slice(0, -1);           //using slice as it limits the selection of element from a start & end point, where 0 tells the starting point & -1 tells it to minus that previous input (element).
                    }
                     break;                                                        // now breaking again to quite its reach to another button.
                     case '=':                                                     // now I'm adding functioning to = button by using case statement to select it from HTML.
                         try{                                                      // using try catch func to get a simple error at one place instead of making the whole calculator look sus!
                         display.innerText = eval(display.innerText);              // here eval function evaluates the values, means it will perform the calculations.
                         } catch{
                             display.innerText = 'Wrong Input!';                   // here if the element aren't recognized by .js e.g; operators (1*/=Wrong Input Error) are used to get result then it'll show the simple error sign rather than breaking calculator.
                         }
                         break;                                                    // breaks the last button here.
             default: 
                 display.innerText += e.target.innerText;                          // now to show element of buttons on the display screen we use default, so when the button is clicked it shows the element on the calc screen. target is used to trigger the (e) so it can call the element. + is used to join two separate statements together to return the results.
         } 
    });
});