import requests

from app.questions.dto.questionsDto import BaseQuestion
from ..config.dbConfig import *
from .dto import *

async def add_new_question_to_DB(new_question: BaseQuestion):
    url = DB_BASE_URL + 'add-new-question'
    res = requests.post(url=url, json=new_question.__dict__)
    data = res.json()
    return data

async def get_all_questions_by_theme_from_DB(theme: str):
    url = DB_BASE_URL + "questions?theme=" + theme
    res = requests.get(url=url)
    data = res.json()
    return data

async def get_all_caterories_from_db():
    url = DB_BASE_URL + "get-all-caterories"
    print(url)
    res = requests.get(url=url)
    data = res.json()
    return data