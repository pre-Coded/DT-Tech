DT TECH API

The DT TECH API allows you to manage user information within the system.

BASE URL 

http://api.example.com/api/v3/api

RESPONSE FORMAT = { STATUS , MESSAGE, DATA }

ENDPOINTS 

1. GET Event DETALIS

a. By EventId 

URL: /events
Method: GET
Path Query : EventId

Response:
* Success
{ 200, "EventPayload fetched Successfully" 
    name,
    files,
    tagline,
    schedule,
    moderator,
    category,
    sub_category,
    rigor_rank,
}

* EventId not Found
{
    202, 
    "Unable to fetch",
    null
}

* Error
{
    errors : e
}

b. By type, limit and pageLimit

URL : /events
Method : GET
Path Query : type , limit and pageLimit

Response
a. Success
{ 200 , "EventPayload fetched Successfully",
    name,
    files,
    tagline,
    schedule,
    moderator,
    category,
    sub_category,
    rigor_rank,
} , x (as much limit set in query)

* EventId not Found
{
    202, 
    "Unable to fetch",
    null
}

* Error
{
    errors : e
}

2. Create Event

URL: /events
Method: POST
Request Body : 
{
    name,
    files,
    tagline,
    schedule,
    moderator,
    category,
    sub_category,
    rigor_rank,
}

Response :
a. Success
{
    200, 
    "Event Created Successfully",
    id
}

b. Error 
{
    error : e
}

3. Update Event

URL : /events
METHOD : PUT
PATH PARAMETERS : EventId

Request Body :
{
    name,
    files,
    tagline,
    schedule,
    moderator,
    category,
    sub_category,
    rigor_rank,
}

Response Body :
* Success 
{
    200,
    "EventPayload updated Successfully",
    null
}

* EventId not Found
{
    202, 
    "Unable to Update"
    null
}

* Error
{
    error : e
}

4. Delete events

URL : /events
METHOD : DELETE
PATH PARAMETERS : EventId

Response 
* Success
{
    200, 
    "Event Deleted Successfully"
    null
}

* EventId not Found
{
    202,
    "Unable to delete"
}

* Error
{
    error : e
}

ERROR HANDLING

STATUSCODE : 200 
{
    Success
}

STATUSCODE : 202
{
    UNPROCESSABLE
}