import axios from "axios";
import qs from "querystring";

const client = axios.create({
  baseURL: "https://api.vercel.com",
});

const createWebhook = async (access_token) => {
  const url = "/v1/integrations/webhooks";
  const payload = {
    name: "Sentry",
    events: ["deployment"],
    url: "https://scefali.ngrok.io/api/vercel/webhook",
  };
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };
  console.log('paylod', payload)
  const { data } = await client.post(url, payload, { headers });
  console.log("createWebhook", data);
  return data
};

const getSecret = async accessToken => {
  const url = "/v3/now/secrets";
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const { data } = await client.get(url, { headers });
  console.log("getSecret", data);
  return data;
}

const fn = async (req, res) => {
  const url = "/v2/oauth/access_token";
  const { code, configurationId } = req.body;

  const redirectUri = "https://scefali.ngrok.io/vercel/redirect";

  const payload = {
    client_id: process.env.VERCEL_CLIENT_ID,
    client_secret: process.env.VERCEL_CLIENT_SECRET,
    code,
    redirect_uri: redirectUri,
  };
  const { data } = await client.post(url, qs.stringify(payload), {
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
  console.log("auth data", data);
  const { access_token } = data;
  // await createWebhook(access_token);
  await getSecret(access_token);
  return res.send(data);
};

export default fn;
