"use server";

import axios from "axios";

export const getProfile = async (code: string) => {
  try {
    const res = await axios.post(
      "https://api.instagram.com/oauth/access_token",

      {
        client_id: "380484498248881",
        client_secret: "ef9ee33cf46ace3955bf3e60c68f199e",
        grant_type: "authorization_code",
        redirect_uri:
          "https://instagram-profile-test.vercel.app/insta-profile/",
        code: code,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const profile = await axios.get(
      `https://graph.instagram.com/me?fields=id,username&access_token=${res.data.access_token}`
    );
    console.log(res);

    console.log(profile);
    return profile;
  } catch (error) {
    console.log(error);
  }
};
