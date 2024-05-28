
// document.getElementById('white_back').addEventListener('click', function() {
//     document.body.classList.remove('black_back');
//     document.body.classList.add('white_back');
// });

// document.getElementById('black_back').addEventListener('click', function() {
//     document.body.classList.remove('white_back');
//     document.body.classList.add('black_back');
// });

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        //Send form data to server
        fetch('send_email.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            alert(data); // Display server response
            contactForm.reset(); // Reset form after successful submission
        })
        .catch(error => {
            console.error('Error:', error);
            // Optionally, display an error message to the user
        });
    });
});

