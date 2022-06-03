const array1 = [1,2,3,4,5]
const array2 = [6,7,8,9]
const [one, two, ...rest] = array1
console.log(one)
//1
console.log(rest)
//[3, 4, 5]
const combinedArr = [...array1, ...array2]
console.log(combinedArr)
//[1, 2, 3, 4, 5, 6, 7, 8, 9]

//end

function sumAndMultiply(a,b,c){
    return [a+b, a*b, a/b]
  }
  const [sum, multiply, division="No value"] = sumAndMultiply(2,3)
  console.log(sum) //5
  console.log(multiply) //6
  console.log(division) //0.6666666666

  //end

  const person1 = {
    name:'Yamada',
    age:'21',
    address:{
      city:'Tokyo',
      country:'Japan'
    }
  }
  const person2 = {
    name:'Muthu',
    age:'23'
  }
  const {name: firstName, age, favouriteFood = "rice", address: {street = 'no street'}} = person1
  console.log(firstName) //Yamada
  console.log(age) //21
  console.log(favouriteFood) //rice
  console.log(street) //no street
  const person3 = {...person1, ...person2}
  console.log(person3)
  //name and age of person1 gets overidden by person2
  /*
  {
    name: 'Muthu',
    age: '23',
    address: { city: 'Tokyo', country: 'Japan' }
  }
  */
 function printUser({name, age}){
    console.log(`The name is ${name} and age is ${age}`)
  }
  printUser(person2) //The name is Muthu and age is 23