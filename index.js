let theCount = document.getElementById("count-el");
let count = 0;

// console.log(count);

function addTo(){
    count = count + 1;
    theCount.innerHTML = count;
    document.getElementById("screenDimentions").innerHTML = screen.width+"x"+screen.height;
    document.title = "testing "+count;
    console.log("button was clicked my guy"+count);
};