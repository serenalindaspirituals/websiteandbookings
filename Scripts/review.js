document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const userReview = {
    title: 'Review',
    review: document.querySelector('textarea').value
  }

  sendEmail(userReview)
  setTimeout(() => {
    location.replace('index.html')
  }, 2000)
});

document.querySelector('textarea').addEventListener('keyup', () => {
  if (document.querySelector('textarea').value) {
    document.querySelector('.proceed').style.backgroundColor = '#69727b'
  } else {
    document.querySelector('.proceed').style.backgroundColor = '#69727b89'
  };
});


function sendEmail(userReview) {
  Email.send({
    SecureToken: 'ba5b9670-fb6f-4598-af1c-19cf1c1d3701',
    To : 'serenaspirituals@gmail.com',
    From : "serenaspirituals@gmail.com",
    Subject : "Details From My Website",
    Body : `
      Title: ${userReview.title}; 
      <br> Review: ${userReview.review};
    `
  }).then(
    message => alert('Review Sent Sucessfully')
  );
}
