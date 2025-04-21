// Created by user on 6/10/2024, 12:53:19 PM
// Last modified by user on 4/13/2025, 4:24:46 AM
const formHeading= document.querySelector(".form-heading");
const formInputs= document.querySelectorAll(".contact-form-input");
    
formInputs.forEach((input)=>{
    input.addEventListener("focus", ()=>{
        formHeading.style.opacity="0";
        setTimeout(() => {
            formHeading.textContent= `Your ${input.placeholder}`;
            formHeading.style.opacity="1";
        }, 300);
    });

        input.addEventListener("blur",()=>{
            formHeading.style.opacity="0";
            setTimeout(() => {
                formHeading.textContent='Contact Us';
                formHeading.style.opacity="1";
            }, 300);
        });
    
});