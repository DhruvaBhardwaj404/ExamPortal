# ExamPortal
This App uses Google Oauth2 to login Users and then provides a platform to take online test and get instant result!

# Steps to Run this on your system=>
>Clone the package to your machine

 >make sure you have latest version of node and npm installed
 
 >In root directory run npm install to install all the packages needed
 
 >Make a .env file and 
 
 >(DB-url to mongodb ,KEY-can be any random string,SESSION_SECRET-can be any random string ,
 CLIENT_SECRET-Google alloted to use API ,CLIENT_ID-Google alloted to use Google API)
 
 >Intialize DB with db_init.js located under app/server/src/DB  `mongo name_of_db relative_path`
 
 >Login with Google and test the test exams
 
 > Explore exams is under construction
 
 >`npm run-script build` to build files and `npm run-scirpt server-dev` for development server
 
 > Download a google icon from Internet and copy it to build folder and rename to `Google.png`
 
 
 # Images
 ![Login](https://github.com/DhruvaBhardwaj404/ExamPortal/blob/master/Images/Login.png)
 ![Enrolled](https://github.com/DhruvaBhardwaj404/ExamPortal/blob/master/Images/Enrolled.png)
 ![ExamStart](https://github.com/DhruvaBhardwaj404/ExamPortal/blob/master/Images/ExamStart.png)
 ![Exam](https://github.com/DhruvaBhardwaj404/ExamPortal/blob/master/Images/Exam2.png)
 ![Result](https://github.com/DhruvaBhardwaj404/ExamPortal/blob/master/Images/ResultScreen.png)
