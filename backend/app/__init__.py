import os
from flask import Flask
from flask import request


from config import config

basedir = os.path.abspath(os.path.join('..', os.path.dirname(__file__)))


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)
    register_blueprints(app)

    return app


def register_blueprints(app):
    from .api.v1 import api_bp
    app.register_blueprint(api_bp)
