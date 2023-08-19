//step-1: add event handler to the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('button clicked');
    // const userEmails = document.getElementById('user-email');
    // const userEmail= userEmails.value;
    const userEmail = document.getElementById('user-email').value;
    // console.log(userEmail);
    const userPassword = document.getElementById('user-password').value;
    // console.log(userPassword);
    if(userEmail === 'tamimmashuk@gmail.com' && userPassword === 'mashuk'){
        window.location.href='bank.html';
    }
    else
        console.log('Invalid User');
})