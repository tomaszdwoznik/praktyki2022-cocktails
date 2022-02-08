function hamburgerMenu(){
    var width = document.getElementById("top__burger--height")
    if(width.className == "container--list"){
        width.className = "container--list.open";
    }
    else{
        width.className = "container--list"
    }
}