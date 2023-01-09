from flask import Flask, request, jsonify
from logging.config import dictConfig               # Print to App Logger (Console)
from flask_cors import CORS
from PIL import Image


app = Flask(__name__)
CORS(app)


@app.route("/", methods=['GET', 'POST'])
def process_image():
    form_data = request.get_data()
    app.logger.info(form_data)
    return "Hello World!"


if __name__ == "__main__":
    app.run(debug=True)