function user() {
    var user = prompt ("You are stuck in a maze. You have been there for HOURS!!! You are at a cross. Do you go RIGHT, LEFT, STRAIGHT or TURN AROUND?") .toUpperCase();

    switch (user) {

        //RIGHT    
        case "RIGHT":
            var grab = prompt ("You walk for hours. You become hungry and weak. You find water and food. Do you eat it? Yes or no?") .toUpperCase();
            var answerBack = prompt ("You hear people screaming your name. Do you answer back? Yes or no?") .toUpperCase();
            var eat = false;
            var yell = false;
            if (grab === "YES") {
                eat = true;
            }
            if (answerBack === "YES"){
                yell = true;
            }
            if ( yell && eat ){
                alert ("You gained you strenght from your meal!! You were able to scream from the top of your lungs! YOU'VE BEEN RESCUED!!");
            }
            else {
                alert ("You've not have enough strenght no move or talk... You've died in the maze....")
            }
            break;
    
            //TURN AROUND
        case "TURN AROUND":
            var highUp= prompt ("You are stuck in a maze for hours!! But You notice there is an exit at the top. Can you JUMP really high or can you FLY?") .toUpperCase();
            var jump = false;
            var fly = false;
            if (highUp === "JUMP"){
                jump = true;
            }
            else if (highUp === "FLY"){
                fly = true;
            }
            if (fly || jump) {
                alert ("WOHOOO YOU DID IT!! You escaped the maze");
            }
            else {
                jump = false;
                fly = false;
                alert ("You stayed in the maze until you died...");
            }
            break;
    
            //LEFT
        case "LEFT":
            var choice = prompt ("AHHHHH!! ITS A MONSTER!!! HE IS ATTACKING YOU!! YOU HAVE TO FIGHT!!! HURRY!! GET A WEAPON!! There is a SWORD and a MAGIC WAND on the floor. Which will you choose?") .toUpperCase();
            if (choice === "SWORD"){
                alert ("You picked up the sword and SLASHED THE MONSTER. ALL HIS GUTS CAME OUT!! You ran to the exti!")
            } else {
                alert ("The monster approached as you chanted your spells. The monster ATE YOU!! Looks like you watched too many Harry Potter movies.....")
            }   
            break;
        
            //STRAIGHT 
        case "STRAIGHT":
            var swim = prompt ("OH NO!!!! You fell down a hole filled with water!! Can you swim? Yes or No?") .toUpperCase();
            if (swim === "YES"){
                alert ("You swam to a hidden extit. You Escaped!!")
            } else {
                alert ("OOPPPSS...Looks like you drowned!")
            }
            break;
 
        default:
            alert ("MMmm... That's not really an option right now.");
    }
    document.getElementById("result").innerHTML = compare(userChoice,computerChoice);
};