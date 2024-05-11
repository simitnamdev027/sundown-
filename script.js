const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var projects = document.querySelector("#project-container")
var fixed = document.querySelector("#fixed-img")
projects.addEventListener("mouseenter",function(){
        fixed.style.display = "block"
})
projects.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})

var fixedImage1 = document.querySelector("#project1-elements")
fixedImage1.addEventListener("mouseenter",function(){
    var image1 = fixedImage1.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image1})`
})

var fixedImage2 = document.querySelector("#project2-elements")
fixedImage2.addEventListener("mouseenter", function(){
    var image2 = fixedImage2.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image2})`
})

var fixedImage3 = document.querySelector("#project3-elements")
fixedImage3.addEventListener("mouseenter", function(){
    var image3 = fixedImage3.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image3})`
})

var fixedImage4 = document.querySelector("#project4-elements")
fixedImage4.addEventListener("mouseenter", function(){
    var image4 = fixedImage4.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image4})`
})

var fixedImage5 = document.querySelector("#project5-elements")
fixedImage5.addEventListener("mouseenter", function(){
    var image5 = fixedImage5.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image5})`
})

var fixedImage6 = document.querySelector("#project6-elements")
fixedImage6.addEventListener("mouseenter", function(){
    var image6 = fixedImage6.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image6})`
})

var fixedImage7 = document.querySelector("#project7-elements")
fixedImage7.addEventListener("mouseenter", function(){
    var image7 = fixedImage7.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image7})`
})

var a = document.querySelector("#fixed-img")
a.addEventListener("mouseenter", function(){
    a.style.display = "block"
})

var a = document.querySelector("#fixed-img")
a.addEventListener("mouseleave", function(){
    a.style.display = "none"
})