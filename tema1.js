function init(){
    initAccordions();
    initPanels();
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

function initPanels(){
    var panels = document.getElementsByClassName("panel-header");
    
    for(i = 0; i < panels.length; i++){
        panels[i].addEventListener("click", function(){
            console.log("Click panel");
            this.classList.toggle("active");

            var panelBody = this.nextElementSibling;
            if(panelBody.style.maxHeight){
                panelBody.style.maxHeight = null;
                panelBody.style.padding = "0px";
            } else {
                panelBody.style.maxHeight = panelBody.scrollHeight + "px";
                panelBody.style.padding = "5px";
            }
        });

        panels[i].classList.toggle("active");
        panelBody = panels[i].nextElementSibling;
        panelBody.style.maxHeight = "100%";
        panelBody.style.padding = "5px";
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