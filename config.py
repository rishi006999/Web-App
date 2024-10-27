import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    SQLALCHEMY_DATABASE_URI = 'mysql://root:rishi006@localhost/webapp_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
