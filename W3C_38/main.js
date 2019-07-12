var intro_balls = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
var final_exam = "";

console.log(intro_balls,  final_exam)

function CheckAssessment(intro_balls, final_exam) {
    if ((intro_balls >= 89 && intro_balls <= 100) || (final_exam >= 90)) {
      console.log("A+")
      return true;
    }
    else {
      console.log("no")     
    }
}

CheckAssessment(intro_balls, final_exam);