var cleanRoom = function(){
    return new Promise(function(resolve, reject){
        // resolve('Cleaned the room');
        reject('Failed at clean');
    });
};

var removeGarbage = function(message){
    return new Promise(function(resolve, reject){
        resolve(message + ' Removed garbage');
    });
};

var winIceCream = function(message){
    return new Promise(function(resolve, reject){
        resolve(message + ' Won Ice Cream');
    });
};

// cleanRoom().then(function(result){
//     return removeGarbage(result);
// }).then(function(result){
//     return winIceCream(result);
// }).then(function(result){
//     console.log(result + ' Finished');
// });

cleanRoom().then(removeGarbage).then(winIceCream).then(function(result){
    console.log(result + ' Finished');
}).catch(function(result){
    console.log('Failed: ' + result);
});