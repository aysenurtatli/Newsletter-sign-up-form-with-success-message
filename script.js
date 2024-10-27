const errorMessage = document.getElementById('error-state');
const subsBtn = document.getElementById('js-btn');
const successMessage =  document.querySelector(".success-message-container");
const signupForm = document.querySelector(".sign-up-form-container");
const dismissBtn = document.querySelector(".dismiss-btn");
const showEmail = document.getElementById("show-email");
console.log(showEmail);

function validateEmail() {
  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let emailInput = document.getElementById('email-input');
    if (!emailInput.value.match(validRegex)) {
      errorMessage.textContent = 'valid email required';
      emailInput.style.backgroundColor = "hsl(4, 100%, 67% , 20%)";
      emailInput.style.borderColor = "hsl(4, 100%, 67%)";
      return false;
    } else {
      signupForm.classList.add("hidden");
      successMessage.classList.remove("hidden");
      showEmail.textContent = emailInput.value;
    }

  }

subsBtn.addEventListener('click', subsBtnClick);
dismissBtn.addEventListener('click', dismissBtnClick)



function subsBtnClick(){
  validateEmail();
}

function dismissBtnClick(){
  signupForm.classList.remove("hidden");
  successMessage.classList.add("hidden");
}







