import {
  getBearerToken,
  changeRules,
  getRules,
  connectStream,
  statusRetweet,
} from "./deps.ts";
import {
  TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_TOKEN_SECRET,
  TWITTER_API_KEY,
  TWITTER_API_SECRET,
} from "./env.ts";
import { deleteRules } from "./lib/mod.ts";

// token for v2
const bearerToken = await getBearerToken(TWITTER_API_KEY, TWITTER_API_SECRET);

// 検索ルールの設定
// https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/integrate/build-a-rule
const prefList = ["東京", "神奈川", "埼玉", "茨城", "栃木", "群馬", "山梨"];
await deleteRules(bearerToken);
// await changeRules(bearerToken, {
//   add: [{
//     value: "from:UN_NERV",
//   }]
// });
await changeRules(bearerToken, {
  add: prefList.map(pref => ({
    value: `${pref} from:UN_NERV`,
    tag: pref
  })),
});

// ルールの確認
const rules = await getRules(bearerToken);
console.log(rules);

await connectStream(bearerToken, async (tweet) => {
  await statusRetweet(
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
});
