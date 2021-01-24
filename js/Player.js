//to store player information 
class Player{
    constructor(){

    }
    // get means getting values(playerCount) from database
    getCount(){

        var playerCountRef = database.ref('playerCount')
        playerCountRef.on("value",function(data){
        playerCount = data.val();

            
        });
    } 
    
    
    updateCount(count){
        database.ref('/').update({
            playerCount: count

        })

        
    }
    
    
        
    
    update(name){
        
        //keeps joining values
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name: name
        })



    }

}