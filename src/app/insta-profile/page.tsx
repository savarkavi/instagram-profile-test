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
          const res = await axios.get(
            `https://graph.instagram.com/me?fields=id,username,bio&access_token=${code}`
          );

          console.log(res);
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
