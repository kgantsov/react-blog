import os
basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    DEBUG = True
    SERVER_NAME = '0.0.0.0:8000'

    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dafa7f3f2ffaf73872a5g05gfb2afff1'

    BABEL_DEFAULT_LOCALE = 'ru'

    BASE_DIR = basedir

    @staticmethod
    def init_app(app):
        pass


class DevelopmentConfig(Config):
    DEBUG = True


class ProductionConfig(Config):

    SERVER_NAME = 'kpopdigest.com'

config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}
