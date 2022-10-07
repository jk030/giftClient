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
-  **Read recipients details** As a user I can get information about a recipient
-  **Add recipients** As a user I can add recipients to my profile
-  **Edit recipients** As a user I can edit recipients in my profile
-  **Delete recipients** As a user I can delete recipients from my profile
-  **Read gifts details** As a user I can get information about a gift for a recipient
-  **Add gifts** As a user I can add gifts to my recipient's list
-  **Delete gifts** As a user I can delete gifts from my recipient's wish lists 

<br>


# Client / Frontend

## React Router Routes (React App)

- / -Homepage
- /auth/signup - Signup form
- /auth/login -Login form
- /profile/:id - Profile page of the logged in User
- /listPage/:id - Recipient details and gift details

## Pages

- Home Page (public)
- Sign in Page (anon only)
- Log in Page (anon only)
- Recipient Create (user only)
- Gift Create (user only)
- List page (Recipient) Detail Page (user and public)
- My Profile Page (user only)
- 404 Page (public)

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

- AuthContext


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

- GET `/` Home Page
- POST `/auth/signup`
  - body:
    - username
    - email
    - password
- POST `/auth/login`
  - body: 
    - username
    - password
- POST `/auth/verify`
  - body:
    - JWT
- GET `/auth/profile`
- GET `/auth/logout`
- POST `/recipients/upload
- POST `recipients`
  - body:
    - name
    - personalDetails
    - userId
    - imageRecipient
    - preference
    - unwanted
    - privacy
- GET `/recipients`
- GET `/recipients/:recipeintId`
- PUT `/recipients/:recipientId`
- DELETE `/recipients/:recipientId`
- POST `/gifts/upload`
- POST `/gifts`
  - body:
    - title
    - priceSpan
    - occasion
    - imageGift
    - link
    - notes
    - recipientId
- GET `/gifts`
- GET `/gifts/:giftId`
- PUT `/gifts/:giftId`
- DELETE `/gifts/:giftId`

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
