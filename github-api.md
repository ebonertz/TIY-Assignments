### Github API Questions

<strong>How does the API handle authentication?</strong><br>
There are three ways to authenticate. 

<strong>Do I need to authenticate?</strong> <br>
Yes or the server will return an error.

<strong>What can I do with an unauthenticated request?</strong><br>
You can get request but only 60 times in an hour

<strong>How can I authenticate my request?</strong><br>
1. Basic Authentication with username 2. OAuth Token sent in a header 3. OAuth2 Token sent as a parameter.

<strong>How do I ask the API for...</strong>
<strong>The profile information for a specific user?</strong><br>

Perform a get request on some JSON data using:<br>
$.getJson() 

Next Pass two parameters <br>
1. a URL <br>
2. a function that will be called when the data has been received from get request. Also known as a Callback Function<br>
The repository listing for a specific user?<br>
The recent, public activity for a specific user?<br>

<strong> Is there a limit to the number of requests I can make?</strong><br>
Requests using Basic Authentication you can make up to 5,000 request per hour. 
For unauthenticated request you can make 60 per hour. 

<strong>Is there a way of extending that limit?</strong><br>
Using Postman and sending a reuqest for the API. 

<strong>What happens when I hit the limit?</strong><br>
You will receive an error response "API rate limit exceeded for .ip

<strong>What if there is a lot of data returned?</strong><br>

<strong>How can I ask for more (or less) data from a request?</strong><br>

<strong>How do I know that there is more data available?</strong><br>
<strong>What are the endpoints for fetching...</strong><br>
<strong>the profile data for a user?</strong><br>
<strong>the organizations a user belongs to?</strong><br>
<strong>the repositories a user has created?</strong><br>
<strong>a filtered list of repositories?</strong><br>
<strong>a sorted list of repositories?</strong><br>
<strong>public events for a user?</strong><br>
<strong>When fetching public events for a user...</strong><br>
<strong>How many results are returned by default?</strong><br>
<strong>What limitations exist on fetching more results?</strong><br>
<strong>What is the basic structure of the results?</strong><br>
<strong>What fields are included in each result?</strong><br>
<strong>What are the data types for each field?</strong><br>
<strong>What are some of the different values for the type field?</strong><br>
