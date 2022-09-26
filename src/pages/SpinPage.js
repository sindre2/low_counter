import { useContext } from "react";
import { ClockContext } from "../components/ClockContext";

export function Spin() {
  const { value } = useContext(ClockContext);

  return (
    <>
      <h1>Spin</h1>
      <h1>{value}</h1>
    </>
  );
}
