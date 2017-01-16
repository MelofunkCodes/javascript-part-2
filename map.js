function Tile(type) {
    this.type = type;
}

Tile.prototype.isWalkable = function(type) {
    if (this.type === "grass" || this.type === "sand") {
        return true;
    }
    else {
        return false;
    }
};

// //testing Tile constructor
// var t1 = new Tile ("grass");

// console.log(t1.type);
// console.log(t1.isWalkable);

function Map(width, height) {
    this.width = width;
    this.height = height;
    var rand = 1;

    //trying to create an empty array and then populate it with for loop later
    //can't I identify it as a 2d array?
    this.tiles = [];

    for (var i = 0; i < height; i++) {
        this.tiles.push( [] );
        
        for (var j = 0; j < width ; j++) {
            rand = Math.floor(Math.random() * 3 + 1);

            switch (rand) {
                case 1:
                    this.tiles[i].push(new Tile("water"));
                    break;
                case 2:
                    this.tiles[i].push(new Tile("sand"));
                    break;
                default:
                    this.tiles[i].push(new Tile("water"));
            }
        }
    }
}

Map.prototype.getWalkableOutput = function(tiles){
    var mappedTiles = [];
    
    // for (var i = 0 ; i < tiles.length; i++ ){
    //     for( var j = 0; j< tiles[i].length; j++){
    //         // if(tiles[i].isWalkable(tiles[i].type)){
    //         //     mappedTiles[i] = "O";
    //         // }
    //         // else{
    //         //     tiles[i] = "X";
    //         // }
            
    //         console.log(tiles[i]);
    //     }
    // }
    
    mappedTiles = tiles.map( function(eachTileRow){
        return eachTileRow.map( function(eachTileColumn){
            if(eachTileColumn.isWalkable(eachTileColumn.type)){
                return "O";
            }
            else{
                return "X";
            }
        }).join("");
    }).join("\n");
    
    return mappedTiles;
}

Map.prototype.getAsciiOutput = function(tiles){
    var mappedTiles = [];
    
    mappedTiles = tiles.map( function(eachTileRow){
        return eachTileRow.map( function(eachTileColumn){
            if(eachTileColumn.type === "grass"){
                return "*";
            }
            else if (eachTileColumn.type === "sand"){
                return ":";
            }
            else{
                return "~";
            }
        }).join("");
    }).join("\n");
    
    return mappedTiles;
    
}



//testing Map constructor
var m1 = new Map(3, 3);
console.log(m1.tiles);
console.log("\nWalkableOutput map:\n"+ m1.getWalkableOutput(m1.tiles));
console.log("\nASCII output map:\n"+ m1.getAsciiOutput(m1.tiles));


