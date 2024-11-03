// Create Target Object
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

const keyValuePairs = Object.entries(person1)
const reconstructedObj = Object.fromEntries(keyValuePairs)

  // Create Source Object
const person2 = {firstName: "Anne",lastName: "Smith"};
  
  // Assign Source to Target
 const newPerson = Object.assign(person1, person2);
//  console.log(newPerson)

 const fruits = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];
  
  // Callback function to Group Elements
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }
  
  // Group by Quantity
  const result = Object.groupBy(fruits, myCallback);

  console.log(result)