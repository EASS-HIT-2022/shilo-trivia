FROM python:3.8

RUN pip3 install fastapi
RUN pip3 install uvicorn
RUN pip3 install pydantic
RUN pip3 install email-validator

COPY . .

RUN pip3 install -r app/requirements.txt

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
