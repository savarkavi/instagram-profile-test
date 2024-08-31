"use client";

import axios from "axios";
import React from "react";

const InstaProfile = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        "https://graph.instagram.com/me?fields=id,username,bio&access_token=IGQWROakdjV2NVakR6dEtLUlFaVTJ4ZAWREM253VmNxb3lrLW8tcHFlV3h4OGVvM3lEczJVMnpqS0FTMVgtdjZAicWRZAa3hhMUxTZAzhjMHMzdkJFTnNiTnI2ZADV1NUlWVjVNRnRaMGtBOE9xYjdGbVltYk96MkNmLXF2MFIzRDJrQXRQVncZD"
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen">
      <h1 className="text-center text-4xl font-bold">
        Enter instagram username
      </h1>
      <form onSubmit={(e) => onSubmit}>
        <input className="border border-black outline-none rounded-lg p-3" />
      </form>
    </div>
  );
};

export default InstaProfile;
