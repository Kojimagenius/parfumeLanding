let currentSlide = 0;
const slides = document.querySelectorAll(".slide")
console.log(slides[0])
console.log(slides.length)

const nextButton = document.querySelector(".right-button")
const previousButton = document.querySelector(".left-button")
const sbmButton = document.querySelector(".send-email-button")


sbmButton.onclick = (evt) =>{
  evt.preventDefault();
  const emailForm = document.querySelector(".send-email-form")
  let emailFrom = document.querySelector(".user-email").value
  console.log(emailFrom)
  emailForm.action = "mailto:myTestMail@gmail.com?body=contact%20me%20on%20my%20buisness%20email:%20"+emailFrom;
  emailForm.submit();


}
nextButton.onclick = () => {
  slides[currentSlide].classList.toggle("showing")
  currentSlide = (currentSlide+1)%slides.length
  slides[currentSlide].classList.toggle("showing")
}
previousButton.onclick = () => {
  slides[currentSlide].classList.toggle("showing")
  if(currentSlide - 1 >= 0){
    currentSlide -= 1
  }else{
    currentSlide = slides.length-1;
  }
  slides[currentSlide].classList.toggle("showing")
}