import { changeRules, getRules } from "../deps.ts";

export async function deleteRules(bearerToken: string) {
  const rules = await getRules(bearerToken);
  await changeRules(bearerToken, {
    delete: {
      ids: rules.data?.map((rule) => rule.id) ?? [],
    },
  });
}
