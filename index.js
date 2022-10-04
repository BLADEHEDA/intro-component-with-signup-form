//The form validation of the page using the javascript
// use the dom to get the ID's OF THE ELEMENTS and manipulate it it accordingly
//CHECK THE validity of the inout (using if else s )  

const fname = document.getElementById('First');
const lname = document.getElementById('last'); 
const email = document.getElementById('email');
const password = document.getElementById('password');
var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// lets create a finction htat permits us to verify the validity and availability of the data 
function check(){
    let fnamevalue = fname.value;
    const lnamevalue = lname.value;   
    const emailvalue = email.value;
    const passval = password.value;
   //  const seriesvalue= series.value;
  
  // This line displays an error message below the inout dialog box indicating an error message  
    let error1=document.getElementById("error1");
    let error2=  document.getElementById("error2");
    let error3=  document.getElementById("error3");
    let error4=  document.getElementById("error4");
  if(fnamevalue ==""){
    error1.textContent = "First-Name cannot be empty"
  return false
  }

  else if(lnamevalue==""){

    error2.textContent="Last-Name cannot be empty";
    return false;
 }
 else if(!filter.test(email.value)) {
  error3.textContent="looks like thisis nit an Email ";
  email.focus;
  return false;
}
else if(passval==""){

  error4.textContent="Password field cannot be empty ";
  return false;
}
}

// button.addEventListener("click", 
// function checkEmail() {
//    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//    if (!filter.test(email.value)) {
//       error3.textContent="Email cannot be empty ";
//        email.focus;
//        return false;
//    }
// }
// )





