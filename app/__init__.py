import os
from flask import Flask
from flask import request, g
from flask.ext.babel import Babel


from config import config

basedir = os.path.abspath(os.path.join('..', os.path.dirname(__file__)))

babel = Babel()


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    register_extensions(app)
    register_blueprints(app)
    configure_hook(app)

    return app


def configure_hook(app):
    @babel.localeselector
    def get_locale():
        user = getattr(g, 'user', None)
        if user is not None:
            return user.locale

        loc = request.accept_languages.best_match(['ru', 'ru'])
        return loc

    @babel.timezoneselector
    def get_timezone():
        user = getattr(g, 'user', None)
        if user is not None:
            return user.timezone

    @app.before_request
    def before_request():
        g.locale = get_locale()


def register_extensions(app):
    babel.init_app(app)


def register_blueprints(app):
    from .api.v1 import api_bp
    app.register_blueprint(api_bp)
