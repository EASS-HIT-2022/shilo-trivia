from importlib import import_module
from typing import List, Optional
from pydantic import BaseModel, EmailStr

class BaseUser(BaseModel):
    user_name: str

class User(BaseUser):
    email: EmailStr
    first_name: str
    middel_name: Optional[str] = None
    last_name: str

class NewUserCredential(User):
    password: str

class ExsitsUserCredential(BaseUser):
    password: str