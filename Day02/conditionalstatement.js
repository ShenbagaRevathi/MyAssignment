function launchBrowser()
{
    let browserName = "chrome"
    if(browserName === chrome){
        console.log("browser name");
    }
    else{
    console.log("browser name");
    }
}
launchBrowser()

function runTest(testType){
    switch(testType){
        case "smoke":
            console.log("type of Test is" testType);
            break;
        case "sanity":
            console.log("type of Test is" testType);
            break;
         case "regression":
            console.log("type of Test is" testType);
            break;
            default
            console.log("type of Test is" smoke);
    }
}
runTest(testType)