{/* <script type="text/javascript"src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script> */}
const emailjs = ('https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js');

document.addEventListener("DOMContentLoaded", function (event) {
emailjs.init('user_bfvoe4Kfa5vHBSDj8R3Hs')
(function() {
emailjs.init("user_bfvoe4Kfa5vHBSDj8R3Hs");
})();

    window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            // generate a five digit number for the contact_number variable
            this.contact_number.value = Math.random() * 100000 | 0;
            // these IDs from the previous steps
            emailjs.sendForm('contact_service', 'contact_form', this)
                .then(function() {
                    console.log('SUCCESS!');
                }, function(error) {
                    console.log('FAILED...', error);
                });
        });
    }

    emailjs.sendForm('contact_service', 'contact_form', this)
})