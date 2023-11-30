
**Using Git locally**
-Creating a git repository using: git init

-The .git folder that stores all your changes

-Basic command line commands navigate through directories, move files, and delete files: cd, mv, rm, mkdir

-Showing the status of your repository using: git status

## we have some install library
1. npm i -g nodemon
2. npx create-react-app storyapp-full-stack
3. npm i express
4. npm i bcrypt(secure the password)
5. npm i multer(we can use this command fileupload)
6. npm i jsonwebtoken(secure to api)


**connect to db**
npm i monogoose


# StoryApp-FullStack

## purpose 
The purpose of a storyApp is to provide a platform where users can discover,engage with and contribute to collection of stories.The app aims to cater to both adminstratores and readers each with their own set of functionalities.

Admin: Users with administrative privileges ( Editing, adding or
deleting a Story)
Reader: Users who explore and engage with the stories

Admin Functionalities:
Login
Dashboard
Add/Manage story themes
Add/Manage stories
view user's Feedback
List of readers
Logout


Reader Functionalities:
Home Page
Themes
stories(if unauthenticated can read only one story otherwise access to all stories)
Register
Login
Give Feedback On website (if authenticated )
Logout

## Technology and Tools Used
1. express
2. node.js
3. react
4. Mongo db(MERN)


