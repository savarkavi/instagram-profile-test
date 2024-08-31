"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";

export default function Home() {
  return (
    <Suspense>
      <div className="flex flex-col justify-center items-center h-screen gap-10">
        <h1 className="text-4xl font-bold">Roast your Instagram</h1>
        <Link
          href="https://api.instagram.com/oauth/authorize?client_id=380484498248881&redirect_uri=https://instagram-profile-test.vercel.app/insta-profile/&scope={scope}&response_type=code"
          className="py-2 px-8 rounded-lg bg-black text-white"
        >
          Start
        </Link>
      </div>
    </Suspense>
  );
}
