# shilo-trivia

Reposetory content

Project concept:
  This project about trivia game by thems

In this repo there are:
  1. Three services. One for DB, the second one is for Backend and the third one is Frontend.
    *each one of the services independent image/container*
  2. DB and Backend service contains Dockerfile, fastapi-env folder and app folder. 
     Frontend contain Dockerfile  README.md  package-lock.json  package.json  public  and src.
  4. Inside of app folder for both of the services there is main.py file with all the relevant endpoint.
     Inside of src for Frontend service we have all the components.
  6. The backend service and db service communicate overe HTTP Requests and the frontend and the backend as well.

How to run:
  1. need to be defined with docker compose
  2. - Clone project: gh repo clone EASS-HIT-2022/shilo-trivia
     - Go To ..../shilo-trivia
     - Run docker compose build
     - Run docker compose up     

Backend EndPoints:
  1. POST: http://backend:8080/sign-up 
     BODY: {
             "user_name": "string",
             "email": "user@example.com",
             "first_name": "string",
             "middel_name": "string",
             "last_name": "string",
             "password": "string"
            }
  2. POST: http://backend:8080/sign-in 
     BODY: {
             "user_name": "string",
             "password": "string"
            }
  3. POST: http://backend:8080/add-new-question 
     BODY: {
             "theme": "string",
             "question": "string",
             "answer": "string",
             "other_answer": [
                         "string"
                         ]
           }
  4. GET: http://backend:8080/questions?theme=Sports
  5. GET:  http://backend:8080/get-caterories

Frontend Component:
  1. gameComponent.js   
  2. homePageComponent.js   
  3. loginComponent.js   
  4. mainComponent.js   
  5. mainHomeComponent.js   
  6. sginupComponent.js
 * The mainComponent.js and mainHomeComponent.js Describe middleware.

DB:
   sqlalchemy with python and fastapi.
  
