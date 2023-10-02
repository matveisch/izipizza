'use client'

import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function LinkMagnet() {
  const router = useRouter();

  useEffect(() => {
    router.push('https://www.instagram.com/reel/CxdM3c2IeWT/?igshid=NzZhOTFlYzFmZQ==');
  }, []);

  return <div></div>
}
