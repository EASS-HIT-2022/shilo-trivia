# from fastapi import FastAPI
import fastapi
import uvicorn
import asyncio

from app.schemas.questionSchemas import BaseQuestion
from . import models
from .config.dbConfig import Engine, SessionLocal
from sqlalchemy.orm import Session
from .schemas.userSchemas import *


app = fastapi.FastAPI()

models.Base.metadata.create_all(bind=Engine)


async def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post('/create-user', status_code=201)
async def create_user(request: NewUser, db: Session = fastapi.Depends(get_db)):
    new_user = models.User(user_name=request.user_name, 
                           email=request.email, 
                           first_name=request.first_name, 
                           middel_name=request.middel_name, 
                           last_name=request.last_name, 
                           password=request.password)
    user_name_validation = db.query(models.User).filter(models.User.user_name == new_user.user_name).first()
    if(user_name_validation):
        return {'message': 'Username Already Exists'}
    user_email_validation = db.query(models.User).filter(models.User.email == new_user.email).first()
    if(user_email_validation):
        return {'message': 'User Email Already Exists'}
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {'message': 'New User Was Created', 'user_details': new_user }

@app.post('/add-new-question', status_code=201)
async def addNewQuestion(request: BaseQuestion, db: Session = fastapi.Depends(get_db)):
    new_question = models.Questions(question=request.question,
                                    theme=request.theme)
    db.add(new_question)
    db.commit()
    db.refresh(new_question)
    print(new_question.question_ID)
    new_question_answers = models.QuestionsAnswers(question_ID=new_question.question_ID,
                                                   answer=request.answer,
                                                   isCorrect=True)
    db.add(new_question_answers)
    db.commit()
    db.refresh(new_question_answers)
    for answer in request.other_answer:
        new_question_answers = models.QuestionsAnswers(question_ID=new_question.question_ID,
                                                       answer=answer,
                                                       isCorrect=False)
        db.add(new_question_answers)
        db.commit()
        db.refresh(new_question_answers)
    return {'message': 'New Question Were Added'}


@app.get('/get-user/{user_name}')
async def get_request(user_name, db: Session = fastapi.Depends(get_db)):
    user = db.query(models.User).filter(models.User.user_name == user_name).first()
    return user

@app.get('/questions')
async def get_question(theme: str, db: Session = fastapi.Depends(get_db)):
    all_questions_info = []
    all_questions = db.query(models.Questions).filter(models.Questions.theme == theme).all()
    for question in all_questions:
        all_answers = db.query(models.QuestionsAnswers).filter(models.QuestionsAnswers.question_ID == question.question_ID).all()
        all_questions_info.append({ 'question_info': question, 'all_answers': all_answers})
    return {'result': all_questions_info}

@app.get('/get-all-caterories')
async def get_all_caterories(db: Session = fastapi.Depends(get_db)):
    get_caterories = db.query(models.Questions.theme).distinct().all()
    return {'result': get_caterories}



if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=8000)