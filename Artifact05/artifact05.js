var myImages =["image01.jpg", "image02.jpg","image03.jpg", "image04.jpg", "image05.jpg"];


var captionImages =["Aquarium Jellyfish", "More Aquarium Jellyfish", "Aquarium Reef Fish", "Even More Jellyfish", "Beached Jellyfish"]; 

var index=0; 

setInterval(autoSlide,2000); // Next
function autoSlide()
{
if (document.getElementById("auto").checked)
 nextImg(); 
}

function updateImage()
{
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

var nextButton = document.getElementById("next"); 
function nextImg()
{
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
nextButton.addEventListener("click",nextImg,false); 
//Back 
var previousButton = document.getElementById("previous"); 
function backImg()
{
 if (index==0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 
previousButton.addEventListener("click",backImg,false);