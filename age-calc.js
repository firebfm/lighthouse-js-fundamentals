const ageCalculator = (name, yearOfBirth, currentYear) => {
  return `${name} is ${currentYear-yearOfBirth} years old.` 
}

console.log(ageCalculator("Suzie", 1983, 2015));