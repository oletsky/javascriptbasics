let mas = [0, 1, 2, "",[], {}, null, undefined];
for (let n of mas) {

    if (n) console.log(n+"-true");
    else console.log(n+"-false");
}