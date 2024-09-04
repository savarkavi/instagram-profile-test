"use server";

import axios from "axios";
import querystring from "querystring";

export const getProfile = async (code: string) => {
  try {
    const res = await axios.post(
      "https://api.instagram.com/oauth/access_token",
      querystring.stringify({
        client_id: "1792949961232551",
        client_secret: "0a6e0a22fb03e233c474a442abded2d9",
        grant_type: "authorization_code",
        redirect_uri:
          "https://instagram-profile-test.vercel.app/insta-profile/",
        code: code,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const profile = await axios.get(
      `https://graph.instagram.com/me?fields=id,username&access_token=${res.data.access_token}`
    );

    return profile.data;
  } catch (error) {
    console.log(error);
  }
};
