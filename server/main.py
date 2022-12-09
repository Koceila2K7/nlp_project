from flask import Flask
import json


app = Flask(__name__)


@app.route("/classify", methods=['GET'])
def getFruit():
    return json.dumps({"result": "flask api"})


if __name__ == '__main__':
    app.run(debug=True)
    print("App started .... ")
