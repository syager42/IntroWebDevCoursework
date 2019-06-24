var myImages =["food01.jpg", "food03.jpg","food05.jpg", "food07.jpg", "food08.jpg"];


var captionImages =["Grilled Steak and Asparagus, Roasted Rosemary Potatoes", 
"Home-made Movie-style Ratatouille", "Bok Choy Star Anise Chicken Soup", 
"Lamb Kebab Easter Dinner", "Thanksgiving Turkey Dinner"]; 

var index=0; 

setInterval(autoSlide,3500); // Next
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