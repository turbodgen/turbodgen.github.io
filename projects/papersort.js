var coll = document.getElementsByClassName("collapsible");
var i;
var page = 1;
var pageImg = document.getElementById("pgShow");
var pageNum = document.getElementById("pageNum")

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 

var theCount = document.getElementById("count-el");
var count = 0;

// console.log(count);

function left(){
  if (page<2){
    return
  }
  page = page - 1;
  pageImg.src = "../imgs/imgPge/psnotebook/"+page+"crop.png"
  pageNum.textContent = "Page "+page+"/4"
};


function right(){
  if (page>3){
    return
  }
  page = page + 1;
  pageImg.src = "../imgs/imgPge/psnotebook/"+page+"crop.png"
  pageNum.textContent = "Page "+page+"/4"
};
