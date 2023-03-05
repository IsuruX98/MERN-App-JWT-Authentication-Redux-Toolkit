/*
POST: http://localhost:8080/api/register
@param :{
    "username":"isuru123",
    "password":"HGTim@98",
    "email":"isurusanka98@gmail.com",
    "firstname":"isuru",
    "lastname":"madusanka",
    "mobile":"0771886641",
    "address":"no.05,Galle",
    "profile":"",
}
*/

export async function register(req, res) {
  res.json("register route");
}

/*
POST: http://localhost:8080/api/login
@param :{
    "username":"isuru123",
    "password":"HGTim@98",
}
*/

export async function login(req, res) {
  res.json("login route");
}

/*GET: http://localhost:8080/api/user/isuru123 */
export async function getUser(req, res) {
  res.json("getUser route");
}

/* PUT : http://localhost:8080/api/updateuser 
@param :{
    "id":"<userid>",
}
body :{
    firstname:'',
    address:'',
    profile:'',
}
*/
export async function updateUser(req, res) {
  res.json("updateUser route");
}

/*GET: http://localhost:8080/api/user/generateOTP */
export async function generateOTP(req, res) {
  res.json("generateOTP route");
}
/*GET: http://localhost:8080/api/user/verifyOTP */
export async function verifyOTP(req, res) {
  res.json("verifyOTP route");
}

//successfully redirect user when OTP is valid
/*GET: http://localhost:8080/api/user/createResetSession */
export async function createResetSession(req, res) {
  res.json("createResetSession route");
}

//update the password when we have valid session
/*PUT: http://localhost:8080/api/resetPassword */
export async function resetPassword(req, res) {
  res.json("resetPassword route");
}
