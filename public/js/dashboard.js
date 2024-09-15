// window.onload = async function() {
//     const token = localStorage.getItem('token');
//     if (!token) {
//         window.location.href = '/register'; // Redirect to register if no token found
//     }

//     try {
//         // Send a request to the backend to fetch user info with the token in the Authorization header
//         const response = await fetch('/api/auth/user', {
//             method: 'GET',
//             headers: {
//                 'Authorization': token,
//                 'Content-Type': 'application/json'
//             }
//         });

//         const data = await response.json();

//         if (response.ok) {
//             document.querySelector('.username-display').innerText = `Welcome, ${data.username}`;
//         } else {
//             alert(data.message);
//             window.location.href = '/register';
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         window.location.href = '/register';
//     }
// };




// Fetch dashboard data (or access dashboard) after loading the page
// document.addEventListener('DOMContentLoaded', async () => {
//     const token = localStorage.getItem('token'); // Retrieve token from localStorage
  
//     if (!token) {
//       alert('No token found. Please log in.');
//       window.location.href = '/login'; // Redirect to login page if no token
//       return;
//     }
  
//     try {
//       const response = await fetch('/dashboard', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}` // Set token in Authorization header
//         }
//       });
  
//       if (response.ok) {
//         const data = await response.json();
//         // Populate dashboard data with the returned data
//         console.log(data); // Handle dashboard data here
//       } else {
//         const result = await response.json();
//         alert(result.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   });
  




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
                            <button class="btn btn-primary save-course-btn" data-course-id="${course._id}" >Add Course</button>
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



