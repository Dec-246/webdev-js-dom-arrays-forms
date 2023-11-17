

//I I F E
(function(){
    //Start code
    document.getElementById("myHeading").innerHTML = "Declan";
    document.querySelector("nav ul li").setAttribute("class", "currentPage");

    //example
document.querySelector("nav ul li a").setAttribute("href", "https://www.google.co.uk");
// adding events
document.getElementById("myTestEvent").addEventListener("click", myFunction);


function myFunction(){
    console.info('hi')
}

document.getElementById('myTestEvent').addEventListener('click', 
function(){
console.info('hi');
})

document.getElementById('myTestEvent').addEventListener('click', 
myFunction);
function myFunction(){
console.info('hi');
}

document.getElementById('myTestEvent').addEventListener('click', 
function(ev){
console.dir(ev);
})

// I I F E
(function() {
// Start coding here
document.getElementById("myHeading").innerHTML = "Martin";
document.querySelector("nav ul li").setAttribute("class", "currentPage");
// silly example
document
.querySelector("nav ul li a")
.setAttribute("href", " https://www.google.co.uk");
// adding events
})();
//end code
})()