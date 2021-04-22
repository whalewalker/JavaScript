const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: () => `${person.firstName} ${person.lastName}`,
};

person.nationality = "Ethiopian";
person.country = "Finland";
person.title = "teacher";
person.skills.push("Meteor");
person.skills.push("SasS");
person.isMarried = true;

person.getPersonInfo = () => {
  let skillsWithoutLastSkill = person.skills
    .splice(0, person.skills.length - 1)
    .join(", ");

  let lastSkill = person.skills.splice(person.skills.length - 1).join('');
  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = person.getFullName();
  let statement = `${fullName} is a ${person.title}.\nHe lives in ${person.country}.\nHe teaches ${skills}.`;
  return statement;
};

console.log(person.getPersonInfo());

const copyPerson = Object.assign({}, person);
copyPerson.lastName = "Abdullah"
// console.log(copyPerson);
// console.log(person)

const objectKeys = Object.keys(person);
const ObjectValues = Object.values(person);

// let StrData = [];
// let numData = [];
// let ObjData = [];
// let funData = [];

// for(let count = 0; count < objectKeys.length; count++){
//     switch(typeof(ObjectValues[count])){
//         case String:
//             StrData.push(ObjectValues[count]);
//         case Object:
//             ObjData.push(ObjectValues[count]);
//         case Number:
//             NumData.push(ObjectValues[count]);
//         case Function:
//             funData.push(ObjectValues[count]);
//     }
// }


console.log(Object.entries(person))
console.log(person.hasOwnProperty('name'))

