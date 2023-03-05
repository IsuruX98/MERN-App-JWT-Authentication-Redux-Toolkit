import toast from "react-hot-toast";

//validate login page username
export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);

  return errors;
}

//validate login password
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);

  return errors;
}

//validate Reset password
export async function resetPasswordValidate(values) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirm_pwd) {
    errors.exist = toast.error("Password missmatch...!");
  }

  return errors;
}

//validate Register Form
export async function registerValidation(values) {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);

  return errors;
}

//validate Profile page
export async function profileValidation(values) {
  const errors = emailVerify({}, values);

  return errors;
}

/*********************************************************/

//Verify reset password

//Verify password
function passwordVerify(error = {}, values) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.password) {
    error.password = toast.error("password required...");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Wrong Password...!");
  } else if (values.password.length < 4) {
    error.password = toast.error(
      "Password must be more than four Characters long..."
    );
  } else if (!specialChars.test(values.password)) {
    error.password = toast.error("Password must have special Character ...");
  }
  return error;
}

//Verify username
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("username required...");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Wrong Username...!");
  }
  return error;
}

//Verify email
function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("Email Required...!");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Wrong Email...!");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid email address...!");
  }

  return error;
}
