function sendMail(){
    let parms = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    }

    emailJS.send('service_gukcvrn', 'template_h8qv0qu', parms).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully');
    }, function(error) {        
        console.log('FAILED...', error);
        alert('Failed to send email');
    });
}