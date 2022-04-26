from fastapi.testclient import TestClient
from .app.main import app

client = TestClient(app)

def end_to_end_register():
    response = client.post("/sign-up", json= { "user_name": "EladSharabi", 
                                               "email": "elad@walla.com",
                                               "first_name": "Elad", 
                                               "middel_name": "Zro",
                                               "last_name": "Sharabi",
                                               "password": "0504554106"})
    assert response.status_code == 201

    response = client.post("/sign-in", json= { "user_name": "EladSharabi",
                                               "password": "0504554106"})
    assert response.status_code == 200