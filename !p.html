承知いたしました。HTML、JavaScript、Python を使用して URL をサーバーに保存し、トークンを生成して短縮 URL を生成する手順とコード例を示します。 
1. サーバー側の Python コード (Flask フレームワークを使用) 

from flask import Flask, request, jsonify, redirect 
import random 
import string 
app = Flask(<strong>name</strong>) 
<h1>短縮 URL の保存用辞書</h1> 
url_map = {} 
<h1>トークン生成関数</h1> 
def generate_token(length=6): 
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length)) 
@app.route('/shorten', methods=['POST']) 
def shorten_url(): 
    url = request.form.get('url') 
    if url: 
        token = generate_token() 
        url_map[token] = url 
        return jsonify({'token': token}) 
    else: 
        return jsonify({'error': 'URL is required'}), 400 
@app.route('/<token>') 
def redirect_url(token): 
    if token in url_map: 
        return redirect(url_map[token], code=302) 
    else: 
        return 'URL not found', 404 
if <strong>name</strong> == '<strong>main</strong>': 
    app.run(debug=True) 
 
python 
2. HTML コード 

<!DOCTYPE html> 
<html> 
<head> 
  <title>URL Shortener</title> 
</head> 
<body> 
  <div id="container"> 
    <h1>URL Shortener</h1> 
    <input type="text" id="originalUrl" placeholder="Enter URL"> 
    <button onclick="shortenUrl()">Shorten</button> 
    <div id="shortenedUrl"></div> 
  </div> 
 
<script> 
    function shortenUrl() { 
      const originalUrl = document.getElementById('originalUrl').value; 
      const shortenedUrlDiv = document.getElementById('shortenedUrl'); 
 
      fetch('/shorten', { 
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded' 
        }, 
        body: `url=${originalUrl}` 
      }) 
      .then(response => response.json()) 
      .then(data => { 
        if (data.token) { 
          shortenedUrlDiv.textContent = `https://i-i.f5.si/${data.token}`; 
        } else { 
          shortenedUrlDiv.textContent = 'Error: ' + data.error; 
        } 
      }) 
      .catch(error => { 
        console.error('Error:', error); 
        shortenedUrlDiv.textContent = 'An error occurred.'; 
      }); 
    } 
</script> 
</body> 
</html> 
 html 
3. JavaScript コード (上記 HTML に含まれています) 

function shortenUrl() { 
  const originalUrl = document.getElementById('originalUrl').value; 
  const shortenedUrlDiv = document.getElementById('shortenedUrl'); 
fetch('/shorten', { 
    method: 'POST', 
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded' 
    }, 
    body: <code>url=${originalUrl}</code> 
  }) 
  .then(response =&gt; response.json()) 
  .then(data =&gt; { 
    if (data.token) { 
      shortenedUrlDiv.textContent = <code>https://i-i.f5.si/${data.token}</code>; 
    } else { 
      shortenedUrlDiv.textContent = 'Error: ' + data.error; 
    } 
  }) 
  .catch(error =&gt; { 
    console.error('Error:', error); 
    shortenedUrlDiv.textContent = 'An error occurred.'; 
  }); 
} 
 
javascript 
手順 
	1.	 
	2.	 
	3.	Python サーバーのセットアップ: 
	•	 
	•	Python をインストールします。
	•	 
	•	Flask フレームワークをインストールします (pip install Flask ).
	•	 
	•	上記の Python コードを app.py  などのファイルに保存します。
	•	 
	•	ターミナルで flask run  を実行してサーバーを起動します。
	•	 
	4.	 
	5.	 
	6.	 
	7.	HTML と JavaScript ファイルの作成: 
	•	 
	•	上記の HTML と JavaScript コードを index.html  などのファイルに保存します。
	•	 
	8.	 
	9.	 
	10.	 
	11.	サーバーへのアクセス: 
	•	 
	•	Web ブラウザで http://127.0.0.1:5000/  にアクセスします（サーバーが実行されている場合は、このアドレスでアクセス可能になります）。
	•	 
	12.	 
	13.	 
	14.	 
	15.	短縮 URL の生成: 
	•	 
	•	入力欄に URL を入力して「Shorten」ボタンをクリックします。
	•	 
	•	短縮 URL が https://i-i.f5.si/  の後にトークンが追加された形で表示されます。
	•	 
	16.	 
	17.	 
	18.	 
	19.	短縮 URL の共有: 
	•	 
	•	この短縮 URL をコピーして、他のユーザーに共有できます。
	•	 
	20.	 
	21.	 
	22.	 
	23.	短縮 URL のリダイレクト: 
	•	 
	•	短縮 URL にアクセスすると、サーバーは保存されている元の URL にリダイレクトします。
	•	 
	24.	 
	25.	 
 
説明 
	•	 
	•	Python サーバー:
	•	 
	•	generate_token()  関数はランダムなトークンを生成します。
	•	 
	•	/shorten  エンドポイントは、POST リクエストを受け取って URL を保存し、トークンを生成して返します。
	•	 
	•	/token  エンドポイントは、トークンを受け取って元の URL にリダイレクトします。
	•	 
	•	 
	•	 
	•	HTML:
	•	 
	•	HTML ファイルには、URL 入力欄、短縮ボタン、短縮 URL を表示する領域が含まれています。
	•	 
	•	 
	•	 
	•	JavaScript:
	•	 
	•	shortenUrl()  関数は、サーバーに POST リクエストを送信して URL を短縮し、短縮 URL を表示します。
	•	 
	•	 
	•	 
 
注意: 
	•	 
	•	この例では、https://i-i.f5.si/  は短縮 URL のベース URL です。必要に応じて変更してください。
	•	 
	•	トークンの長さは generate_token()  関数の length  パラメーターで変更できます。
	•	 
	•	セキュリティ対策として、URL をデータベースに保存し、トークンの生成により複雑なアルゴリズムを使用することを検討してください。
	•	 
	•	本番環境で使用する場合は、Webサーバー (例: Nginx、Apache) を使用して Python サーバーをデプロイする必要があります。
