import pytest
from backend.app import app

def test_get_fortune():
    # Flaskのテストクライアントを使う
    client = app.test_client()
    response = client.get('/api/fortune')

    # ステータスコードが200であること
    assert response.status_code == 200

    # JSONレスポンスに 'fortune' キーがあること
    data = response.get_json()
    assert 'fortune' in data

    # fortuneの内容が期待されるリストの中にあること
    expected_fortunes = [
        "大吉！今日は最高の一日になるわよ！",
        "中吉…まぁまぁね。油断しないでよ！",
        "小吉…ちょっとだけいいことあるかも？",
        "凶…アンタ、今日は大人しくしてなさい！"
    ]
    assert data['fortune'] in expected_fortunes