import { useEffect, useState } from "react";
export function useDateTime() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 30 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const line1 = `${date.toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })}`;
  const line2 = `${date.toLocaleTimeString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
  const line3 = `${date.toLocaleDateString("en-us", {
    weekday: "short",
  })}`;
  return [line1, line2, line3];
}
