import { ClockContext } from "./Components/ClockContext";
import { useContext } from "react";

// Use Context allows for manipulation of the provided context. useState allows continouos update in setInterval.

export function Home() {
  const { value, setValue } = useContext(ClockContext);

  setInterval(() => {
    let timerUpdate = new Date();
    setValue(
      `${timerUpdate.getHours()}:${timerUpdate.getMinutes()}:${timerUpdate.getSeconds()}`
    );
  }, 1000);

  return (
    <>
      <h1>Home</h1>
      <h1>{value}</h1>
    </>
  );
}
