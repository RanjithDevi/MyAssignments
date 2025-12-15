let n=7
let s=0
if(n===0)
    console.log(+n+ " is neither even or odd Number")
else{
for (let i=0;i<=(n/2);i++){
    if(n%2===0)        
        s=0
    else
        s=1
}
if(s===0)
    console.log(+n+ " is Even Number")
else
    console.log(+n+ " is Odd Number")}
