const findTheOldest = function (list) {
  if (!list || list?.length < 1) return

  const res = list.reduce((acc, curr) => {
    const currAge = getAge(curr?.yearOfBirth, curr?.yearOfDeath)
    const accAge = getAge(acc?.yearOfBirth, acc?.yearOfDeath)
    return accAge > currAge ? acc : curr
  })

  return res
}

function getAge(birth, death) {
  if (!death) death = new Date().getFullYear()
  return death - birth
}

const people = [
  {
    name: 'Carly',
    yearOfBirth: 1942,
    yearOfDeath: 1970
  },
  {
    name: 'Ray',
    yearOfBirth: 1962,
    yearOfDeath: 2011
  },
  {
    name: 'Jane',
    yearOfBirth: 1912,
    yearOfDeath: 1941
  }
]

console.log('Oldest: ', findTheOldest(people).name)

// Do not edit below this line
module.exports = findTheOldest
