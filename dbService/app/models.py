from sqlalchemy import Column, ForeignKey, Integer, PrimaryKeyConstraint, String, Boolean
from .config.dbConfig import Base


class User(Base):
    
    __tablename__ = 'TBL_Users'

    user_ID = Column(Integer, primary_key=True, index=True)
    user_name = Column(String)
    email = Column(String)
    first_name = Column(String)
    middel_name = Column(String)
    last_name = Column(String)
    password = Column(String)

class Questions(Base):

    __tablename__ = 'TBL_Questions'

    question_ID = Column(Integer, primary_key=True, index=True)
    question = Column(String)
    theme = Column(String)

class QuestionsAnswers(Base):

    __tablename__ = 'TBL_Questions_Answers'

    question_ID = Column(Integer, ForeignKey('TBL_Users.user_ID'), nullable=False)
    answer = Column(String)
    isCorrect = Column(Boolean)
    __table_args__ = (
        PrimaryKeyConstraint(question_ID, answer),
        {},
    )
