import { getBearerToken } from "https://kamekyame.github.io/twitter_api_client/auth/oauth2.ts";
import {
  changeRules,
  connectStream,
  getRules,
} from "https://kamekyame.github.io/twitter_api_client/api_v2/tweets/filtered_stream.ts";
import { statusRetweet } from "https://kamekyame.github.io/twitter_api_client/api_v1/tweets/retweet.ts";

import {
  TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_TOKEN_SECRET,
  TWITTER_API_KEY,
  TWITTER_API_SECRET,
} from "./env.ts";
import { deleteRules } from "./lib/deleteRules.ts";

const bearerToken = await getBearerToken(TWITTER_API_KEY, TWITTER_API_SECRET);

// 検索ルールの設定
await deleteRules(bearerToken);
await changeRules(bearerToken, {
  add: [
    {
      value: "from:UN_NERV",
    },
  ],
});

// ルールの確認
const rules = await getRules(bearerToken);
console.log(rules);

await connectStream(bearerToken, async (tweet) => {
  console.log(`tweet: ${JSON.stringify(tweet)}`);
  const res = await statusRetweet(
    {
      consumerKey: TWITTER_API_KEY,
      consumerSecret: TWITTER_API_SECRET,
      token: TWITTER_ACCESS_TOKEN,
      tokenSecret: TWITTER_ACCESS_TOKEN_SECRET,
    },
    tweet.data.id,
    {
      trim_user: true,
    }
  );
  console.log(`reteweet: ${JSON.stringify(res)}`);
});
