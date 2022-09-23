import { useContext } from "react";
import { ClockContext } from "../components/ClockContext";

export function Spin() {
  const { value, setValue } = useContext(ClockContext);

  setInterval(() => {
    let timerUpdate = new Date();
    setValue(
      `${timerUpdate.getHours()}:${timerUpdate.getMinutes()}:${timerUpdate.getSeconds()}`
    );
  }, 1000);

  return (
    <>
      <h1>Spin</h1>
      <h1>{value}</h1>
    </>
  );
}
