import {apiService as api} from '../api/api.service.js';
api.get('employees').then(employees => {
    employees.forEach(employee => {
        const li = document.createElement('li');
        li.innerHTML = `${employee.name} is ${employee.age} years old and works as a ${employee.position}`;
        document.body.appendChild(li);
        li.addEventListener('click', () => {
            window.location.href = `http://localhost:5500/client/profile?id=${employee.id}`;
        });
    })
});