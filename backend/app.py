from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)  # allow cross-origin requests

fortunes = [
    "大吉！今日は最高の一日になるわよ！",
    "中吉…まぁまぁね。油断しないでよ！",
    "小吉…ちょっとだけいいことあるかも？",
    "凶…アンタ、今日は大人しくしてなさい！"
]

@app.route('/api/fortune')
def get_fortune():
    result = random.choice(fortunes)
    return jsonify({'fortune': result})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)