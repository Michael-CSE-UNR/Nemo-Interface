from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def homepage():  # put application's code here
    return render_template('startbootstrap-new-age-gh-pages/index.html')


if __name__ == '__main__':
    app.run()
