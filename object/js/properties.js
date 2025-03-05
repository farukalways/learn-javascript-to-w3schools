const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Add a Method
function namee() {
  return (person.firstName + " " + person.lastName).toUpperCase();
}

console.log(namee());
