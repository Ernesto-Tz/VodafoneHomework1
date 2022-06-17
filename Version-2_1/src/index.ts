import './styles/main.scss'

console.log("New App running...")
console.log("Fucking awesome Ernesto")

let num: number = 2;

function gettingArray<Type> (items:Type[]): Type[] {
    return new Array().concat(items)
}

let numArr1 = gettingArray<number>([2,3,4,5,6])
let strArr1 = gettingArray(['Sam', 'Cole', 'Mike'])

//numArr1.push('hello') /*This will throw an error */
numArr1.push(2)