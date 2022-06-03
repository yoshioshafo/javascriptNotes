/*
switch(expression){
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    case z:
        //code block
        break;
    default:
        //code block
}
*/

switch(new Date().getDay()){
    case 4:
    case 5:
        text = "Soon it is the weekend";
        break;
    case 0:
    case 6:
        text = "It is the weekend";
        break;
    default:
        text = "Looking forward to the weekend";
}
//end

const action = "say_hello";
switch(action){
    case "say_hello": {
        let message = "hello"
        console.log(message)
        break;
    }    
    case "say_hi": {
        let message = "hi"
        console.log(message)
        break;
    }
    default: {
        console.log("Empty action received.")
        break;
    }
}
//hello