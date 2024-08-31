"use client";

import axios from "axios";
import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const InstaProfile = () => {
  const searchParams = useSearchParams();

  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      const getProfile = async () => {
        try {
          const res =
            await axios.post(` https://api.instagram.com/oauth/access_token \
  -F client_id=380484498248881 \
  -F client_secret=ef9ee33cf46ace3955bf3e60c68f199e \
  -F grant_type=authorization_code \
  -F redirect_uri=https://instagram-profile-test.vercel.app/insta-profile/ \
  -F code=${code}`);

          const profile = await axios.get(
            `https://graph.instagram.com/me?fields=id,username&access_token=${res.data.access_token}`
          );

          console.log(profile);
        } catch (error) {
          console.log(error);
        }
      };

      getProfile();
    }
  }, [code]);

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen"></div>
  );
};

const SuspenseWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InstaProfile />
    </Suspense>
  );
};

export default SuspenseWrapper;
