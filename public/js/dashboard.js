function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    const selectedSection = document.getElementById(sectionId + 'Section');
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}



document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('courses-container');

    try {
        const response = await fetch('/api/courses');
        const courses = await response.json();

        if (courses.length > 0) {
            courses.forEach(course => {
                const courseElement = document.createElement('div');
                courseElement.innerHTML = `
                    <h2>${course.name}</h2>
                    <img src="${course.image}" alt="Not found, Work on it" class="cours-img">
                    <p>${course.name}</p>
                    <p>Instructor: ${course.tutor}</p>
                    <button>Add Course</button>
                `;
                container.appendChild(courseElement);
            });
        } else {
            container.innerHTML = '<p>No courses available at the moment.</p>';
        }
    } catch (err) {
        console.error('Error fetching courses:', err);
        container.innerHTML = '<p>Failed to load courses. Please try again later.</p>';
    }
});