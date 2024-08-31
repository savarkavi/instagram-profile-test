"use client";

import axios from "axios";
import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getProfile } from "../../../actions";

const InstaProfile = () => {
  const searchParams = useSearchParams();

  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      const getRes = async () => {
        const res = await getProfile(code);

        console.log(res);
      };
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
