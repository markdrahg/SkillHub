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
});