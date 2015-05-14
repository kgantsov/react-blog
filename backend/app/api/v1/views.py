import math

from flask import abort
from flask import request

from ..decorators import json

from . import api_bp


POSTS = {
    1: {
        'id': 1,
        'title': 'Post 1',
        'description': 'Description 1',
        'author': 'Author 1',
    },
    2: {
        'id': 2,
        'title': 'Post 2',
        'description': 'Description 2',
        'author': 'Author 2',
    },
    3: {
        'id': 3,
        'title': 'Post 3',
        'description': 'Description 3',
        'author': 'Author 3',
    },
    4: {
        'id': 4,
        'title': 'Post 4',
        'description': 'Description 4',
        'author': 'Author 4',
    },
    5: {
        'id': 5,
        'title': 'Post 5',
        'description': 'Description 5',
        'author': 'Author 5',
    },
    6: {
        'id': 6,
        'title': 'Post 6',
        'description': 'Description 6',
        'author': 'Author 6',
    },
    7: {
        'id': 7,
        'title': 'Post 7',
        'description': 'Description 7',
        'author': 'Author 7',
    },
    8: {
        'id': 8,
        'title': 'Post 8',
        'description': 'Description 8',
        'author': 'Author 8',
    },
    9: {
        'id': 9,
        'title': 'Post 9',
        'description': 'Description 9',
        'author': 'Author 9',
    },
    10: {
        'id': 10,
        'title': 'Post 10',
        'description': 'Description 10',
        'author': 'Author 10',
    },
    11: {
        'id': 11,
        'title': 'Post 11',
        'description': 'Description 11',
        'author': 'Author 11',
    },
    12: {
        'id': 12,
        'title': 'Post 12',
        'description': 'Description 12',
        'author': 'Author 12',
    },
}



@api_bp.route('/post/', methods=['GET'])
@json
def get_posts():
    page = int(request.args.get('page', 1))
    per_page = int(request.args.get('per_page', 5))

    offset = 0 if page == 1 else page * per_page - per_page

    posts = list(POSTS.values())[offset:offset + per_page]

    total_pages = int(math.ceil(len(POSTS) / per_page))

    meta = {
        'page': page,
        'total_pages': total_pages,
        'per_page': per_page,
    }

    return {'posts': posts, 'meta': meta}, 200, {'Access-Control-Allow-Origin': '*'}


@api_bp.route('/post/<int:post_id>/', methods=['GET'])
@json
def get_post(post_id):

    try:
        post = POSTS[post_id]
    except IndexError:
        abort(404)

    return {'post': post}, 200, {'Access-Control-Allow-Origin': '*'}
