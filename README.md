# Bullet-Journal
### Description

------------


This is a list management app, to organize the user's daily life, control their habits, create new habits and create a personalized list to achieve their goals.

### User Stories

------------


- 404: As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.
- Signup: As an anon I can sign up in the platform.
- Login: As a user I can login to the platform.
- Logout: As a user I can logout from the platform.
- Add Task: The user will be able to add, edit and delete his task.
- Profile: The user will be able to have a personalized profile
- Edit Profile: The user will be able to edit his profile
- Chronometer: A special chronometer for performing tasks using the commodore method

### Backlog

------------


#### General

- Implementation of node mail
- Passport with Google

#### Tasks

- Follow-up of tasks with notification
- Save deleted tasks
- Notification by mail, reminding you of important tasks

#####  React Router Routes (React App)

Path  | Component | Permissions | Behavior |
------------- | ------------- | ------------- | -------------
/  | Home |    Public  | Home page
/signup   | Signup |    anonRoute  |Signup form, link to login, navigate to homepage after signup
/login | Login |   anonRoute   | Login form, link to signup, navigate to homepage after login
/profile  | User | PrivateRoute   |  User's private profile, with his or her information
/edit-profile  | EditProfile | PrivateRoute  | The user will modify his profile content
/task  | Task | PrivateRoute  | The user will modify his task
/chronometer  | Chronometer | PrivateRoute   | A timer where you can edit and modify a template



### Components

- NavBar
- Signup
- Login
- User
- Edit-Profile
- Task
- CreateTask
- AnonRoute
- Chronometer


### Services

------------

**- Auth Service**
- auth.login
- auth.signup(user)
- auth.logout()
- auth.me()

**- Profile Services**
- profile
- profile/edit(user)

**- Chronometer**
- Chronometer(user)

**- Task**
- Create Task



#### Models

------------




**User:**

```javascript
username: { type: String, required: true, unique: true },
password: { type: String, required: true},
description: {type: String, default: ""},
 email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true}
photo: {type: String, default: photo}
profile_Background: {type: String, default: photo}
```



**Tasks:**
```javascript
name: { type: String, required: true },
description: { type: String, maxlength: 250 },
done: { type: Boolean, default: false },
dueDate: { type: Date, default: Date.now() },
priority: { type: Boolean, default: false },
user: { type: Schema.Types.ObjectId, ref: "User" },
```


### API Endpoints (backend routes)

------------



HTTP Method  | URL | Request Body |  Success status	| Error Status |
------------- | ------------- | ------------- | -------------
Post  | /signup |    {id, email, password}  | 201| 404
Post   | /login |    {email, password}  | 200 | 401
Post | /auth/logout |   (empty)   | 204| 400
Get | /profile | {req.user.id}   | 200 | 404
Post  | /edit-Profile | {req.user.id}  | 200 | 404
Get  | /task | {req.user}  | 200 | 404
Delete | /profile/:id/delete | {req.params}| 200 |404




### Link

------------
#### Trello/kanban:
[Trello](https://trello.com/b/dfaA2h4F/proyecto-3)



