# Backend

https://dbdesigner.page.link/yUFqPqgSfJhGT43a8

Welcome Route- https://ptbw-sta-3.herokuapp.com/
returns:
Status: 200 OK
{
"message": "Welcome to Save The Animals API"
}
GET Camps- https://ptbw-sta-3.herokuapp.com/api/campaigns
returns:
Status: 200 OK
[
{
"id": 2,
"title": "Seahorses Unite!",
"description": "High demand for traditional Chinese medicine market and aquarium trade",
"urgency_level": "Critical",
"location": "South Africa",
"deadline": "2025-10-06T00:00:00.000Z",
"fund_goal": 25000,
"completed": true
},
]
GET Camp by ID- https://ptbw-sta-3.herokuapp.com/api/campaigns/1
returns:
Status: 200 OK
{
"id": 1,
"title": "Support The River Otters",
"description": "Highly valued for their pelts",
"urgency_level": "Critical",
"location": "Indiana",
"deadline": "2025-05-19T00:00:00.000Z",
"fund_goal": 15000,
"completed": false
}
GET Orgs- https://ptbw-sta-3.herokuapp.com/api/organizations
returns:
Status: 200 OK
[
{
"id": 1,
"name": "Best Friends First",
"username": "BFF",
"password": "FriendsF!rst"
},
]
GET Dons- https://ptbw-sta-3.herokuapp.com/api/donations
returns:
Status: 200 OK
[
{
"id": 1,
"amount": 100
},
]
GET Dons by ID- https://ptbw-sta-3.herokuapp.com/api/donations/1
returns:
Status: 200 OK
{
"id": 1,
"amount": 100
}
POST Camps- https://ptbw-sta-3.herokuapp.com/api/campaigns
requires: JSON body-
{
"title": "test",
"description": "test",
"urgency_level": "Critical",
"location": "test",
"deadline": "2025-05-19",
"fund_goal": 15000,
"completed": 0
}

returns:
Status: 201 Created
{
"id": 5,
"title": "test1",
"description": "testing1",
"urgency_level": "Critical",
"location": "testing1",
"deadline": "2025-05-19",
"fund_goal": 130000,
"completed": 0
}
POST Dons- https://ptbw-sta-3.herokuapp.com/api/donations
requires: JSON body-
{
"amount": 15,
}

returns:
Status: 201 Created
{
"id": 5,
"amount": 15,
}
PUT Camps by ID- https://ptbw-sta-3.herokuapp.com/api/campaigns/1
requires: JSON body- with updated item(s)
{
"title": "Support the River Otters",
"description": "Highly valued for their pelts",
"urgency_level": "Critical",
"location": "Indiana",
"deadline": "2025-05-19",
"fund_goal": 15000,
"completed": true
}

returns:
Status: 200 OK
{
"title": "Support the River Otters",
"description": "Highly valued for their pelts",
"urgency_level": "Critical",
"location": "Indiana",
"deadline": "2025-05-19",
"fund_goal": 15000,
"completed": true
}

DELETE Camps- https://ptbw-sta-3.herokuapp.com/api/campaigns/1
returns:
No body returned for response

Status: 204 No Content

Calling Non-Existing:
{
"message": "The campaign with the specified ID does not exist"
}

Save the Animals
PITCH
Key Conservation is helping conservationists receive critical funding and increased global support through an app that provides real-time updates on day-to-day campaigns. We can stop global extinction if we utilize new technology and interact with supporters in ways that they want!

Note: The design link is for visual inspiration if you choose to use it. Most features in the mockup are beyond the scope of your MVP.

MVP

-   Two user types; organizations and supports
-   Ability for a conservationist organization to create a new campaign with a funding goal and deadline.
-   Include title, ability to upload a photo (stretch), location, description, species, urgency level, itemize monetary donations needed and overall funding goal.
-   Can view, edit or delete their own existing campaigns
-   Ability for a supporter to view all posted campaigns, and filter by location, species, and issues.
-   Ability for a supporter to make a donation to a campaign

STRETCH
Ability to include a photo in a campaign description. Email a receipt upon donation. Push notifications when a new campaign is posted or a donation is made.
https://www.keyconservation.org/
AVAILABLE COMPONENTS
