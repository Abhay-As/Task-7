async function fetchData() {
    const userDataContainer = document.getElementById('user-data');
    userDataContainer.innerHTML = '<p>Loading...</p>';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const users = await response.json();
        userDataContainer.innerHTML = users.map(user => `
            <div class="user">
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>Address: ${user.address.street}, ${user.address.city}</p>
            </div>
        `).join('');
    } catch (error) {
        userDataContainer.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    }
}

fetchData();
