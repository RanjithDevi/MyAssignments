grade()

function grade(){
    let marks=70
    switch(true){
        case marks >= 90:
            console.log("Marks : "+marks+ "\nGrade : A+");
            break;
        case marks >= 80:
            console.log("Marks : "+marks+ "\nGrade : A");
            break;
        case marks >= 70:
            console.log("Marks : "+marks+ "\nGrade : B+");
            break;
        case marks >= 60:
            console.log("Marks : "+marks+ "\nGrade : B");
            break;
        case marks >= 50:
            console.log("Marks : "+marks+ "\nGrade :C");
            break;
        default:
            console.log("Marks : "+marks+ "\nGrade :Fail");
}
}

