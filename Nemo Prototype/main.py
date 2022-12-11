


from flask import Flask
from flask import render_template

from dotenv import load_dotenv

load_dotenv('./.flaskenv')

app = Flask(__name__)



@app.route('/')
def home():
	vueTestName = '"Hello there" -Obi-Wan Kenobi '
	return render_template('home.html', testName=vueTestName)

@app.route('/HowTo')
def howTo():
	return render_template('howTo.html')

@app.route('/Contribute')
def contribute():
	return render_template('contribute.html')

if __name__ =='__main__':
	app.run()