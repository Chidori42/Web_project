
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Event listener for dark mode toggle button/icon
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);





const projectsContainer = document.querySelector('.projects');
const projects = document.querySelectorAll('.project');

// Function to move projects based on mouse movement
function moveProjects(event) {
    const containerWidth = projectsContainer.offsetWidth;
    const mouseX = event.clientX - projectsContainer.getBoundingClientRect().left;
    const percentX = mouseX / containerWidth;
    const translateX = (containerWidth - mouseX) * 0.2; // Adjust the multiplier for the desired effect
    projectsContainer.style.transform = `translateX(${translateX}px)`;
}

// Event listener for mouse movement
projectsContainer.addEventListener('mousemove', moveProjects);

// Function to limit visible projects to three
function limitVisibleProjects() {
    const projectWidth = projectsContainer.querySelector('.project').offsetWidth;
    const visibleProjects = Math.min(projects.length, 3);
    projectsContainer.style.width = `${visibleProjects * projectWidth}px`;
}

// Initial call to limit the visible projects
limitVisibleProjects();






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

