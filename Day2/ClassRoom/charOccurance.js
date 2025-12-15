/*let n="Ranjith Devi"
let len=n.length
let s=0
let cmp = "i"
for (let i=0;i<=len-1;i++){
    if (n[i]===cmp)
        s=s+1;
    }
console.log("Number of occurances of " +cmp+ " in " +n+ " is " +s)*/


let n="Ranjith Devi"
let len=n.length
let s=0
for (let i=0;i<=len-1;i++){
    for (let j=i;j<i;j++){
    if (n[i]===n[j]){
        s=s+1;
           console.log("Number of occurances of " +n[i]+ " in " +n+ " is " +s)}
    }
 
}

