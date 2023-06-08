function signUp() {
  // Получаем значения полей
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;
  const confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;
  const phoneNumber = document.querySelector('input[type="tel"]').value;
  const termsAccepted = document.querySelector('#termsCheckbox').checked;

  // Проверяем, что все поля заполнены
  if (!email || !password || !confirmPassword || !phoneNumber) {
    alert('Please fill in all fields');
    return;
  }

  // Проверяем, что email введен корректно
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.querySelector('input[type="email"]').style.borderColor = 'red';
    alert('Please enter a valid email address');
    return;
  } 

  // Проверяем, что пароль содержит хотя бы одну цифру и одну букву
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(password)) {
    document.querySelectorAll('input[type="password"]')[0].style.borderColor = 'red';
    alert('Password must contain at least one letter and one number, and be at least 8 characters long');
    return;
  }

  // Проверяем, что подтверждение пароля совпадает с паролем
  if (password !== confirmPassword) {
    document.querySelectorAll('input[type="password"]')[1].style.borderColor = 'red';
    alert('Passwords do not match');
    return;
  }

  // Проверяем, что номер телефона введен корректно
  const phoneRegex = /^\d{9}$/;
  if (!phoneRegex.test(phoneNumber)) {
    document.querySelector('input[type="tel"]').style.borderColor = 'red';
    alert('Please enter a valid phone number (12 digits)');
    return;
  }

  // Проверяем, что пользователь принял условия использования
  if (!termsAccepted) {
    alert('Please accept the terms of service');
    return;
  }

  // Если все проверки пройдены успешно, то можно отправить данные на сервер
  alert('Sign up successful!');
  document.querySelectorAll('input[type="password"]')[0].style.borderColor = 'black';
  document.querySelector('input[type="email"]').style.borderColor = 'black';
  document.querySelectorAll('input[type="password"]')[1].style.borderColor = 'black';
}
