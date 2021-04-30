// // Practice
// const numbers = [1, 2, 3];
// let [numOne, numTwo, numThree] = numbers;
// console.log(numOne, numTwo, numThree);

// let names = ["Asabeneh", "Brook", "David", "John"];
// let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;

// console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];

// const [frontEnd, backEnd] = fullStack;
// console.log(frontEnd);
// console.log(backEnd);

// [numOne, , numThree] = numbers; //2 is omitted
// console.log(numOne, numThree);

// names = [undefined, "Brook", "David"];
// let [
//   firstname = "Abdullah",
//   secondName,
//   thirdName,
//   forthName = "Ismail",
// ] = names;
// console.log(firstPerson, secondName, thirdName, forthName);
// console.log(names);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // let [num1, num2, ...rest] = ...nums;
// console.log(...nums);
// // console.log(rest);

// const countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];
// for (const [country, city] of countries) {
//   console.log(country, city);
// }

// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
// };
// let { width, height, area, perimeter = width + height } = rectangle;

// console.log(width, height, area, perimeter);
// console.log(rectangle);

// const rect = {
//   width: 20,
//   height: 10,
// };

// const calculatePerimeter = (rectangle) => {
//   return 2 * (rectangle.width + rectangle.height);
// };

// console.log(calculatePerimeter(rect));

// const person = {
//   firstName: "Asabeneh",
//   lastName: "Yetayeh",
//   age: 250,
//   country: "Finland",
//   job: "Instructor and Developer",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Redux",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//   ],
//   languages: ["Amharic", "English", "Suomi(Finnish)"],
// };

// const getPersonInfo = (obj) => {
//   const skills = obj.skills;
//   const formattedSkills = skills.slice(0, -1).join(", ");
//   const languages = obj.languages;
//   const formattedLanguages = languages.slice(0, -1).join(", ");

//   personInfo = `${obj.firstName} ${obj.lastName} lives in ${
//     obj.country
//   }. He is  ${obj.age} years old. He is an ${obj.job}.
//   He teaches ${formattedSkills} and ${
//     skills[skills.length - 1]
//   }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

//   return personInfo;
// };

// console.log(getPersonInfo(person));

// const todoList = [
//   {
//     task: "Prepare JS Test",
//     time: "4/1/2020 8:30",
//     completed: true,
//   },
//   {
//     task: "Give JS Test",
//     time: "4/1/2020 10:00",
//     completed: false,
//   },
//   {
//     task: "Assess Test Result",
//     time: "4/1/2020 1:00",
//     completed: false,
//   },
// ];

// for (const {task, time, completed} of todoList){
//   console.log(task, time, completed)
// }

// const user = {
//   name:'Asabeneh',
//   title:'Programmer',
//   country:'Finland',
//   city:'Helsinki'
// }

// const copiedUser = {...user};
// console.log();

// Data
// const constants = [2.72, 3.14, 9.81, 37, 100];
// const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60,
// };
// const users = [
//   {
//     name: "Brook",
//     scores: 75,
//     skills: ["HTM", "CSS", "JS"],
//     age: 16,
//   },
//   {
//     name: "Alex",
//     scores: 80,
//     skills: ["HTM", "CSS", "JS"],
//     age: 18,
//   },
//   {
//     name: "David",
//     scores: 75,
//     skills: ["HTM", "CSS"],
//     age: 22,
//   },
//   {
//     name: "John",
//     scores: 85,
//     skills: ["HTML"],
//     age: 25,
//   },
//   {
//     name: "Sara",
//     scores: 95,
//     skills: ["HTM", "CSS", "JS"],
//     age: 26,
//   },
//   {
//     name: "Martha",
//     scores: 80,
//     skills: ["HTM", "CSS", "JS"],
//     age: 18,
//   },
//   {
//     name: "Thomas",
//     scores: 90,
//     skills: ["HTM", "CSS", "JS"],
//     age: 20,
//   },
// ];

// Exercise 1
// 1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
// const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

// // 2. Destructure and assign the elements of countries array to fin, est, sw, den, nor
// const [fin, est, sw, den, nor] = countries;

// // 3. Destructure the rectangle object by its properties or keys.
// const { weight, height, area, perimeter } = rectangle;

// Exercises: Level 2
// 1. Iterate through the users array and get all the keys of the object using destructuring
// for (const key of users) {
//   console.log(Object.keys(key));
// }
// 2. Find the persons who have less than two skills
// for (const key of users) {
//   if (key.skills.length > 2) {
//     console.log(key);
//   }
// }

// Exercises: Level 3
// 1. Destructure the countries object print name, capital, population and languages of all countries
// const countryInfo = (country) => {
//   let { name, capital, population, language } = country;
//   console.log(name, capital, population, language);
// };

// 2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
// const student = ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];
// const [studentName, skills, scores] = student;

// console.log(scores);

// const [HtmlScore, CssScore, JsScore, reactScore] = scores;

// console.log(studentName, skills, JsScore, reactScore);

// 3. Write a function called convertArrayToObject which can convert the array to a structure object.
const convertArrayToObject = (array) => {
  const convertedArr = [];
  if (Array.isArray(array)) {
    array.forEach((element) => {
      const [studentName, skills, scores] = element;
      convertedArr.push({
        studentName,
        skills,
        scores,
      });
    });
  }
  return convertedArr;
};

// const students = [
//   ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
//   ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
// ];

// console.log(convertArrayToObject(students));


// 4. Copy the student object to newStudent without mutating the original object. In the new object add the following ?
//  i. Add Bootstrap with level 8 to the front end skill sets
//  ii. Add Express with level 9 to the back end skill sets
//  iii. Add SQL with level 8 to the data base skill sets
//  iv. Add SQL without level to the data science skill sets

const students = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

// const copiedStudent =  { ...students, skills: {}};
// console.log(copiedStudent)

const addSkill = (course, skill, level) => {
  const skills = students.skills;
  for (const key in skills) {
    if (Object.hasOwnProperty.call(skills, course)) {
      const element = skills[course];
      element.push({skill, level})
      break;
    }
  }
  return skills;
}

(addSkill('frontEnd', 'Boostrap', 8));
(addSkill('backEnd', 'Expres', 9));
(addSkill('dataBase', 'SQL', 9));
console.log(addSkill('dataScience', 'R', 9));
