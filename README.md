# https--api-demo-shilo

Reposetory content

Project concept:
  This project about trivia game by thems

In this repo there are:
  1. Two services. One for DB and the second one is for Backend.
    *each one of the services independent image/container*
  2. Each service contains Dockerfile, fastapi-env folder and app folder
  3. Inside of app folder for both of the services there is main.py file with all the relevant endpoint
  4. The backend service and db service communicate overe HTTP Requests

How to run:
  1. need to be defined with docker compose
  2. - Clone project: gh repo clone EASS-HIT-2022/https--api-demo-shilo
     - Go To ..../https--api-demo-shilo
     - Run docker compose build
     - Run docker compose up     
