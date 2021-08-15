export const TWITTER_ACCESS_TOKEN = Deno.env.get("TWITTER_ACCESS_TOKEN") ?? "";
export const TWITTER_ACCESS_TOKEN_SECRET =
  Deno.env.get("TWITTER_ACCESS_TOKEN_SECRET") ?? "";
export const TWITTER_API_KEY = Deno.env.get("TWITTER_API_KEY") ?? "";
export const TWITTER_API_SECRET = Deno.env.get("TWITTER_API_SECRET") ?? "";

if (
  TWITTER_API_KEY === "" &&
  TWITTER_API_SECRET === "" &&
  TWITTER_ACCESS_TOKEN === "" &&
  TWITTER_ACCESS_TOKEN_SECRET === ""
) {
  throw Error(
    "Please set the environment variables TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN and TWITTER_ACCESS_TOKEN_SECRET"
  );
}
