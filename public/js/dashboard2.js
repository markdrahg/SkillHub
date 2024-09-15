async function fetchSavedCourses() {
    try {
        const response = await fetch('/api/saved-courses/saved-courses');
        const savedCourses = await response.json();
        const savedCourseList = document.getElementById('saved-course-list');
        savedCourseList.innerHTML = '';

        savedCourses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.classList.add('card', 'mb-4', 'shadow-sm');
            courseElement.innerHTML = `
                <img src="${course.courseId.image}" alt="Not found, Work on it" class="card-img-top cours-img">
                <div class="card-body">
                    <h5 class="card-title">${course.courseId.name}</h5>
                    <p class="card-text">Instructor: ${course.courseId.tutor}</p>
                    <p class="card-text">Time: ${course.savedAt}</p>
                </div>
            `;
            savedCourseList.appendChild(courseElement);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}




document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/user-info');
        const data = await response.json();
        if (response.ok) {
            document.getElementById('username').textContent = data.username;
        } else {
            console.error('Failed to fetch username');
        }
    } catch (error) {
        console.error('Error:', error);
    }
    console.log('js file2 2..');
    fetchSavedCourses();
});




// document.querySelectorAll('.save-course-btn').forEach(button => {
//     console.log('saved button clicked');
//     button.addEventListener('click', async (e) => {
//         const courseId = e.target.getAttribute('data-course-id');

//         try {
//             const response = await fetch('/api/saved-courses/save', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ courseId }),
//             });

//             const data = await response.json();
//             if (response.ok) {
//                 alert(data.message);  // Display success message
//             } else {
//                 alert('Failed to save the course');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     });
// });


// async function fetchSavedCourses() {
//     try {
//         const response = await fetch('/api/saved-courses/saved-courses');
//         const savedCourses = await response.json();
//         const savedCourseList = document.getElementById('saved-course-list');
//         savedCourseList.innerHTML = '';

//         savedCourses.forEach(course => {
//             const li = document.createElement('li');
//             li.textContent = course.courseId.name;  // Display course name
//             savedCourseList.appendChild(li);
//         });
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

