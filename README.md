
**Using Git locally**
-Creating a git repository using: git init

-The .git folder that stores all your changes

-Basic command line commands navigate through directories, move files, and delete files: cd, mv, rm, mkdir

-Showing the status of your repository using: git status
-when we run run frontend we will use command --npm start
-when we use backend use command --nodemon
## we have some install library
1. npm i -g nodemon
2. npx create-react-app storyapp-full-stack
3. npm i express
4. npm i bcrypt(secure the password)
5. npm i multer(we can use this command fileupload)
6. npm i jsonwebtoken(secure to api)
7. npm i axios
8. npm i react toastify(short message popup)
9. npm i react spinners

**connect to db**
npm i monogoose
**deploy**
render.com

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

## design 
1. template slicing
2. bootstrap

## Referances
1. [Deployment guidlines](https://dashboard.render.com/web/srv-cllb38vq7omc73cjvao0/deploys/dep-cllbd338772c739t5adg)
2. [Mern Stack youtube tutorial]()
3. [Bootstrap CSS](https://getbootstrap.com/)
4. [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).