   
    let humanChoice = "";
    let computerChoice = "";
    let humanBase = "jouw keuze komt hier, maak je keuze!";
    let computerBase = "de computer keuze komt hier!"
    let resultBase = "Het Resultaat!" 
    let result = ""; 

    const humanOutput = document.querySelector("#human");
    humanOutput.innerHTML = humanBase;
    const computerOutput = document.querySelector("#computer");
    computerOutput.innerHTML= computerBase;
    const resultOutput = document.querySelector("#result");
    resultOutput.innerHTML = resultBase;
   // function for the random number generator and the computers choice 
    function numbergenerator () {
        randomNumber = Math.floor(Math.random() * 3) + 1;
        if ( randomNumber === 1) {
            computerChoice = 'steen';
        } 
        if ( randomNumber === 2) {
            computerChoice = 'schaar';
        } 
        if ( randomNumber === 3) {
            computerChoice = 'papier';
        } 
        computerOutput.innerHTML = computerChoice;
    }   
    // fucntion for changing win or lost text
    function changetext () {           
        if (result == "lost") {
            resultOutput.innerHTML = "lost"
        }
        if (result == "draw") {
            resultOutput.innerHTML = "draw"
        } 
         if (result == "win") {
            resultOutput.innerHTML = "win"
        }
    }
    // function seeing if you won or not
    function winorlose () {
        if (humanChoice == "steen" && computerChoice == "steen") {
            result = "draw"
        };
        if (humanChoice == "steen" && computerChoice == "papier") {
            result = "lost"
        };
        if (humanChoice == "steen" && computerChoice == "schaar") {
            result = "win"
        };
        if (humanChoice == "papier" && computerChoice == "papier") {
            result = "draw"
        };
        if (humanChoice == "papier" && computerChoice == "steen") {
            result = "win"
        };
        if (humanChoice == "papier" && computerChoice == "schaar") {
            result = "lost"
        };
        if (humanChoice == "schaar" && computerChoice == "papier") {
            result = "win"
        };
        if (humanChoice == "schaar" && computerChoice == "steen") {
            result = "lost"
        };
        if (humanChoice == "schaar" && computerChoice == "schaar") {
            result = "draw"
        };
        console.log(result)
    }


    // Steen button
    const steenBtn = document.querySelector("#steen");
    steenBtn.addEventListener("click", function(event) { 
        humanChoice = event.target.id;
        humanOutput.innerHTML = humanChoice;
        numbergenerator ()
        console.log("click steen")
        winorlose()
        changetext()

    }); 

    // Papier
    const papierBtn = document.querySelector ("#papier");
    papierBtn.addEventListener("click", function(event) { 
        humanChoice = event.target.id;
        humanOutput.innerHTML = humanChoice;
        numbergenerator()
        console.log("click papier")
        winorlose()
        changetext()
    });
    
    // Schaar
    const schaarBtn = document.querySelector("#schaar");
    schaarBtn.addEventListener("click", function(event) { 
        humanChoice = event.target.id;
        humanOutput.innerHTML = humanChoice;
        numbergenerator()
        console.log("click schaar")
        winorlose()
        changetext ()
    });

    // Reset button
    const resetBtn = document.querySelector("#reset");
    resetBtn.addEventListener("click", function(event) {
        humanOutput.innerHTML = humanBase;
        computerOutput.innerHTML = computerBase
        resultOutput.innerHTML = resultBase
        console.log("click reset")
    });


    // test button
    const testBtn = document.querySelector("#Test");
    testBtn.addEventListener("click", function(event) { 
        console.log(resultOutput.innerHTML)
        console.log(computerOutput.innerHTML)
        console.log(humanoutput.innerHTML)

    });
