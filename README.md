# About GiftMaster

<br>

## Description

The focus of GiftMaster is making gift-giving simpler and reducing gift anxiety. Our solution provides a way to avoid the awkwardness with gift-giving.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start creating and managing wish lists
-  **Login:** As a user I can login to the platform so that I can start creating and managing wish lists
-  **Logout:** As a user I can logout from the platform so no one else can modify my information
-  **Check profile** As a user I can check my profile and wish lists
-  **Read recipients details** As a user I can get a random element from my backlog
-  **Add recipients** As a user I can add elements to my wish lists
-  **Edit recipients** As a user I can mark elements in my backlog as done
-  **Delete recipients** As a user I can delete elements from my wish lists
-  **Read gifts details** As a user I can get a random element from my backlog
-  **Add gifts** As a user I can add elements to my wish lists
-  **Delete gifts** As a user I can delete elements from my wish lists

## Backlog

- Friends list
- Recommendations from friends
- Books media
- Comics media

<br>


# Client / Frontend

## React Router Routes (React App)
| Path                      | Component                      | Permissions | Behavior                                                     |
| ------------------------- | --------------------           | ----------- | ------------------------------------------------------------ |
| `/`                       |                      | public `<Route>`            | Home page                                        |
| `/signup`                 | SignupPage                     | anon only  `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup |
| `/login`                  | LoginPage                      | anon only `<AnonRoute>`     | Login form, link to signup, navigate to homepage after login  |
| `/logout`                 | n/a                            | user only `<PrivateRoute>`  | Navigate to homepage after logout, expire session             |
| `/backlog/series`         | NavBar, ElementList, FooterBar | user only `<PrivateRoute>`  | Shows all tv series on backlog                                |
| `/backlog/films`          | NavBar, ElementList, FooterBar | user only `<PrivateRoute>`  | Shows all films on backlog                                    |
| `/backlog/games`          | NavBar, ElementList, FooterBar | user only `<PrivateRoute>`  | Shows all games on backlog                                    |
| `/search/series`          | SearchForm, SearchResults      | user only  `<PrivateRoute>` | Search a tv series to be added                                |
| `/search/films`           | SearchForm, SearchResults      | user only `<PrivateRoute>`  | Search a film to be added                                     |
| `/search/games`           | SearchForm, SearchResults      | user only `<PrivateRoute>`  | Search a game to be added                                     |
| `/add/:id`                | ElementInfo                    | user only `<PrivateRoute>`  | Add an element to the backlog                                 |
| `/profile`                | Profile, Stats                 | user only  `<PrivateRoute>` | Check profile with stat information                           |
| `/done/series`            | Done list for Series           | user only  `<PrivateRoute>` | Shows all tv series finished                                  |
| `/done/films`             | Done list for films            | user only `<PrivateRoute>`  | Shows all films finished                                      |
| `/done/games`             | Done list for games            | user only `<PrivateRoute>`  | Shows all videogames finished                                 |
          

## Components

- HomePage

- LoginPage

- SignupPage

- ProfilePage

- ListPage

- NavBar

- SearchBar

- IsPrivate

- IsAnon

- AddRecipient

- AddGift


## Services

- Auth Service
  - auth.signup(user)
  - auth.login(user)
  - auth.verify
  - auth.logout()

- Recipient Service
  - recipient.find()
  - recipient.detail(id)
  - recipient.create(id)
  - recipient.delete(id)
  - recipient.update(id)
  
- Gift Service
  - gift.find()
  - gift.detail(id)
  - gift.create(id)
  - gift.delete(id)
  - gift.update(id) 


<br>


# Server / Backend


## Models

User model

```javascript
{
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  userName: {type: String, required: true},
  firstName: String,
  lastName: String,
  birthday: Date,
  religion, String,
  recipient: [{ type: Schema.Types.ObjectId, ref: "Recipient" }],
}
```



Recipient model

```javascript
 {
    imageRecipient:String,
    name:String,
    gifts: [{ type: Schema.Types.ObjectId, ref: 'Gift'}],
    personalDetails:String,
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    preference: {
     type:String,
     maxLength: 500,
        },
    unwanted: {
    type:String,
        }
 }
```

Gift model

```javascript
{
    title: String,
    priceSpan: Number,
    occasion: String, 
    imageGift: String,
    link: String,
    notes:{
        type:String,
        maxLength: 500,
        },
    recipient: [{ type: Schema.Types.ObjectId, ref: 'Recipient' }],
}
```


<br>


## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/`           | Home Page                | 200            | 404          | Return home page           |
| GET         | `/auth/profile`           | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`                | {username, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session    |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the user                                            |
| GET        | `/auth/verify`                 | {JWT}  |                | 400          | Used to verify JWT stored on the client                                               |
| POST         | `/recipients/upload`             |                              |                | 400          | Upload recipient image                                           |
| POST         | `/recipients`              |                              |                |              | Creates a new recipient                                           |
| GET         | `/recipients`              |                              |                |              | Retrieves all recipients                                          |
| GET         | `/recipients/:id`                        |                              |200            | 400          | Retrieves a specific recipient by Id                                        |
| PUT         | `/recipients/:id`                 |                              | 200            | 400          | Edit recipient                                                 |
| DELETE      | `/recipients/:id`                 |                              | 201            | 400          | Deletes recipient                                               |
| POST         | `/gifts/upload`             |                              |                | 400          | Upload gift image                                           |
| POST         | `/gifts`              |                              |                |              | Creates a new gift                                           |
| GET         | `/gifts`              |                              |                |              | Retrieves all gifts                                          |
| GET         | `/gifts/:id`                        |                              |            | 400          | Retrieves a specific gift by Id                                        |
| PUT         | `/gifts/:id`                 |                              | 200            | 400          | Edit gift                                                 |
| DELETE      | `/gifts/:id`                 |                              | 201            | 400          | Deletes gift                                               |



<br>


## Links

### Trello/Kanban

[Link to the trello board](https://trello.com/b/ZDSBvpH2/final-project) 

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/jk030/giftClient)

[Server repository Link](https://github.com/jk030/giftServer)

[Deployed App Link]("deployment URL ")

### Slides

Presentation slides:
[Slides Link](https://slides.com/d/BFYeO2E/live)
