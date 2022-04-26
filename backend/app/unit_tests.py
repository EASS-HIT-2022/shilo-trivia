from fastapi.testclient import TestClient
from .main import app

client = TestClient(app)

def test_sign_up():
    response = client.post("/sign-up", json= { "user_name": "YossiSh", 
                                               "email": "yossi@walla.com",
                                               "first_name": "Yossi", 
                                               "middel_name": "Idan",
                                               "last_name": "Shaul",
                                               "password": "3103010"})
    assert response.status_code == 201

def test_sign_in_successfully():
    response = client.post("/sign-in", json= { "user_name": "YossiSh",
                                               "password": "3103010"})
    assert response.status_code == 200

def test_sign_in_unsuccessfully():
    response = client.post("/sign-in", json= { "user_name": "Yossi",
                                               "password": "3103010"})
    assert response.status_code == 200
    assert response.json() == { "message": "User Name: Yossi Not Found" }

def test_get_question():
    response = client.get("/questions")
    assert response.status_code == 200

def test_get_question_caterories():
    response = client.get("/get-caterories")
    assert response.status_code == 200