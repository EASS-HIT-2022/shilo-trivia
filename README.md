# shilo-trivia

Reposetory content

Project concept:
  This project about trivia game by thems

In this repo there are:
  1. Three services. One for DB the second one is for Backend and the third one is for Frontend.
    *each one of the services independent image/container*
  2. Bouth services DB and Backend contains Dockerfile, fastapi-env folder and app folder. (Python)
  3. The front servis contain: Dockerfile,  README.md,  package-lock.json,  package.json,  public,  and src. (react with javascript)
  4. Inside of app folder for both of the services DB and Backend there is main.py file with all the relevant endpoint
  5. Inside of src folder for Frontend service there is: 
       - App.js file that contain the root component.
       - components folder that contain all the other component.
  6. The backend service and db service communicate overe HTTP Requests and the frontend and the backend as well.

How to run:
  -Requirements:
    1. Docker (I'm using version 20.10.14).
    2. docker compose.
  -Install:
    1. Clone project: gh repo clone EASS-HIT-2022/shilo-trivia.
    2. Go To ..../shilo-trivia (in linux: "cd shilo-trivia").
  -Start & watch: 
    1. Run docker compose build.
    2. Run docker compose up.
    3. Open a browser and navigate to: http://localhost:3000/.

Languages & tools:
  - python with fastapi for backend and DB.
  - sqlalchemy with python for DB.
  - react with javascript.
  - Docker.

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

Frontend Overview:
  -the frontend service base on react with javascript.
  -we have six component:
    1. mainComponent.js - Describes the middleware to switch dynamically between components.
    2. loginComponent.js - Contains user name, password, signin button and signup button.
    3. sginupComponent.js - Contains a list of the requierd data to signup.
    4. mainHomeComponent.js - Describes the submiddleware of the system to switch dynamically between components.
    5. homePageComponent.js - Contains a select options fo game categories and "start play" button.
    6. gameComponent.js - Contains 4 random questions from the selected categories and "Submit" button to get thr result. 

DB:
  sqlalchemy with python and fastapi.
