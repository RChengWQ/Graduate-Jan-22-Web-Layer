//object syntax
//var objet_name = {key: value}

var person = {
  id: 1,
  name: "Greg",
  toString: function () {
    return "Employee id: " + person.id + " name: " + person.name;
  },
};

/*string template use graves*/
//allows for seamless integration of string and variables
console.log(`ID: ${person.id} Name: ${person.name}`);
console.log("person: " + person.toString());
//console.log(person.print());
