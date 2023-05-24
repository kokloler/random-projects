   
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
    
    // Steen button
    const steenBtn = document.querySelector("#steen");
    steenBtn.addEventListener("click", function(event) { 
        humanChoice = event.target.id;
        humanOutput.innerHTML = humanChoice;
        const randomNumber = Math.floor(Math.random() * 3) + 1;
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
        console.log("click steen")
        computerOutput.innerHTML = computerChoice;
        if (computerOutput.innerHTML === "steen" ) { 
            result = "draw"
        };
        if (computerOutput.innerHTML === "papier" ) { 
            result = "lost"
        };
        if (computerOutput.innerHTML === "schaar" ) { 
            result = "win"
        };
            
        if (result == "lost") {
            resultOutput.innerHTML = "lost"
        }
        if (result == "draw") {
            resultOutput.innerHTML = "draw"
        } 
         if (result == "win") {
            resultOutput.innerHTML = "win"
        }
    }); 

    // Papier
    const papierBtn = document.querySelector ("#papier");
    papierBtn.addEventListener("click", function(event) { 
        humanChoice = event.target.id;
        humanOutput.innerHTML = humanChoice;
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        if ( randomNumber === 1) {
            computerChoice = 'steen';
        } 
        if ( randomNumber === 2) {
            computerChoice = 'schaar';
        } 
        if ( randomNumber === 3) {
            computerChoice = 'papier';
        } 
        console.log("click papier")
        computerOutput.innerHTML = computerChoice;
        if (computerOutput.innerHTML === "steen" ) { 
            result = "win"
        };
        if (computerOutput.innerHTML === "papier" ) { 
            result = "draw"
        };
        if (computerOutput.innerHTML === "schaar" ) { 
            result = "lost"
        };
            
        if (result == "lost") {
            resultOutput.innerHTML = "lost"
        }
        if (result == "draw") {
            resultOutput.innerHTML = "draw"
        } 
         if (result == "win") {
            resultOutput.innerHTML = "win"
        }
    });
    
    // Schaar
    const schaarBtn = document.querySelector("#schaar");
    schaarBtn.addEventListener("click", function(event) { 
        humanChoice = event.target.id;
        humanOutput.innerHTML = humanChoice;
        const randomNumber = Math.floor(Math.random() * 3) + 1;
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
        console.log("click schaar")
        computerOutput.innerHTML = computerChoice;
        if (computerOutput.innerHTML === "steen" ) { 
            result = "lost"
        };
        if (computerOutput.innerHTML === "papier" ) { 
            result = "win"
        };
        if (computerOutput.innerHTML === "schaar" ) { 
            result = "draw"
        };
            
        if (result == "lost") {
            resultOutput.innerHTML = "lost"
        }
        if (result == "draw") {
            resultOutput.innerHTML = "draw"
        } 
         if (result == "win") {
            resultOutput.innerHTML = "win"
        }
    });

    // Reset button
    const resetBtn = document.querySelector("#reset");
    resetBtn.addEventListener("click", function(event) {
        humanOutput.innerHTML = humanBase;
        computerOutput.innerHTML = computerBase
        resultOutput.innerHTML = resultBase
        console.log("click reset")
    });

