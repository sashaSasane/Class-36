//gamestates; the entire game code
class Game{
     
    constructor(){


    }
    // will read the gamestates from database: "on means read"
    getState(){
        var gameStateRef = database.ref('gameState');
            gameStateRef.on("value",function(data){
            gameState = data.val();
        });
        
    }

    update(state){
        //set "sets the values "
        //update Gamestate count/value
        
        database.ref('/').update({
            gameState: state
        })
    }

    start(){
        // allows new players and new forms to join in 
        if(gameState === 0){
            player = new Player();
            // get count refers to the player count 
            player.getCount();
            
            form = new Form();
            form.display();

        }


    }

    



}

