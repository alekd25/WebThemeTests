function init(){
    initAccordions();
}

function initAccordions(){
    var acc = document.getElementsByClassName("accordion");

    for(i = 0; i < acc.length; i++){
        acc[i].addEventListener("click", function(){
            this.classList.toggle("active");

            var panel = this.nextElementSibling;
            if(panel.style.maxHeight){
                panel.style.maxHeight = null;
            }
            else{
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

function topnavMenu(){
    x = document.getElementById("topnav");
    if(x.className === "topnav"){
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}