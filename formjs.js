document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    document.querySelectorAll('.error-message').forEach(function(el) {
        el.style.display = 'none';
    });
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const address = document.getElementById('address').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (firstName.length < 2) {
        document.getElementById('firstNameError').textContent = 'First name must be at least 2 characters long.';
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
    }
    if (lastName.length < 2) {
        document.getElementById('lastNameError').textContent = 'Last name must be at least 2 characters long.';
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    }
    if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters long.';
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must be 10 digits.';
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }
    if (new Date(dateOfBirth) >= new Date()) {
        document.getElementById('dateOfBirthError').textContent = 'Date of birth must be in the past.';
        document.getElementById('dateOfBirthError').style.display = 'block';
        isValid = false;
    }
    if (address.length < 5) {
        document.getElementById('addressError').textContent = 'Address must be at least 5 characters long.';
        document.getElementById('addressError').style.display = 'block';
        isValid = false;
    }
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
    }
    if (isValid) {
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';
        setTimeout(() => {
            window.location.href = 'form.html'; 
        }, 2000); 
    }
});
