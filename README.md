# tojinbo

- [iwapp(開発中)](https://iwapp.code4fukui.org/)

## memorize sever

```protocol
岩データの保存
    /api/save
    param:岩データ
岩データの閲覧
    検索キーワードq
    新着10latest
    おすすめ（閲覧数）famous
岩データとは
    東尋坊の岩の写真image
    名前name
```

## サーバーをローカルで動かす

```sh
deno run -A server.js
```

## サーバー接続

### 初回

#### 公開鍵、秘密鍵をまだ生成していない場合は生成する(Macの場合)

```sh
mkdir ~/.ssh
ssh-keygen -t ed25519
cat ~/.ssh/id_ed25519.pub
ls ~/.ssh/id_ed25519
```
(公開鍵: ~/.ssh/id_ed25519.pub、秘密鍵: ~/.ssh/id_ed25519)

#### サーバーにて設定

```sh
cd /home/iwapp
mkdir ~/.ssh
chmod 700 ~/.ssh
touch ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
# 公開鍵を書き込む
echo "ssh-ed25519 ?? ??@??" >> ~/.ssh/authorized_keys
```

### ログイン

```sh
ssh -i ~/.ssh/id_ed25519 iwapp@iwapp.code4fukui.org
cd tojinbo
```

### サーバープログラム更新（GitHubから取得する）

```sh
git pull
```

### プロセス確認

```sh
ps -fu iwapp
```
```
UID          PID    PPID  C STIME TTY          TIME CMD
iwapp     668120       1  0 Jun17 ?        00:00:00 deno run -A server.js 8009
```

プロセス停止方法
CMDが deno run -A server.js 8009 となっている、行のPID 668120 を使って
```sh
kill 668120
```
で、停止する

```sh
ps -fu iwapp
```
で確認できる

### 自動起動方法 server.js を書き換えると自動的に再起動する

```sh
nohup deno run -A --watch server.js 8009 &
```

### 通常起動

```sh
nohup deno run -A server.js 8009 &
```
