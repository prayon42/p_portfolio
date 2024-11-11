document.getElementById('scroll-to-about').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll-to-contact').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll-to-contact2').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('scroll-to-contact3').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});


setTimeout(function() {
    document.querySelector('.profile-image').style.animation = 'none';
}, 6000);
 
function sendEmail(){
    Email.send({
        SecureToken : "e4031e14-d8e9-445b-abc2-4385bd656b32",
        To : 'prayonjoshi@gmail.com',
        From : "prayonjoshi9@gmail.com",
        Subject : "Contact Form Enquiry",
        Body : "Name" + document.getElementById("name").value
            + "<br> Email: " +document.getElementById("email").value
            + "<br> Phone: " +document.getElementById("phone").value
            + "<br> Message: " +document.getElementById("message").value
    }).then(
      message => alert(message)
    );
    
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Phone number copied to clipboard: " + text);
    }).catch(err => {
        alert('Failed to copy text: ', err);
    });
}

