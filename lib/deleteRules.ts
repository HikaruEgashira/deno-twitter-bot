import {
  changeRules,
  getRules,
} from "https://kamekyame.github.io/twitter_api_client/api_v2/tweets/filtered_stream.ts";

export async function deleteRules(bearerToken: string) {
  const rules = await getRules(bearerToken);
  await changeRules(bearerToken, {
    delete: {
      ids: rules.data?.map((rule) => rule.id) ?? [],
    },
  });
}
