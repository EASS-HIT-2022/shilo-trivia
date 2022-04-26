from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQL_ALCHEMY_DB_PATH = 'sqlite:///./database.db'

Engine = create_engine(SQL_ALCHEMY_DB_PATH, connect_args={"check_same_thread": False})

SessionLocal = sessionmaker(bind=Engine, autocommit=False, autoflush=False)

Base = declarative_base()