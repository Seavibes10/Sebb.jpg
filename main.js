/*===================Show menu============================================*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*====================Menu Show====================*/
/*validatre if constant exist*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}


/*====================Hide Show====================*/
/*validatre if constant exist*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*===================Remove menu mobile============================================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    //when we click on each link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));







/*===================BG HEADER============================================*/
function scrollHeader(){
    const header = document.getElementById('header');
        //when the scroll is greater than 50 viewport height
        // add the sccroll-header class to header tag//

    if (this.scrollY >= 50) header.classList.add
    ('scroll-header');
    else  header.classList.remove('scroll-header');    
}

window.addEventListener('scroll', scrollHeader);

/*===================Contact Form============================================*/
const contactForm = document.getElementById('contact-form');
contactName = document.getElementById('contact-name');
contactEmail = document.getElementById('contact-email');
message = document.getElementById('message');
contactMessage = document.getElementById('contact-message');


const sendEmail = (e) => {
    e.preventDefault();

    //check if the field has value
    if (
        contactName.value === '' || 
        contactEmail.value === '' ||
        message.value ===  '' 
        ) {
            //add and remove color
            contactMessage.classList.remove('color-light');
            contactMessage.classList.add('color-dark');

            //show message 
            contactMessage.textContent = 'write all the  input fields';
        } else{

            // serviceID - templateID - # form - publickey
            emailjs
            .sendForm(
                'service_8t9tij5',
                'template_724jxmm',
                '#contact-form',
                'mrYpSD2r4UsRzKSMD'
            )
            .then(
                () => {
                //show message and add color, window + dot to open emoji
                contactMessage.classList.add('color-light');
                contactMessage.textContent = 'message Sent ✅';

                // remove message after 5 seconds
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 5000);
                
            }, 
            (error) => {
                alert('OOPs! SOMETHING WENT WRONG...', error);
            });

            //clear input fields
            contactName.value = '';
            contactEmail.value = '';
            message.value = '';

    }
};

contactForm.addEventListener('submit', sendEmail);