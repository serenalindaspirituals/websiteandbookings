document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('.name');
  const email = document.querySelector('.email');
  const phoneNumber = document.querySelector('.phone-number');
  const textArea = document.querySelector('textarea');

  const userdtails = {
    title: 'Contact',
    fullName: name.value,
    userEmail: email.value,
    phoneNumber: phoneNumber.value,
    message: textArea.value 
  }

  sendEmail(userdtails)

  setTimeout(() => {
    location.replace('index.html')
  }, 2000)
});


function sendEmail(userdtails) {
  Email.send({
    SecureToken: 'ba5b9670-fb6f-4598-af1c-19cf1c1d3701',
    To : 'serenaspirituals@gmail.com',
    From : "serenaspirituals@gmail.com",
    Subject : "Details From My Website",
    Body : `
      Title: ${userdtails.title}; 
      <br> Full Name: ${userdtails.fullName}; 
      <br> User Email: ${userdtails.userEmail}; 
      <br> Phone Number: ${userdtails.phoneNumber}; 
      <br> Message: ${userdtails.message};
    `
  }).then(
    message => alert('Message Sent Sucessfully')
  );
}
