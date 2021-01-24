//will take inputs from the player
class Form{
    constructor(){

    }

    display(){
        //p5.dom helps make the form
        // H1 is the biggest one - gets smaller as number increases 
        
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130,0);

        //creates the place where name data is written 
        var input = createInput("Name");
        input.position(130,160);

        //creates enter button!
        var button = createButton('Play');
        button.position(250,200);
       
        //once button gets called input field should vanish
        button.mousePressed(function(){
        input.hide();
        button.hide();

        // to extract the name 
        //player count increases ++ by 1 
        var name = input.value();
        playerCount ++;//increase player count by 1
        
        //player count will update 
        player.updateCount(playerCount);
            
        // text = createElement
        var greeting = createElement('h3');
       
        //displays text 
        greeting.html("Hello "+name);
        greeting.position(130,160);
        })




    }





    
}
