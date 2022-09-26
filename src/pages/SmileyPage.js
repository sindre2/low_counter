import { useContext } from "react";
import { ClockContext } from "../components/ClockContext";

export function Smiley() {
  const { value } = useContext(ClockContext);

  return (
    <>
      <h1>Smiley 😁</h1>
      <h1>{value}</h1>
    </>
  );
}
