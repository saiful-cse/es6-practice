const singleTask = a => a*2;
const doubleTask = (a,b) => a*b;
const noTask = () => 40;
const multipleTask = (a,b) => {
    const sum = a+b;
    const diff = a-b;
    const result = sum*diff;
    return result;
}

console.log(multipleTask(20,10));