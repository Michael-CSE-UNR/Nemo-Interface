


from flask import Flask
from flask import render_template

from dotenv import load_dotenv

load_dotenv('./.flaskenv')

app = Flask(__name__)



@app.route('/')
def home():
	vueTestName = '"Hello there" -Obi-Wan Kenobi '
	return render_template('home.html', testName=vueTestName)

if __name__ =='__main__':
	app.run()