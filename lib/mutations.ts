import fetcher from "./fetcher"
export const auth = (mode: "signin" | "signup", body: { string; password }) => {
  return fetcher(`/${mode}`, body)
}
