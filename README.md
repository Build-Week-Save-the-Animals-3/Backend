# Backend
# Schema Design
  - https://dbdesigner.page.link/yUFqPqgSfJhGT43a8

# Trello Board
  - https://trello.com/b/HeVqn9xn/save-the-animals-3

# Product Canvas
   - https://docs.google.com/document/d/10z449G2eZ550b0Xr0HMHGz8Mt1JOQbqI01eX1tyio5g/edit#heading=h.4oicemcbd57

## API documentation

## Welcome Route- 
  - https://ptbw-sta-3.herokuapp.com/

# Success Response:
```js
  {
    "message": "Welcome to Save The Animals API"
  }
```
## POST (Create) Register Organization:
  - https://ptbw-sta-3.herokuapp.com/auth/users/register
  - requires: JSON body below.
```js
  {
    "name": "test", // string
    "password": "test12345" // string
  }
```

# Success Response:
```js
  [
    {
      "id": 8,
      "name": "test",
      "password": "$2a$14$OVBlARPiSIZlWjSzXNQDHO91YoKmiY/F6UC42Vo5f2JUCXaMDb0Sq"
    }
  ]
```

## POST Login Organization:
  - https://ptbw-sta-3.herokuapp.com/auth/users/login
  - requires: JSON body below.
```js
    {
      "name": "test", // string
      "password": "test12345" // string
    }
```

# Success Response: 
```js
  {
    "message": "Welcome test!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo3LCJuYW1lIjoiZGFuaWVsbGUiLCJpYXQiOjE1ODEwOTg4OTcsImV4cCI6MTU4MTUzMDg5N30.jqEwE8y-4ZdJlQHbQdXqu68Au57j5Q0ya9uBAEI4B5c"
  }
```

## Protected Routes
## GET (Find) Organization Users
  - https://ptbw-sta-3.herokuapp.com/users
  - Requires Authorization Header + token from logging in to access

# Success Response:
```js
  [
    {
      "id": 5,
      "name": "test1"
    },
    {
      "id": 6,
      "name": "test2"
    },
  ]
```

# Error Response:
```js
  {
    "message": "Invalid credentials"
  }
```

## POST (Create) Register Supporters:
  - https://ptbw-sta-3.herokuapp.com/auth/supps/register
  - requires: JSON body below.
```js
  {
    "email": "test@test.com", // string
    "password": "test" // string
  }
```

# Success Response:
```js
[
  {
    "id": 5,
    "email": "test@test.com",
    "password": "$2a$14$x8CurbeU9qAvScaOMmVkJO71pU2aA19QfmAYdZUhBWAh7uQ/Xmwpi"
  }
]
```

## POST Login Supporters:
  - https://ptbw-sta-3.herokuapp.com/auth/supps/login
  - requires: JSON body below.
```js
    {
      "email": "test@test.com", // string
      "password": "test12345" // string
    }
```

# Success Response: 
```js
  {
    "message": "Welcome test@test.com!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo3LCJuYW1lIjoiZGFuaWVsbGUiLCJpYXQiOjE1ODEwOTg4OTcsImV4cCI6MTU4MTUzMDg5N30.jqEwE8y-4ZdJlQHbQdXqu68Au57j5Q0ya9uBAEI4B5c"
  }
```

## Protected Routes
## GET (Find) Supporter Users
  - https://ptbw-sta-3.herokuapp.com/supps/supporters
  - Requires Authorization Header + token from logging in to access

# Success Response:
```js
  [
    {
      "id": 1,
      "email": "jane@doe.com"
    },
    {
      "id": 2,
      "email": "john@done.com"
    },
  ]
```

# Error Response:
```js
  {
    "message": "Invalid credentials"
  }
```

## GET (Find) Campaigns- 
  - https://ptbw-sta-3.herokuapp.com/api/campaigns

  # Success Response:
  ```js
    [
      {
        "id": 2, // integer
        "title": "Seahorses Unite!", // string
        "description": "High demand for traditional Chinese medicine market and aquarium trade", // string
        "urgency_level": "Critical", // string
        "location": "South Africa", // string
        "deadline": "2025-10-06T00:00:00.000Z", // date
        "fund_goal": 25000, // integer
        "completed": true // boolean =  0 (false) or 1 (true)
      },
    ]
  ```
## GET (Find) Campaigns by ID- 
  - https://ptbw-sta-3.herokuapp.com/api/campaigns/1

# Success Response:
```js
  {
    "id": 1, // integer
    "title": "Support The River Otters", // string
    "description": "Highly valued for their pelts", // string
    "urgency_level": "Critical", // string
    "location": "Indiana", // string
    "deadline": "2025-05-19T00:00:00.000Z", // date
    "fund_goal": 15000, // integer
    "completed": false // boolean =  0 (false) or 1 (true)
  }
```
# Error Response:
```js
  {
    "message": "The campaign with the specified ID does not exist"
  }
```

## GET (Find) Organizations- 
  - https://ptbw-sta-3.herokuapp.com/api/organizations

# Success Response:
```js
  [
    {
      "id": 8,
      "name": "klaus",
      "password": "$2a$14$OVBlARPiSIZlWjSzXNQDHO91YoKmiY/F6UC42Vo5f2JUCXaMDb0Sq"
    }
  ]
```

## GET (Find) Donations- 
  - https://ptbw-sta-3.herokuapp.com/api/donations

# Success Response:
```js
  [
    {
      "id": 1, 
      "amount": 100 
    },
  ]
```
## GET (Find) Donations by ID- 
  - https://ptbw-sta-3.herokuapp.com/api/donations/1

# Success Response:
```js
  {
    "id": 1, 
    "amount": 100 
  }
```

# Error Response:
```js
  {
    "message": "The donation with the specified ID does not exist"
  }
```

## POST (Create) Campaigns- 
  - https://ptbw-sta-3.herokuapp.com/api/campaigns
  - requires: JSON body below.
```js
  {
    "title": "test1", // string
    "animal": "test", // string
    "description": "testing1", // string
    "urgency_level": "Critical", // string
    "location": "testing1", // string
    "deadline": "2025-05-19", // date
    "fund_goal": 13000, // integer
    "completed": 0 // boolean =  0 (false) or 1 (true)
  }
```
# Success Response:
```js
  {
    "id": 5, 
    "title": "test1", 
    "animal": "test", 
    "description": "testing1", 
    "urgency_level": "Critical", 
    "location": "testing1", 
    "deadline": "2025-05-19", 
    "fund_goal": 130000, 
    "completed": 0 
  }
```
  
## POST (Create) Donations- 
  - https://ptbw-sta-3.herokuapp.com/api/donations
  - requires: JSON body below.
```js
  {
    "amount": 15, // integer
  }
```
# Success Response:
```js
  {
    "id": 5, 
    "amount": 15, 
  }
```
  
## PUT (Update) Campaigns by ID- 
  - https://ptbw-sta-3.herokuapp.com/api/campaigns/1
  - requires: JSON body below with updated item(s).
```js
  {
    "title": "Support the River Otters", // string
    "animal": "River Otters", // string
    "description": "Highly valued for their pelts", // string
    "urgency_level": "Critical", // string
    "location": "Indiana", // string
    "deadline": "2025-05-19", // date
    "fund_goal": 15000, // integer
    "completed": true // boolean = 0 (false) or 1 (true)
  }
```

# Success Response
```js
  {
    "title": "Support the River Otters",
    "animal": "River Otters",
    "description": "Highly valued for their pelts",
    "urgency_level": "Critical",
    "location": "Indiana",
    "deadline": "2025-05-19",
    "fund_goal": 15000,
    "completed": true
  }
```

## DELETE Campaign by ID- 
  - https://ptbw-sta-3.herokuapp.com/api/campaigns/1

# Success Response:
```js
  No body returned for response
```
# Error Response:
```js
  {
    "message": "The campaign with the specified ID does not exist"
  }
```

## Save the Animals
# PITCH
- Key Conservation is helping conservationists receive critical funding and increased global support through an app that provides real-time updates on day-to-day campaigns. We can stop global extinction if we utilize new technology and interact with supporters in ways that they want!

- Note: The design link is for visual inspiration if you choose to use it. Most features in the mockup are beyond the scope of your MVP.

# MVP
-   Two user types; organizations and supports
-   Ability for a conservationist organization to create a new campaign with a funding goal and deadline.
-   Include title, ability to upload a photo (stretch), location, description, species, urgency level, itemize monetary donations needed and overall funding goal.
-   Can view, edit or delete their own existing campaigns
-   Ability for a supporter to view all posted campaigns, and filter by location, species, and issues.
-   Ability for a supporter to make a donation to a campaign

# STRETCH
- Ability to include a photo in a campaign description. Email a receipt upon donation. Push notifications when a new campaign is posted or a donation is made.
-https://www.keyconservation.org/
