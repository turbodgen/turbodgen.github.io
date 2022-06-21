var downloadBut = document.getElementById("downloadBut");
var songInput = document.getElementById("songId");

/* https://stackoverflow.com/questions/14480345/how-to-get-the-nth-occurrence-in-a-string */
/* Honestly, I have no idea how to use javascript. I'm converting an old Python program of mine here. */
function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
}

/* https://www.stefanjudis.com/snippets/how-trigger-file-downloads-with-javascript/ */
function download(file) {
    const link = document.createElement("a");
    link.style.display = "none";
    link.href = file;
    link.download = file.name;
    // It needs to be added to the DOM so it can be clicked
    document.body.appendChild(link);
    link.click();
    // firefox
    setTimeout(() => {
        URL.revokeObjectURL(link.href);
        link.parentNode.removeChild(link);
    }, 0);
}

/* Download info */
function downloadSong(){
    var trackid = songInput.value.slice(0, songInput.value.length);
    var excludingend = trackid.slice(0, trackid.length - 6);
    var first = trackid.slice(0, trackid.indexOf("_"));
    var second = trackid.slice(trackid.indexOf("_")+1, getPosition(trackid, "_", 2));
    console.log("https://audio.prod.apmmusic.com/mp3_128/"+first+"/"+second+"/"+excludingend+"/"+trackid+".mp3")
    download("https://audio.prod.apmmusic.com/mp3_128/"+first+"/"+second+"/"+excludingend+"/"+trackid+".mp3")
}