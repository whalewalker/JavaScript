// const company = new Set();
// console.log(company);

// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
//   ]

//   const setOfLanguages = new Set(languages);
//   console.log(setOfLanguages.add('Youruba'));

const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const langSet = new Set(languages);
//   console.log(langSet);
//   console.log(langSet.size);

//   const counts = [];

//   for(const lang of langSet){
//       const filteredLang = languages.filter(item => item === lang);
//       counts.push({lang, count: filteredLang.length});
//   }

//   console.log(counts)

// Union of set

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6];
// let c = [...a, ...b];
// let d = [...c, 2, 6, 8, 9, 38, 86];
// console.log(d)

// let D = new Set(d)
// console.log(D)

// Intersection

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]

// let A = new Set(a)
// let B = new Set(b)

// let c = a.filter(num => B.has(num));

// console.log(c)

// Difference of set

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]

// let A = new Set(a)
// let B = new Set(b)

// let c = b.filter(num => !A.has(num));

// console.log(new Set(c));

// Iterator Set
// const iterators = langSet.values();
// let result = iterators.next();

// while(!result.done){
//     console.log(result.value);
//     result = iterators.next();
// }

// Generator
// function* makeRangeIterator(start = 0, end = 100, step = 1) {
//   let iterationCount = 0;
//   for (let count = start; count < end; count += step) {
//     iterationCount++;
//     yield count;
//   }
//   return iterationCount;
// }


// // Loop Through iterator
// function loopIterator(iterator) {
//   let result = iterator.next();

//   while (!result.done) {
//     console.log(result.value);
//     result = iterator.next();
//   }
// }

// loopIterator(makeRangeIterator())

// Maps



//   const map = new Map(countries);
//  loopIterator(map);


// Adding value to map
// const countriesMap = new Map();

// console.log(countriesMap.size) // 0
// countriesMap.set('Finland', 'Helsinki')
// countriesMap.set('Sweden', 'Stockholm')
// countriesMap.set('Norway', 'Oslo')

// console.log(countriesMap);

// countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo'],
//   ]

//   const countriesMap = new Map(countries);


// for (const country of countriesMap) {
//     console.log(country)
//   }


const set = new Set();

for(let count = 0; count <= 10; count++){
    set.add(count);
}

console.log(set)