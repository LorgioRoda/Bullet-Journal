# Bullet-Journal
### Description

------------


This is a list management app, to organize the user's daily life, control their habits, create new habits and create a personalized list to achieve their goals.

### User Stories

------------
- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.
- **Signup:** As an anon I can sign up in the platform.
- **Login:** As a user I can login to the platform.
- **Logout:** As a user I can logout from the platform.
- **Add Task:** The user will be able to add, edit and delete his task.
- **Add Habits:** The user will be able to add, edit and delete his habits.
- **Profile:** The user will be able to have a personalized profile
- **Edit Profile:** The user will be able to edit his profile
- **Chronometer:** A special chronometer for performing tasks using the commodore method

### Backlog

------------

General
- Implementation of node mail
- Passport with Google
- Web responsive

Chronometer:
- Create model
- Save tasks performed with Chronometer
- User can edit Chronometer

Tasks
- Follow-up of tasks
- Save deleted tasks
- Notification by mail, reminding you of important tasks


### Client/Frontend

------------
#####  React Router Routes (React App)

Path  | Component | Permissions | Behavior |
------------- | ------------- | ------------- | -------------
/  | SplashPage |    public  | Home page
/signup   | SignupPage |    anon only  |Signup form, link to login, navigate to homepage after signup
/login | LoginPage |  anon only   | Login form, link to signup, navigate to homepage after login
/profile  | ProfilePage | user only   |  User's private profile, with his or her information
/profile-edit  | ProfilePageEdit | user only    | The user will modify his profile content
/profile-task  | ProfileTask |  user only   | The user will modify his task
/profile-habits  | ProfileHabits | user only    | The user will modify his habits
/profile-chronometer  | Chronometer | user only    | A timer where you can edit and modify a template
Content Cell  | Content Cell |     |


####Components

- Content Cell
- SignupPage
- LoginPage
- ProfilePage
- ProfilePageEdit
- ProfileTask
- ProfileHabits
- Chronometer


### Services

------------

- Auth Service
	- auth.login
	- auth.signup(user)
	- auth.logout()
	- auth.me()
	- auth.getUser()

- Profile Services
	- profile
	- profile/edit(user)
	- profile/task()
	- profile/habits()

- Chronometer
	-Chronometer(user) 
	
	










###Links

------------
#### Trello/kanban:
[Trello](http://https://trello.com/b/dfaA2h4F/proyecto-3 "Trello")

###Git:
The url to your repository and to your deployed project:
[Repository GitHub](http://https://github.com/LorgioRoda/Bullet-Journal/tree/master "Repository GitHub")