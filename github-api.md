### Github API Questions

How does the API handle authentication?<br>
There are three ways to authenticate. 

Do I need to authenticate? <br>
Yes or the server will return an error. <br>
What can I do with an unauthenticated request?<br>
You can get request but only 60 times in an hour <br>
How can I authenticate my request? (3 ways)<br>
1. Basic Authentication with username 2. OAuth Token sent in a header 3. OAuth2 Token sent as a parameter. 
How do I ask the API for...
The profile information for a specific user?<br>
Perform a get request on some JSON data using
$.getJson() 
Next Pass two parameters 
1. a URL <br>
2. a function that will be called when the data has been received from get request. Also known as a Callback Function<br>
The repository listing for a specific user?<br>
The recent, public activity for a specific user?<br>

<strong> Is there a limit to the number of requests I can make?</strong><br>
Requests using Basic Authentication you can make up to 5,000 request per hour. For unauthenticated request you can make 60 per hour. 
Is there a way of extending that limit?<br>
Using Postman and sending a reuqest for the API. 
What happens when I hit the limit?<br>
You will receive an error response "API rate limit exceeded for .ip
What if there is a lot of data returned?
How can I ask for more (or less) data from a request?
How do I know that there is more data available?
What are the endpoints for fetching...
the profile data for a user?
the organizations a user belongs to?
the repositories a user has created?
a filtered list of repositories?
a sorted list of repositories?
public events for a user?
When fetching public events for a user...
How many results are returned by default?
What limitations exist on fetching more results?
What is the basic structure of the results?
What fields are included in each result?
What are the data types for each field?
What are some of the different values for the type field?
