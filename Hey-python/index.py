from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, python!</p>"
app.run(host='0.0.0.0', port=3000)
