const image = ["dice-1.PNG", "dice-2.PNG","dice-3.PNG","dice-4.PNG","dice-5.PNG","dice-6.PNG"]
let img_1 = document.getElementById("player-1");
let img_2 = document.getElementById("player-2");
let text = document.getElementById("text");


const roll = () =>{
    let player1_score = Math.floor(Math.random()*6) + 1;
    let player2_score = Math.floor(Math.random()*6) + 1;

      setInterval(() =>{
        img_1.classList.add("rotate"); 
        img_2.classList.add("rotate");
     },10)

     clearInterval();
     img_1.classList.remove("rotate");
     img_2.classList.remove("rotate");

    img_1.setAttribute("src","images/"+image[player1_score - 1]);
    img_2.setAttribute("src","images/"+image[player2_score - 1]);
    console.log(player1_score,player2_score);


    if(player1_score > player2_score){
        text.innerHTML = "Winner is Player 1";
    }

    else if(player2_score > player1_score){
        text.innerHTML = "Winner is Player 2";
    }

    else{
        text.innerHTML = "Match Draw..."
    }
}

