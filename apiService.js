const API_URL = "https://private-b2e6827-robustatask.apiary-mock.com";
const API_PATH_SIGNUP = "/auth/register";
const API_PATH_SIGNIN = "/auth/login";

function createAPIRequest(url, body) {
  const xmlRequest = new XMLHttpRequest();
  xmlRequest.open("POST", url, true);
  xmlRequest.setRequestHeader("Content-type", "application/json");
  
  xmlRequest.onreadystatechange = function () {
    const { readyState, status, response } = this; 
    if (readyState === 4 && status === 200) {
      console.log(JSON.parse(response));
    }
  }

  xmlRequest.send(JSON.stringify(body));
}

function signUp(form) {
  const url = API_URL + API_PATH_SIGNUP;
  const body = {
    "name": form.FullName.value,
    "email": form.Email.value,
    "username": form.Username.value,
    "password": form.Password.value,
  };

  createAPIRequest(url, body);
}

function signIn(form) {
  const url = API_URL + API_PATH_SIGNIN;
  const body = {
    "email": form.SignInEmail.value,
    "password": form.SignInPassword.value,
  };

  createAPIRequest(url, body);
}