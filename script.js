const stringReverse = str => {
    console.log(str.split('').reverse().join(''));
}

stringReverse('RODIP IT');

const average = arr => console.log(arr.reduce((a,b) => a + b)/arr.length)

average([2,2])

const pastWeek = [...Array(7).keys()].map(days => new Date(Date.now()+86400000 * days))
console.log(pastWeek)

const removeDublicates = arr => [...new Set(arr)]

console.log(removeDublicates([1,1,1,2,3,42,2,2]))

const scrolledBottom = () => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight

console.log(scrolledBottom())


dasdkasdasdd