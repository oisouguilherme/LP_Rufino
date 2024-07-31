"use client";
import { useEffect, useState } from "react";

export function TitleSection({ title }) {
  return (
    <span className="uppercase flex gap-2 items-center bg-gradient-to-r from-orange-500/20 to-transparent w-fit px-2 py-1 text-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="text-orange-500"
        viewBox="0 0 16 16"
      >
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg>
      {title}
    </span>
  );
}

export function JoinButton({ text }) {
  return (
    <a
      href={"#"}
      target="_blank"
      className="bg-orange-500 hover:bg-orange-600 duration-300 max-w-64 w-full text-center py-2 flex justify-center items-center gap-2 uppercase"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
      </svg>
      {text}
    </a>
  );
}

export function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex gap-5 text-center text-2xl sm:text-4xl font-medium bg-blue-900/50 p-5 w-fit">
      <div className="flex flex-col">
        <span>{timeLeft.days}</span>
        <span className="text-xs font-normal uppercase">Days</span>
      </div>
      <span className="text-orange-500">:</span>
      <div className="flex flex-col">
        <span>{timeLeft.hours}</span>
        <span className="text-xs font-normal uppercase">Hours</span>
      </div>
      <span className="text-orange-500">:</span>
      <div className="flex flex-col">
        <span>{timeLeft.minutes}</span>
        <span className="text-xs font-normal uppercase">Minutes</span>
      </div>
      <span className="text-orange-500">:</span>
      <div className="flex flex-col">
        <span>{timeLeft.seconds}</span>
        <span className="text-xs font-normal uppercase">Seconds</span>
      </div>
    </div>
  );
}
