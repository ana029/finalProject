function changeBackgroundRight() {
    const element = document.getElementById("headerId");
    element.classList.remove("changeBackground1");  
    element.classList.add("changeBackground2");  
 }

 function changeBackgroundLeft(){
    const element = document.getElementById("headerId");
    element.classList.remove("changeBackground2");  
    element.classList.add("changeBackground1");  
 }