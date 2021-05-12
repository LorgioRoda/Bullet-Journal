# Bullet-Journal

### Description

---

This is a list management app, to organize the user's daily life, control their habits, create new habits and create a personalized list to achieve their goals.

### User Stories

---

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

---

### Client/Frontend

---

##### React Router Routes (React App)

#### Models

User:
-Id: Object Id
-Email: String, required, unique
-Password: String, required
-Username: String, uniqued, required
-Imagen: String
-Description: String, maxlength 280
-Task List: Object id []
-Habits List: Object id []

Tasks: - Id: Object Id - Name: String, required - Description: Sring maxlength 100 - Done: Boolean, default false - DueDate, default: Date.now() - Priority: Boolean, default: false

Habits: - Id: Object Id - Month: String, required - Habits: [] - Imagen: String - Checkbox: Boolean, default false - DueDate: Date, default: Date.now()

---

#### API Endpoints (backend routes)

| HTTP Method | URL                    | Request Body                                                                  | Success status | Success status | Error Status                                                          | Description |
| ----------- | ---------------------- | ----------------------------------------------------------------------------- | -------------- | -------------- | --------------------------------------------------------------------- | ----------- |
| POST        | /SIGNUP                | {id, email, password, username, imagen, description, task list, habits, list} | 201            | 404            | REGISTRATE                                                            |
| POST        | /LOGIN                 | {email, password}                                                             | 200            | 401            | LOGEATE                                                               |
| POST        | /AUTH/LOGOUT           | (empty)                                                                       | 204            | 400            | DES-LOGEARTE                                                          |
| GET         | /PROFILE/:ID           | SESION GUARDADA                                                               | 200            | 404            | Comprobar si el usuario está conectado y devolver la página de perfil |
| GET         | /AUTH/:ID/EDIT         | EDITAR                                                                        | 200            | 404            | EDITAR                                                                |
| POST        | /USER/:ID/TASK         | TAREA                                                                         | 200            | 404            | VISUALIZACIÓN DE TAREAS                                               |
| POST        | /USER/:ID/HABITS       | HABITOS                                                                       | 200            | 404            | VISUALIZACIÓN DE HABITOS                                              |
| POST        | /USER/:ID/CHRONOMETRER | CRONOMETRO                                                                    | 200            | 404            | VISUALIZACIÓN DE CRONOMETRO                                           |
| POST        | /USER/:ID/CHRONOMETRER | CRONOMETRO                                                                    | 200            | 404            | VISUALIZACIÓN DE CRONOMETRO                                           |
