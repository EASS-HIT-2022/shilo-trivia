import asyncio
from .dto import ExsitsUserCredential, NewUserCredential
from .utils import *
import requests
from ..config.dbConfig import *

async def sginup(new_user: NewUserCredential):
    hashed_password = await get_password_hash(new_user.password)
    new_user.password = hashed_password
    url = DB_BASE_URL + 'create-user'
    res = requests.post(url=url, json=new_user.__dict__)
    data = res.json()
    return data

async def sginin(new_user: ExsitsUserCredential):
    url = DB_BASE_URL + f'get-user/{new_user.user_name}'
    res = requests.get(url=url)
    user = res.json()
    if not user:
        return { 'message': f'User Name: {new_user.user_name} Not Found' }
    if not await verify_password(new_user.password, user['password']):
        return { 'message': 'Invalid Username Or Password' }
    return user