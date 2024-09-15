// document.addEventListener('DOMContentLoaded', () => {
//     console.log('js file 3..');
//     document.querySelectorAll('.save-course-btn').forEach(button => {
//       console.log('Save button clicked');
//       button.addEventListener('click', async (e) => {
//         const courseId = e.target.getAttribute('data-course-id');
  
//         try {
//           const response = await fetch('/api/saved-courses/save', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ courseId }),
//           });
  
//           const data = await response.json();
//           if (response.ok) {
//             alert(data.message); // Display success message
//           } else {
//             alert('Failed to save the course');
//           }
//         } catch (error) {
//           console.error('Error:', error);
//         }
//       });
//     });
//   });
  







document.addEventListener('DOMContentLoaded', () => {
    console.log('js file 3 loaded..');
  
    // Use event delegation by attaching the event listener to the parent element
    document.body.addEventListener('click', async (e) => {
      if (e.target.classList.contains('save-course-btn')) {
        console.log('Save button clicked from file 3');
  
        const courseId = e.target.getAttribute('data-course-id');
        console.log('Course ID:', courseId);
  
        try {
          const response = await fetch('/api/saved-courses/save', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ courseId }),
          });
  
          const data = await response.json();
          if (response.ok) {
            alert(data.message); // Display success message
          } else {
            alert('Failed to save the course');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    });
  });
  