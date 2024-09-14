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
                courseElement.className = 'col-md-4';  // Responsive column
                courseElement.innerHTML = `
                    <div class="card mb-4 shadow-sm">
                        <img src="${course.image}" alt="Not found, Work on it" class="card-img-top cours-img">
                        <div class="card-body">
                            <h5 class="card-title">${course.name}</h5>
                            <p class="card-text">Instructor: ${course.tutor}</p>
                            <button class="btn btn-primary">Add Course</button>
                        </div>
                    </div>
                `;
                document.getElementById('courses-container').appendChild(courseElement);
            });
        } else {
            container.innerHTML = '<p>No courses available at the moment.</p>';
        }
    } catch (err) {
        console.error('Error fetching courses:', err);
        container.innerHTML = '<p>Failed to load courses. Please try again later.</p>';
    }
});