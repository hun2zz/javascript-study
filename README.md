### ajax 실습시 JSON Server 설치(가상 Rest Api)

### ajs 실습 웹 사이트

- "start": "json-server --watch db.json --port 5000"

- vscode 상단부 -> 터미널 -> 새 터미널

```shell script
$ mkdir json-virtual-server
$ cd json-virtual-server
$ npm init -y
$ npm install json-server -D
```

- package.json에 추가

```json
"scripts": {
    "start": "json-server --watch db.json --port 5000"
  },
```

- json-server-exam폴더로 가서
- `$ npm start`로 서버실행

—
