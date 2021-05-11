// const schools = [
//     "Yorktown",
//     "Washington & Lee",
//     "Wakefield"
// ]

// const wSchool = schools.filter(school => school[0] === "W");
// console.log(wSchool)
//
// const cutSchool = (cut, list) =>{
//     return list.filter(school => school !== cut);
// }

// console.log(cutSchool("Washington & Lee", schools).join(" * "));

// console.log(schools.join("\n"))

// let schools = [
//     {name: "Yorktown"},
//     {name: "Stratford"},
//     {name: "Washington & Lee"},
//     {name: "Wakefield"},
// ]


// const editName = (oldName, name, array) => {
//     array.map(item => {
//         if (item.name === oldName){
//             return {...item,  name}
//         }else {
//             return item
//         }
//     })
// }
//
// const updatedSchools = editName("Stratford", "HB Woodlawn", schools)

// const schools = {
//     "Yorktown": 10,
//     "Washington & Lee": 2,
//     "Wakefield": 5
// }
//
// const schoolArr = Object.keys(schools).map(key => ({name: key,  wins: schools[key]}));
// // const .
// console.log(schoolArr)

const ages = [21,18,42,40,64,63,34]

// const maxAge = ages.reduce((max, age) =>{
//     console.log(`${age} > ${max} = ${age > max}`);
//     if (age > max)
//         return age;
//
//     else {
//         return max
//     }
// }, 0)

const max = ages.reduce((max, val) => (val > max) ? val : max);

console.log('maxAge', max);

// const colors = [
//     {
//         id: '-xekare',
//         title: "rad red",
//         rating: 3
//     },
//     {
//         id: '-jbwsof',
//         title: "big blue",
//         rating: 2
//     },
//     {
//         id: '-prigbj',
//         title: "grizzly grey",
//         rating: 5
//     },
//     {
//         id: '-ryhbhsl',
//         title: "banana",
//         rating: 1
//     }
// ]
//
// const hasColors = colors.reduce((hash, {id, title, rating}) => {
//     hash[id] = {title, rating}
//     return hash;
// }, {})
//
// console.log(hasColors)

const colors = ["red", "red", "green", "blue", "green"];

const distinctColors = colors.reduce((distinct, color) => (distinct.indexOf(color) !== -1) ? distinct : [...distinct, color], []);
// console.log(distinctColors)

// const countDown = (val,  fn) =>{
//     fn(val)
//     return (val > 0) ? countDown(val - 1, fn) : val;
// }
//
// countDown(10, value => console.log(value))

const countDown = (value, fn, delay = 1000) =>{
    fn(value)
    return (value > 0) ? setTimeout(() => countDown(value - 1, fn), delay) : value
}

// const log = value => console.log(value)
// countDown(60, log);

let dan = {
    type: "person",
    data: {
        gender: "male",
        info: {
            id: 22,
            fullName: {
                first: "Dan",
                last: "Deacon"
            }
        }
    }
}



const deepPick = (fields, object = {}) => {
    const [first, ...remaining] = fields.split(".");
    if (remaining.length){
        return deepPick(remaining.join("."), object[first])
    }else {
        return object[first]
    }
}

console.log(deepPick("type", dan));
// "person"
console.log(deepPick("data.info.fullName.first", dan))
