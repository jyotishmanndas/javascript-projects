const inventors = [
    { first: "Albert", last: "Einstien", year: 1879, passed: 1955 },
    { first: "Isac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
]

// 1.Filter the list of inventors for those who were born in 1500's
const filter = inventors.filter((inv)=>{
    return inv.year >= 1500 && inv.year < 1600
});
console.table(filter);

// 2.Give us an array of the inventory first and last name;
const fullName = inventors.map((inv)=>{
    return `${inv.first} ${inv.last}`
});
console.table(fullName);

// 3.How many years did all the inventors live?
const totalyear = inventors.reduce((acc, total)=>{
    return acc += (total.passed) - (total.year)
}, 0)
console.table(totalyear);

// 4. SOrt the inventors by birthdate, oldest to youngest;
const ordered = inventors.sort((a, b)=>{
    return b.year - a.year
});
console.table(ordered);

// 5.Sort the inventors by years lived
const oldest = inventors.sort((a, b)=>{
    return 
})


const peoples = [
    "Priya Sharma",
    "Rohan Gupta",
    "Anjali Patel",
    "Vikram Singh",
    "Sneha Reddy",
    "Aditya Kumar",
    "Neha Joshi",
    "Arjun Menon",
    "Pooja Desai",
    "Rajesh Nair"
  ];

//   1. Sort the people alphabetically by last name
let sortedpeople = peoples.sort((a, b) => {
    let [afname, alname] = a.split(" ");
    let [bfname, blname] = b.split(" ");
    
    return alname > blname ? 1 : -1;
    
})
console.table(sortedpeople);


