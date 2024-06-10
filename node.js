
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

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
    projectsContainer.style.width = '100%';
}

// Initial call to limit the visible projects
limitVisibleProjects();


//toggle button
// const content = document.getElementById('content');
//         const toggleBtn = document.getElementById('toggleBtn');

//         toggleBtn.addEventListener('click', () => {
//             if (content.classList.contains('hidden')) {
//                 content.classList.remove('hidden');
//                 content.classList.add('visible');
//             } else {
//                 content.classList.remove('visible');
//                 content.classList.add('hidden');
//             }
//         });
    

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        Email.send({
            // Get this from your SMTPJS account
            Host : "smtp.elasticemail.com",
            Username : "rcabdw@gmail.com",
            Password : "CC918E904DECED8972D276B045C35F20D44F",
            To: 'rcabdw@gmail.com',
            From: email,
            Subject: "New message from contact form",
            Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
        }).then(
            message => alert(message)
        );
    });
});

