var assessment = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

console.log("balls: " + assessment)

function CheckAssessment(assessment) {
  if (  (assessment >= 89 && assessment <= 100)  || assessment >= 90 ) {
    console.log("student gets  'A+'");
    return true;
  }
  else {
    console.log("no");
    return false;
  }
}

CheckAssessment(assessment);