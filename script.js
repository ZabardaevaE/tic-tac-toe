document.querySelector(".message-board")
    gameActive = true
    var boxes = document.querySelector(".field");       
    var counter = 1
    boxes.addEventListener('click', function (event) {
        let box = event.target
        console.log(gameActive)
        if (gameActive === true) { 
         if (box.tagName === "DIV" && box.textContent === "") {   
            box.style.backgroundColor = '#FD5B78';
            if (counter%2 === 1) {
                box.textContent = "X"
                counter = counter + 1
            } else if (counter%2 === 0) {
                box.textContent = "O"
                counter = counter + 1
            }
        }
        var winConditions = [[[0], [1], [2]],[[3],[4], [5]], [[6], [7], [8]], [[0], [3], [6]], [[1], [4], [7]], [[2], [5], [8]], [[0], [4], [8]], [[2], [4], [6]]]
        for (let i = 0; i < 8; ++i) {
            console.log(counter)
                if ((boxes.children[winConditions[i][0][0]].textContent === "X" 
                    && boxes.children[winConditions[i][1][0]].textContent === "X"
                    && boxes.children[winConditions[i][2][0]].textContent === "X") 
                    || (boxes.children[winConditions[i][0][0]].textContent === "O" 
                    && boxes.children[winConditions[i][1][0]].textContent === "O"
                    && boxes.children[winConditions[i][2][0]].textContent === "O") ){
                        boxes.children[winConditions[i][0][0]].style.backgroundColor = '#AFE313'
                        boxes.children[winConditions[i][1][0]].style.backgroundColor = '#AFE313'
                        boxes.children[winConditions[i][2][0]].style.backgroundColor = '#AFE313'
                        gameActive= false
                        console.log(box.textContent)
                        document.querySelector(".message-board").textContent = "Player " + box.textContent + " win!"
                }  else if  (counter > 9) {
                    console.log("draw")
                    document.querySelector(".message-board").textContent = "It is a draw!"
                }      
        }
        }  
    })
var restartButton = document.querySelector(".reset")
    restartButton.addEventListener("click", function(event){
    
        boxes.children[0].textContent = ""
        boxes.children[1].textContent = ""
        boxes.children[2].textContent = ""
        boxes.children[3].textContent = ""
        boxes.children[4].textContent = ""
        boxes.children[5].textContent = ""
        boxes.children[6].textContent = ""
        boxes.children[7].textContent = ""
        boxes.children[8].textContent = ""

        document.querySelector(".message-board").textContent = ""

        boxes.children[0].style.backgroundColor = "rgb(178, 203, 208)"
        boxes.children[1].style.backgroundColor = "rgb(178, 203, 208)"
        boxes.children[2].style.backgroundColor = "rgb(178, 203, 208)"
        boxes.children[3].style.backgroundColor = "rgb(178, 203, 208)"
        boxes.children[4].style.backgroundColor = "rgb(178, 203, 208)"
        boxes.children[5].style.backgroundColor = "rgb(178, 203, 208)"
        boxes.children[6].style.backgroundColor = "rgb(178, 203, 208)"
        boxes.children[7].style.backgroundColor = "rgb(178, 203, 208)"
        boxes.children[8].style.backgroundColor = "rgb(178, 203, 208)"  
        document.querySelector(".message-board")
        // gameActive = true
        // var boxes = document.querySelector(".field");
           
        // var counter = 1
        
    })        


     

