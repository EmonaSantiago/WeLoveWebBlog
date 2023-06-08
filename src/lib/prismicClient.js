import * as prismic from "@prismicio/client";

const repositoryName = "we-love-web-wa";

const createClient = (params) => {
  const client = prismic.createClient(repositoryName, params);

  return client;
};

export default createClient;
