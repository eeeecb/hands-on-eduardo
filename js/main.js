document.addEventListener("DOMContentLoaded", function () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('user-list');
            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.className = 'user-card';
                userCard.innerHTML = `
                    <h2>${user.name}</h2>
                    <p>Email: ${user.email}</p>
                    <p>Endereço: ${user.address.street}, ${user.address.city}</p>
                `;
                userList.appendChild(userCard);
            });
        })
        .catch(error => console.error('Erro ao carregar os dados:', error));
});
