const nameEle= document.getElementById("name");
const emailEle= document.getElementById("email");
const webEle= document.getElementById("website");
const phoneEle= document.getElementById("phone");
const messageEle= document.getElementById("message");

const nameErrorEle= document.getElementById("nameError");
const emailErrorEle= document.getElementById("emailError");
const webErrorEle= document.getElementById("websiteError");
const phoneErrorEle= document.getElementById("phoneError");
const messageErrorEle= document.getElementById("messageError");



nameEle.addEventListener("input", () => validateName());
emailEle.addEventListener("input", () => validateEmail());
webEle.addEventListener("input", () => validateWeb());
phoneEle.addEventListener("input", () => validatePhone());
messageEle.addEventListener("input", () => validateMessage());



const namePattern= new RegExp("^[a-zA-Z ]{2,30}$");
const emailPattern = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
const phonePattern = new RegExp("^[0-9]{10}$");

// pattern for website
const websitePattern = new RegExp("^[a-zA-Z0-9.,!?'\" ]{2,30}$");
const messagePattern = new RegExp("^[a-zA-Z0-9.,!?'\" ]{5,500}$");



function validateName() {
      const name = nameEle.value;
      if (name == "") {
          nameErrorEle.textContent = "Name cannot be empty";
          return false
          }
        else if (namePattern.test(name)== false) {
          nameErrorEle.textContent = "Name must be 2-30 characters long and contain only letters and spaces";
            return false;
        }
          else {
          nameErrorEle.textContent = "";
            return true;
           
            }
      

    }


function validateEmail() {
      const email = emailEle.value;
      if (email == "") {
          emailErrorEle.textContent = "Email cannot be empty";
          return false;
      } else if (emailPattern.test(email) == false) {
          emailErrorEle.textContent = "Invalid email format";
          return false;
      } else {
          emailErrorEle.textContent = "";
          return true;
      }
    }

function validateWeb() {
      const web = webEle.value;
      if (web == "") {
          webErrorEle.textContent = "Website cannot be empty";
          return false;
      } else if (websitePattern.test(web) == false) {
          webErrorEle.textContent = "Website must be 2-30 characters long and contain only letters, numbers, and punctuation";
          return false;
      } else {
          webErrorEle.textContent = "";
          return true;
      }
    }


    
function validatePhone() {
      const phone = phoneEle.value;
      if (phone == "") {
          phoneErrorEle.textContent = "Phone number cannot be empty";
          return false;
      } else if (phonePattern.test(phone) == false) {
          phoneErrorEle.textContent = "Phone number must be 10 digits long";
          return false;
      } else {
          phoneErrorEle.textContent = "";
          return true;
      }
    }

function validateMessage() {
      const message = messageEle.value;
      if (message == "") {
          messageErrorEle.textContent = "Message cannot be empty";
          return false;
      } else if (messagePattern.test(message) == false) {
          messageErrorEle.textContent = "Message must be 5-500 characters long and contain only letters, numbers, and punctuation";
          return false;
      } else {
          messageErrorEle.textContent = "";
          return true;
      }
    }


    function validateAll(){
        const b1 = validateName();
        const b2 = validateEmail();
        const b3 = validateWeb();
        const b4 = validatePhone();
        const b5 = validateMessage();
        console.log(b1, b2, b3, b4, b5);
        return b1 && b2 && b3 && b4 && b5;

    }

