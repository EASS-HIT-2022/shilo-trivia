# from fastapi import FastAPI
import fastapi
import uvicorn
import asyncio

from app.auth.authService import sginup, sginin
from app.questions.dto.questionsDto import BaseQuestion
from app.questions.questionsService import add_new_question_to_DB, get_all_caterories_from_db, get_all_questions_by_theme_from_DB
from .auth import *
from .questions import *


app = fastapi.FastAPI()

@app.post('/sign-up', status_code=201)
async def create_user(new_user: NewUserCredential):
    return await sginup(new_user=new_user)

@app.post('/sign-in')
async def get_user(new_user: ExsitsUserCredential):
    res = await sginin(new_user=new_user)
    return res

@app.post('/add-new-question')
async def addNewQuestion(new_question: BaseQuestion):
    return await add_new_question_to_DB(new_question)

@app.get('/questions')
async def get_questions_by_theme(theme: str):
    return await get_all_questions_by_theme_from_DB(theme)

@app.get('/get-caterories')
async def get_all_caterories():
    return await get_all_caterories_from_db()

@app.get('/')
def hello_world():
    return "hello world"


if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=8080)