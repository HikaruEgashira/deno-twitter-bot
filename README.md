# Twitter Bot for `deno deploy`

Twitter API を操作するサンプル。
特定のキーワードをリアルタイムで監視して、自動リツイートします。

A sample that manipulates the Twitter API.
It monitors specific keywords in real time and automatically retweets them.

## usage

1. create `.env`. Scheme is `.env.sample`.`.env`を作成します。内容は`.env.sample`を参考にしてください
2. 以下を実行 run below ↓

```sh
deno install --allow-read --allow-write --allow-env --allow-net --allow-run --no-check --unstable -r -f https://deno.land/x/deploy/deployctl.ts # install deployctl
sh ./run.sh # deployctl run --no-check --watch --env=.env main.ts
```
