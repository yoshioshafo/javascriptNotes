let userLeft = false;
let userWatchingNetflix = false;

function watchTutorialCALLBACK(callback, errorCallback){
    if(userLeft){
        errorCallback({
            name:"User left",
            message: ":("
        })
    } else if (userWatchingNetflix){
        errorCallback({
            name:"User wathcing Netflix",
            message: "It is fun though..."
        })
    } else {
        callback("Thumbs up and subscribe!")
    }
}

watchTutorialCALLBACK(
    message => console.log(`Success: ${message}`),
    error => console.log(`${error.name} ${error.message}`)
)
//Thumbs up and subscribe!


//end


//Promises are meant to replace callback
//Below is how to change the previous code to Promise
function watchTutorialPROMISE() {
    return new Promise((resolve, reject) => {
      if (userLeft) {
        reject({
          name: "User left",
          message: ":(",
        });
      } else if (userWatchingNetflix) {
        reject({
          name: "User wathcing Netflix",
          message: "It is fun though...",
        });
      } else {
        resolve("Thumbs up and subscribe!");
      }
    });
  }

watchTutorialPROMISE().then(message => {
    console.log(`This is the then ${message}`);
}).catch(message => {
    console.log(`This is the catch ${message}`);
})
//This is the then Thumbs up and subscribe!

//end

const recordVideoOne = new Promise((resolve, reject) => {
    setTimeout(resolve, 50, "Video 1 recorded");
  });
  const recordVideoTwo = new Promise((resolve, reject) => {
    setTimeout(resolve, 30, "Video 2 recorded");
  });
  const recordVideoThree = new Promise((resolve, reject) => {
    setTimeout(resolve, 80, "Video 3 recorded");
  });
  //Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.
  Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree,
  ]).then((messages) => console.log(messages));
  // [ 'Video 1 recorded', 'Video 2 recorded', 'Video 3 recorded' ]
  //Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.
  Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree,
  ]).then((message) => console.log(message));
  //Video 2 recorded