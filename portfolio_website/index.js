//side navigation
$(document).ready(() => {
    $('.sidenav').sidenav();
})

//slider
$(document).ready(function(){
    $('.slider').slider();
});

//contact form functionality with EmailJS
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_dtw13us', 'template_k5hf0qp', this)
            .then(function() {
                console.log('Email successfully sent');
            }, function(error) {
                console.log('Error: Email could not be sent', error);
            });
    });
}