let element = document.createElement('p');
document.body.appendChild(element);
element.align='center';
element.style.fontSize="20px";
element.style.width='50%';
element.style.padding='10px';
element.style.margin='10px auto';
function form() {
  element.style.backgroundColor='White';
  console.clear();
  let inp_name = document.getElementById("name");
  let inp_email = document.getElementById("email");
  let inp_password = document.getElementById("password");
  inp_name = inp_name.value;
  inp_email = inp_email.value;
  inp_password = inp_password.value;
  if (
    (inp_name.trim() != "") &
    (inp_email.trim() != "")
  ) {
   inp_name= inp_name.trim().split('');
if(inp_name.includes('1','2','3','4','5','6','7','8','9','0')){
      element.textContent='Name must not contain number!!!!';
      element.style.color='red';
    }
else if(inp_email.trim().includes('@','.')!=true){
  element.textContent='Your email addres is not correct!!!!';
  element.style.color='red';
}
else if((inp_password.length>=7)!=true){
  element.textContent="Your password is too weak. It should contain atleast 7 digits!!";
  element.style.color='coral';
}

else{
  element.textContent='Signing up sending data.';
  element.style.color='green';
}

  } else {
    element.textContent='Please check some information is not filled!!!!!';
    element.style.color='red';
  }
}
