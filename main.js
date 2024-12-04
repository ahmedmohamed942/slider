const controls = document.querySelectorAll(".controls img")
const preview = document.querySelector(".preview img")
const nextSlide = document.querySelector(".indecators .next")
const prevSlide = document.querySelector(".indecators .prev")


let currentSlide = 0
nextSlide.addEventListener("click" , function(){
    currentSlide++
    showSlide(currentSlide)
});


prevSlide.addEventListener("click" , function(){
    currentSlide--
    showSlide(currentSlide)
});

function showSlide(currentControl){
if (currentControl > controls.length -1) {
    currentControl = 0
    currentSlide = 0
}
   const currentScr = controls[currentControl].getAttribute("src");
    preview.setAttribute("src",currentScr)
}

for (let i = 0;  i< controls.length; i++) {
    controls[i].addEventListener("click" , function(){
        showSlide(i);
    });
}