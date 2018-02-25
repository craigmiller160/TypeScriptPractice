var promiseToCleanTheRoom = new Promise(function(resolve, reject){
   //cleaning the room
   var isClean = true;

   if(isClean){
       resolve('Clean');
   }
   else{
       reject('Not Clean');
   }
});

promiseToCleanTheRoom.then(function(fromResolve){
    console.log('this room is ' + fromResolve);
}).catch(function(fromReject){
    console.log('the room is ' + fromReject);
});