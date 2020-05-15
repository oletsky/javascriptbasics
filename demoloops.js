mas=[10, 20, 30];

console.log("In:")
for (const c in mas) {
    console.log(c); //0 1 2
}

console.log("--------------");
console.log("Of:")
for (const c of mas) {
    console.log(c); //10 20 30
}