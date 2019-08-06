var canvasWidth = 1000; 
var canvasHeight = 750;  
var changePkmon = 0;  
var changePkmon1 = 0;  
var plyr1swtchpk1 = 0;  
var plyr1swtchpk2 = 0; 
var plyr1swtchpk3 = 0; 

function setup() {  
  createCanvas(canvasWidth,canvasHeight);  
  //background(66, 227, 245); 
  //fill("green")
  //rect(0,500,1000,250); 
} 

function draw() {  
 
//the color of the background  
  background(66, 227, 245); 
  fill("green")
  rect(0,500,1000,250); 
//color of the background ends here 

//The 3 boxes are restart, and two change pokemons for both players
  rect(800,0,200,100); 
  rect(0,0,200,100); 
  rect(400,0,200,100);  

//player one and fill("yellow") is player one's first pokemon 
  fill(0,0,0);  
  rect(0,100,200,400);  
  fill("yellow"); 
  rect(250,300,200,200);  
 
//Attacks of both players pokemon, both have 2 attacks, and the other one is player 2's 
//first Pokemon 
  fill("red"); 
  rect(550,550,200,150); 
  rect(750,550,200,150); 
  rect(250,550,200,150);  
  rect(50,550,200,150);  
  rect(550,300,200,200); 

//The writings in the program are all here, with fontsize. 
  fill("black");  
  textSize(25); 
  text("Deal 10 Dmg", 580,625);  
  text("Deal 10 Dmg",80,625 ); 
  textSize(18); 
  text("Deal random Dmg 1-20", 760, 625); 
  text("Deal random Dmg 1-20", 260, 625); 
  text("RESTART GAME", 430, 50);
  
  //player two's character
  fill("blue"); 
  rect(800, 100, 200, 400); 
  
  //health pointbar of both active pokemons and pkHps are the pkmon's health
  fill("grey")
  rect(600, 275, 100, 10);  
  rect(300, 275, 100, 10); 
  fill(88, 199, 60);
  rect(600, 275, pkHp2, 10); 
  rect(300, 275, pkHp1, 10);  
  //console.log( pkHp1, pkHp2);  

  //if(pkHp1 == 0 || pkHp2 == 0) { 
    //fill("yellow"); 
    //rect(0,0,canvasWidth,canvasHeight); 
    //fill("green"); 
    //rect(0,500,canvasWidth,canvasHeight/2)
    //} 
   
  if(changePkmon == 1) {  
      //This code is for the player to switch Pokemons
      fill("blue"); 
      rect(0,0,canvasWidth,canvasHeight);  
      fill("green"); 
      rect(0,650,200,100); 
      fill("red"); 
      rect(100,100,200,200);  
      rect(400,100,200,200); 
      rect(700,100,200,200);   
    }  

    if(changePkmon1 == 1) {  
        //This code is for the player to switch Pokemons
        fill("red"); 
        rect(0,0,canvasWidth,canvasHeight);  
        fill("green"); 
        rect(0,650,200,100); 
        fill("blue"); 
        rect(100,100,200,200); 
        rect(400,100,200,200); 
        rect(700,100,200,200);  
      }  
}  


let pkHp1 = 100; 
let pkHp2 = 100;   
let pTurn1 = 1; 
let pTurn2 = 0; 

function mouseClicked() {   

    //The function of this if statement is to allow for deal 10 dmg to happen 
    //for player one to attack first, sets values to true and false
    if(pTurn1 == 1) {
        if(mouseX > 50 && mouseX < 250 ){
            if(mouseY > 550 && mouseY < 750){
                if(pkHp2>0){
                pkHp2 = pkHp2 - 10 
                pTurn1 = 0 
                pTurn2 = 1
            }
        }
    }
  }  
  
  //The function of this statement is to allow for deal random dmg to happen 
  //for player one to attack, sets values to true and false
    if(pTurn1 == 1) {
        if(mouseX > 250 && mouseX < 450) { 
            if(mouseY > 550 && mouseY < 750) { 
                if(pkHp2 > 0) { 
                    pkHp2 = pkHp2 - Math.floor(Math.random()*21); 
                    pTurn1 = 0; 
                    pTurn2 = 1; 
                        if(pkHp2 < 0) { 
                            pkHp2 = 0  
                    }
                }
            }
      }
  } 

  //The function of this if statement is to allow for deal 10 dmg to happen 
  //for player two to attack, sets values to false and true
  if(pTurn2 == 1) {
    if(mouseX > 550 && mouseX < 750) {
        if(mouseY > 550 && mouseY < 750){
            if(pkHp1>0){
             pkHp1 = pkHp1 - 10 
             pTurn1 = 1; 
             pTurn2 = 0;
            }
        }
    }
  }  

  //The function of this if statement is to allow for deal random damage to happen 
  //for player two to attack, sets values to false and true
  if(pTurn2 == 1) {
    if(mouseX > 750 && mouseX < 950) { 
        if(mouseY > 550 && mouseY < 750) { 
            if(pkHp1 > 0) { 
                pkHp1 = pkHp1 - Math.floor(Math.random()*21);  
                pTurn1 = 1; 
                pTurn2 = 0;
                    if(pkHp1 < 0) { 
                        pkHp1 = 0   
                        
                  }
                }
            }
      }
  }  
  
  //The function of this is to reset the health of bot pokemons to 100
  if(mouseX > 400 && mouseX < 600) { 
      if(mouseY > 0 && mouseY < 100) { 
        pkHp1 = 100; 
        pkHp2 = 100;
    }
  }  

//The condition that allows player one to switch their pokemon
    if(mouseX > 0 && mouseX < 200) { 
        if(mouseY > 0 && mouseY < 100) { 
            changePkmon = 1  
        }
  }  

//The condition that allows player one to go back to original screen
  if(mouseX > 0 && mouseX < 200) { 
      if(mouseY > 650 && mouseY < 750) {
        changePkmon = 0 
      }
  } 

//***REPEATED CODE***
  //if(mouseX > 400 && mouseX < 600) { 
    //if(mouseY > 0 && mouseY < 100) { 
      //pkHp1 = 100; 
      //pkHp2 = 100;
    //}
//}  

//The condition that allows player two to switch out their Pokemon, own loading screen
  if(mouseX > 800 && mouseX < 1000) { 
      if(mouseY > 0 && mouseY < 100) { 
          changePkmon1 = 1  
      }
}  

//The condition that allows player two to switch back to homescreen
if(mouseX > 0 && mouseX < 200) { 
    if(mouseY > 650 && mouseY < 750) {
      changePkmon1 = 0 
    }
} 

//***WORK IN PROGRESS */ Make the condition that allows player switch out pokemons
    if(changePkmon == 1) {  
        if( mouseX > 100 && mouseY < 300) { 
            if( mouseY > 100 && mouseY < 300) { 
                plyr1swtchpk1 = 1;
            }
        }
    }
} 


 