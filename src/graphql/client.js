import { Client, cacheExchange, fetchExchange } from "urql";

const client = new Client({
  url: "https://bassegoulaine.stepzen.net/api/luminous-moose/__graphql",
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {
      Authorization:
        "ApiKey bassegoulaine::stepzen.net+1000::bb639339ce03937b0504ae8d29bb4465f85d22a219920965029510599b7b6d4e",
    },
  },
});

export default client;
