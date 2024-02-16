import { session } from "./Data/session.js";

document.querySelector('.appointment-list').innerHTML = session.map(({type, priceCent, id}) => {
  return `
    <div class="appointment-cont">
      <input type="radio" name="same" id="${id}" data-id="${id}" class="radio">
      <div class="appointment-type">
        ${type}
      </div>
      <div class="appointment-price">$${(priceCent/100).toFixed(2)}</div>
    </div>
  `
}).join('');

let username;
const bookBtn = document.querySelector('.book');
let match;

const inputElem = document.querySelectorAll('.radio');
inputElem.forEach(elem => {
  elem.addEventListener('click', () => {
    let id = Number(elem.dataset.id)

    session.forEach(list => {

      if (id === list.id ) {
        match = list
      }
    });
    console.log(match.type, match.priceCent);
    bookBtn.style.backgroundColor = '#69727b'
  });
});

bookBtn.addEventListener('click', () => {
  if (match) {
    document.querySelector('.booking-container').classList.remove('hide');
    document.querySelector('.session-type').value = `${match.type} Cost $${(match.priceCent/100).toFixed(2)}`;
    document.querySelectorAll('.blur').forEach(elem => {
      elem.style.filter = 'blur(2px)'
    })
    document.querySelector('body').style.overflow = 'hidden'
  } else {
    alert('Please select a Session');
  };
});

document.querySelectorAll('.full-name, .username').forEach((elem) => {

  const name = document.querySelector('.full-name')
  const username = document.querySelector('.username')
  
  elem.addEventListener('keyup', () => {
    if ((name.value) && (username.value)) {
      document.querySelector('.proceed').style.backgroundColor = '#69727b'
    } else {
      document.querySelector('.proceed').style.backgroundColor = '#69727b89'
    };
  });
});


document.querySelector('.fa-times').addEventListener('click', () => {
  document.querySelector('.booking-container').classList.add('hide');
  document.querySelector('body').style.overflow = 'visible';
  document.querySelectorAll('.blur').forEach(elem => {
    elem.style.filter = 'blur(0px)'
  });
});


document.querySelector('.not-avail-cont').addEventListener('submit', (event) => {
  event.preventDefault();
  const textArea = document.querySelector('textarea')

  if (textArea.value) {
    document.querySelector('.pop-textarea').classList.remove('hide');
    document.querySelector('.pop-textarea').value = `${textArea.value}`
    document.querySelector('.session-type-span').innerHTML = 'Prefer Session'
    document.querySelector('.booking-container').classList.remove('hide');
    document.querySelector('.session-type').classList.add('hide')
    document.querySelectorAll('.blur').forEach(elem => {
      elem.style.filter = 'blur(2px)';
    });
  };
});


document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('.full-name')
  const username = document.querySelector('.username')
  const sessionType = document.querySelector('.session-type');
  const popTextarea = document.querySelector('.pop-textarea');

  const userdtails = {
    title: 'Booking an appointment',
    fullName: name.value,
    instagramUsername: username.value,
    sessionType: sessionType.value ? sessionType.value: '',
    preferedSession: popTextarea.value ? popTextarea.value : '' 
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
      <br> Session Type: ${userdtails.sessionType};
      <br> Prefered Session: ${userdtails.preferedSession};
    `
  }).then(
    message => alert('Appoinment Sent Sucessfully! \nYou will receive a reply shortly. ')
  );
}
