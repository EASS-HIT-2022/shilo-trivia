from importlib import import_module
from typing import List, Optional
from pydantic import BaseModel, EmailStr

class BaseQuestion(BaseModel):
    theme: str
    question: str
    answer: str
    other_answer: List[str]

