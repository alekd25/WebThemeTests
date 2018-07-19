var slideIndex = 1;

function init(){
    initAccordions();
    initPanels();
    showSlides(slideIndex);
    initHorizontalTabs();
}

function initAccordions(){
    var acc = document.getElementsByClassName("accordion");

    if(acc === null){
        return;
    }

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

    if(panels === null){
        return;
    }
    
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
        panelBody.style.maxHeight = panelBody.scrollHeight + "px";
        panelBody.style.padding = "5px";
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");

    if(slides.length === 0 || dots.length === 0){
        return;
    }

    if(n > slides.length) {slideIndex = 1;}
    if(n < 1) {slideIndex = slides.length;}
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dot-active";
}

function initHorizontalTabs(){
    var i;
    var horizontalTabs = document.getElementsByClassName("hor-tablinks");
    var horTabcontents = document.getElementsByClassName("hor-tabcontent");

    //horizontalTabs[horizontalTabs.length - 1].style.borderRight = "solid 1px #ccc";

    console.log("Horizontal tabs: " + horizontalTabs.length);
    console.log("Tab content: " + horTabcontents.length);

    for(i = 0; i < horizontalTabs.length; i++){
        horizontalTabs[i].addEventListener("click", displayTabContent.bind(this, i, 
            horTabcontents, horizontalTabs));
    }

    if(horizontalTabs.length > 0 && horTabcontents.length > 0){
        horTabcontents[0].style.display = "block";
        horizontalTabs[0].className = "hor-tablinks tab-active";
    }
}

function displayTabContent(index, horTabcontents, horizontalTabs){
    var i = 0;
    for(i = 0; i < horTabcontents.length; i++){
        tabContent = horTabcontents[i];
        tab = horizontalTabs[i];
        if(i === index){
            tabContent.style.display = "block";
            tab.className = "hor-tablinks tab-active";
        } else {
            tabContent.style.display = "none";
            tab.className = "hor-tablinks";
        }
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