
const authControllers = {
 signupController:(request, response) => {
    response.send("Singup Routes");

 },
 loginController:(request,response) => {
   response.send("Login Routes")
 },
 logoutController:(request, response) => {
   response.send("Logout Routes"); 
 }
}

export default authControllers; 