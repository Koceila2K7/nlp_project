from flask import Flask, request
import json
from flask_cors import CORS
from server_classify_functions import get_class

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/')
def hello_world():
    return 'NLP project'


@app.route("/api/classify", methods=['POST'])
def classify():
    data = request.get_json()

    if 'modelType' in data and 'text' in data:
        return json.dumps(
            {"result": get_class(data['text'], data['modelType'])})

    return json.dumps({"error": "merci dindiquer tous les paramètres"})


@app.after_request
def after_request(response):
    response.headers['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers.add('Access-Control-Allow-Headers',
                         'Content-Type,Authorization')
    response.headers['preflightContinue'] = 'false'

    return response


if __name__ == '__main__':

    app.run(host='0.0.0.0',  debug=True, port=5002)
