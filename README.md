# omikujiApp

# frontendのコード作成手順

```
npm create vite@latest frontend
```

でfrontendディレクトリを作る

```
cd frontend
npm install
```

frontend/src/App.jsxを書き換える

## テストコードを追加
```
npm install --save-dev jest @testing-library/react @testing-library/jest-dom babel-jest jest-environment-jsdom @babel/preset-env @babel/preset-react
npm audit fix
```

# テストコード実行
## backend
```
cd <root directory>
python -m pytest
```
## frontend
```
cd frontend
npm test
```

# 直接コードを起動

## backend

```
python .\backend\app.py
```

## frontend
```
cd frontend
npm run dev
```

# docker-composeで起動
```
docker-compose up -d --build
```

http://localhost:5173/
でUIに飛べます。
