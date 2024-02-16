const name = document.querySelector('.full-name')
const username = document.querySelector('.username')
const textArea = document.querySelector('textarea');

document.querySelectorAll('.full-name, .username, textarea').forEach(elem => {
  elem.addEventListener('keyup', () => {
    if ((name.value) && (username.value) && (textArea.value)) {
      document.querySelector('button').style.backgroundColor = '#69727b'
    } else {
      document.querySelector('button').style.backgroundColor = '#69727b89'
    }
  })
})


document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();

  const userdtails = {
    title: 'Clairvoyant Service',
    fullName: name.value,
    instagramUsername: username.value,
    preferedService: textArea.value 
  }

  sendEmail(userdtails);

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
      <br> Instagram Username: ${userdtails.instagramUsername}; 
      <br> Prefered Service: ${userdtails.preferedService};
    `
  }).then(
    message => alert('Service Sent Sucessfully! \nYou will get a reply shortly.')
  );
}
