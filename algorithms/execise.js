// Generate random number
const randomNumberGenerator = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const hexCode = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
];

// Generate random hex code
const generateCode = (hexCode, count) => {
  let hex = "";
  for (let counter = 0; counter < count; counter++) {
    hex += hexCode[randomNumberGenerator(0, hexCode.length)];
  }
  return hex;
};

// RGB generator
const rgbColorGenerator = () => {
  const MAX_LENGTH = 226;
  const MIN_LENGTH = 0;
  let rgb = "";

  for (let count = 0; count < 3; count++) {
    randomValue = randomNumberGenerator(MIN_LENGTH, MAX_LENGTH);
    rgb += randomValue + ", ";
  }
  return rgb.slice(0, -2);
};

// HEX Code generator;
const hexCodeGenerator = (count = 6) => {
  let hex = generateCode(hexCode, count);
  return `#${hex}`;
};

// console.log(hexCodeGenerator(7));

// Rgb to Hex
const rgbToHex = (rgb) => {
  rgbColor = rgb.split(",");
  let rHex = parseInt(rgbColor[0]).toString(16).padStart(2, "0");
  let gHex = parseInt(rgbColor[1]).toString(16).padStart(2, "0");
  let bHex = parseInt(rgbColor[2]).toString(16).padStart(2, "0");

  return `#${rHex}${gHex}${bHex}`;
};

// console.log(parseInt('c', 16))

// Hex to rgb

const hexToRgb = (hex) => {
  let hexCode = hex.slice(1);
  hexArr = hexCode.match(/.{1,2}/g);
  let hexColor = "";
  for (let count = 0; count < hexArr.length; count++) {
    hexColor += parseInt(hexArr[count], 16) + ",";
  }
  return hexColor.slice(0, -2);
};

console.log(rgbToHex(rgbColorGenerator()));
console.log(hexToRgb(hexCodeGenerator()));

// Object execrise

const dog = {};
dog.name = "Abdullah";
dog.legs = 4;
dog.color = "black";
dog.bark = () => "woof woof";
dog.getInfo = () =>
  `The name of my dog is ${dog.name} it beautiful\nIt has ${dog.legs} and it color is ${dog.color} \n My Dog back like this ${dog.bark}!!!`;

// console.log(dog.getInfo())

// User Object
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// Find the person who has many skills in the users object.

const getUserHigestSkills = () => {
  let userSkill;
  for (key in users) {
    if (userSkill === undefined) userSkill = users[key];

    if (users[key].skills.length > userSkill.skills.length)
      userSkill = users[key];
  }
  return userSkill;
};

// console.log(getUserHigestSkills())

// Count logged in users,count users having greater than equal to 50 points from the following object.

const getCount = () => {
  let userCount = {};
  let point = 1;
  let log = 1;

  for (key in users) {
    if (users[key].isLoggedIn === true) {
      userCount.usersLoggedInCount = log++;
    }

    if (users[key].points >= 50) {
      userCount.usersPoint = point++;
    }
  }
  return userCount;
};

// console.log(getCount())

// Find people who are MERN stack developer from the users object

const getUserStack = () => {
  const userStacks = {};
  for (key in users) {
    let stack = users[key].skills;
    if (checkstack(stack)) {
      userStacks[key] = users[key].skills;
    }
  }

  return userStacks;
};

const checkstack = (stacks) => {
  if (
    stacks.includes("MongoDB") &&
    stacks.includes("Express") &&
    stacks.includes("React") &&
    stacks.includes("Node")
  )
    return true;
  else return false;
};

console.log(getUserStack());

// Set your name in the users object without modifying the original users object

const newdata = Object.assign({}, users);
console.log(newdata);

// Get all keys or properties of users object
const keys = Object.keys(users);
const properties = Object.values(users);
const keyValuePair = Object.entries(users);
console.log(keys);
console.log(properties);
console.log(keyValuePair);

/* Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, 
totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
Incomes is a set of incomes and its description and expenses is a set of incomes and its description.*/

const personAccount = {
  firstName: "Abdullah",
  lastName: "Ismail",
  occupation: "Software engineer",

  incomes: [
    {
      income: 2000,
      description: "daily",
    },

    {
      income: 1500,
      description: "monthly",
    },
    {
      income: 5000,
      description: "annual",
    },
  ],

  expenses: [
    {
      description: "clothing",
      income: 2000,
    },
    {
      description: "shelter",
      income: 5000,
    },
    {
      description: "Health",
      income: 1000,
    },
  ],

  totalIncome: () => {
    let total = 0;
    personAccount.incomes.forEach((element) => {
      total += element.income;
    });
    return total;
  },

  totalExpenses: () => {
    let totalExpenses = 0;
    personAccount.expenses.forEach((element) => {
      totalExpenses += element.income;
    });
    return totalExpenses;
  },

  getFullname: () => `${personAccount.firstName} ${personAccount.lastName}`,

  accountInfo: () => {
    let fullName = personAccount.getFullname();
    let totalIncome = personAccount.totalIncome();
    let expenses = personAccount.expensesDetails();
    let totalExpense = personAccount.totalExpenses();
    let accountBalance = personAccount.accountBalance();

    statement = `${fullName} is a ${personAccount.occupation}\nTotal income: ${totalIncome}\nExpenses: ${expenses}\nExpenses price: ${totalExpense}\nAccount balance: $${accountBalance}`;

    return statement;
  },

  expensesDetails: () => {
    expensesDetails = "";
    personAccount.expenses.forEach((element) => {
      expensesDetails += element.description + ", ";
    });
    return expensesDetails.slice(0, -2);
  },

  addIncome: (incomes) => {
    if (incomes.income > 0 && incomes.description.length > 0)
      personAccount.incomes.push(incomes);
  },

  addExpenses: (expenses) => {
    if (expenses.income > 0 && expenses.description.length > 0)
      personAccount.expenses.push(expenses);
  },

  accountBalance: () =>
    personAccount.totalIncome() - personAccount.totalExpenses(),
};

personAccount.addIncome({ income: 300, description: "car park" });
console.log(personAccount.incomes);

personAccount.addExpenses({ income: 300, description: "Thanks-given" });
console.log(personAccount.expenses);

console.log(personAccount.accountInfo());

const usersData = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

/* Imagine you are getting the above users collection from a MongoDB database. 
a. 'Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
b. Create a function called signIn which allows user to sign in to the application*/

const signUp = (user) => {
  if (isValid(user.email)) console.log("Account already exist");
  else usersData.push(configureUserData(user));
  console.log("Account successfully created");
};

const configureUserData = (user) => {
  user.id = generateCode(hexCode, randomNumberGenerator(6, 10));
  user.createdData = new Date();
  user.isLoggedIn = true;
  return user;
};

const isValid = (email) => {
  usersData.forEach((element) => {
    if (element.email === email) return true;
  });
  return false;
};

// const signIn = (email) =>{
//   if(isLoggedIn(email))
//   console.log("Successfully logged in")
// }

// const isLoggedIn = (email) =>{
//   // usersData.forEach(element => {
//   //       if(element.isLoggedIn === false){
//   //         element.isLoggedIn = true;
//   //         return true;
//   //       }
//   // });
// }

signUp({ username: "Abdullah", email: "ohida@gmail.com", password: "123456" });
// signIn('thomas@thomas.com')
console.log(usersData.forEach(item => console.log(Object.entries(item))));
