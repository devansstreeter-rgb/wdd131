const review = document.getElementById("review");
let submissionCount = Number(window.localStorage.getItem("submissionCount")) || 0;

review.onload = function(){
  submissionCount++;
  window.localStorage.setItem("submissionCount", submissionCount);
  console.log(submissionCount);
};
