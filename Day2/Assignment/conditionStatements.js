function launchBrowser(){
    let browserName="Chrome"
    if (browserName==="Chrome"){
        console.log("Browser Name is Chrome")}
    else{
        console.log("Browser is not Chrome")
    }
}
function runTests(){
    let testType="smoke"
    switch (testType){
        case "smoke":
            console.log("Running Smoke Tests")
            break;
        case "regression":
            console.log("Running Regression Tests")
            break;
        case "sanity":
            console.log("Running Sanity Tests")
            break;
        default:
            console.log("No Tests to Run")
            
    }
}

launchBrowser()
runTests()
