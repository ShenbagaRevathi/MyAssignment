function gradeCalculation(score){
    switch(true){
        case score > 70:
            console.log("grade A");
            break;
        case score < 90:
            console.log("grade B");
            break;
            default
            console.log("grade C");
    }
}
gradeCalculation(score)