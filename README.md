## Local Installation

To make this application run follow the next steps:
* Clone the repository
* Run npm install from the console
* Configure MongoDB database connection setting the URL on config/database.config.js file
* Run npm start from the console 

## Environment Settings

The application uses an environment variable called TOKEN to compare the value stored there 
with the value sent in the headers x-access-token for each request

## Application APIs

In all the requests should be sent a header called x-access-token with a token value. That 
value will be validated for the app to autehnticate the user that sent the request.

### List of valid API routes:

* POST /users
```
	This endpoint generates a new user. Request body example:
		
		{
			"name":"User2",
			"avatar":"http://www.google.com"
		}
		
	The body contains the user name and the url to the user avatar.
```
* GET /users
```
	This endpoint was not part ot the exercie and was generated just for development propouses. 
	This endpoint list all the users in the database as a response to the request.
```
* POST /article/
```
	This endpoint generates a new article. Request body example:
		
		{
			"tags": [
				"2",
				"56"
			],
			"userId": "<validUserId>",
			"title": "Article title",
			"text": "Content of the article"
		}
		
	The body contains the list of article tags, the user id related to the article, 
	the article title and the article text content.
```
* GET /article/(:tags)*
```
	This endpoint returns a list of articles that contains all the tags sent in the request as 
	part of the url path. As an example, the ruquest localhost:3000/article/2/56 will return 
	all the articles that contain the tag 2 and 56.
```
* PUT /article/:articleId
```
	This endpoint updates an existing article. The id of the article to be updated should be 
	set in the url path after the article world. Request body example:
		
		{
		  "userId": "<UserId>",
		  "title": "New Article title",
		  "text": "New content for the article1",
		  "tags": ["2","56","3"]
		}
		
	The body contains the new list of article tags, the new user id related to the article, 
	the new article title and the new article text content.
	If some of this fields is not present in the request body the field will be not updated.
```
* DELETE /article/:articleId
```
	This endpoint delete an existing article. The id of the article to be deleted should be 
	set in the url path after the article world.
```