window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('portfolioForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let role = document.getElementById('role').value;
        let cv = document.getElementById('cv').value;
        let address = document.getElementById('address').value;
        let contact = document.getElementById('contact').value;
        let objective = document.getElementById('objective').value;
        let image = document.getElementById("image").value;
        let linkedin = document.getElementById("linkedin").value;
        let education = document.getElementById('education').value.split(',').map(skill => skill.trim());
        let skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
        let projects = document.getElementById('projects').value.split(',').map(skill => skill.trim());
        let courses = document.getElementById('courses').value.split(',').map(course => course.trim());
        let addpri = document.getElementById('addpri').value.split(',').map(addpri => addpri.trim());
        let hobbies = document.getElementById('hobbies').value.split(',').map(hobby => hobby.trim());

        // Regular expressions
        let phoneNumberRegex = /^\+\d{1,3}\s?\d{3,14}$/;
        let urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

        // Validate contact number using the regex
        if (!phoneNumberRegex.test(contact)) {
            alert('Please enter a valid phone number');
            return; // Prevent form submission if validation fails
        }

        // Validate LinkedIn URL using the regex
        if (linkedin !== "" && !urlRegex.test(linkedin)) {
            alert('Please enter a valid LinkedIn URL.');
            return; // Prevent form submission if validation fails
        }

        let portfolioData = {
            name: name,
            email: email,
            role: role,
            linkedin: linkedin,
            cv: cv,
            address: address,
            contact: contact,
            objective: objective,
            education: education,
            skills: skills,
            projects: projects,
            courses: courses,
            addpri: addpri,
            hobbies: hobbies,
            image: image
        };
        localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
        window.location.href = 'portfolio.html';
    });
});