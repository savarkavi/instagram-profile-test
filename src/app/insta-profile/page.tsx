"use client";

import axios from "axios";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const InstaProfile = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  const code = searchParams.get("code");

  useEffect(() => {
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
  }, [code]);

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen"></div>
  );
};

export default InstaProfile;
