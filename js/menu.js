function hamburgerMenu(){
    var container = document.getElementsByClassName("container--list")[0];
    if(container.style.height == "0px"){
        container.style.height = "300px";
    }
    else{
        container.style.height = "0px";
    }
}

function search(){
    var list = document.getElementsByClassName("top__burger")[0];
    var text = document.getElementsByClassName("top__burger__search")[0];
    if(list.style.height == "0px"){
        list.style.height = "40px";
    }
    else{
        list.style.height = "0px";
    }

    if(text.style.height == "0px"){
        text.style.height = "25px";
    }
    else{
        text.style.height = "0px";
    }
}