import { createContext } from "react";

// createcontext with the value of "null" that is exported. It works sort of a global "let-variable".

const timerUpdate = new Date();
const zeTime = `${timerUpdate.getHours()}:${timerUpdate.getMinutes()}:${timerUpdate.getSeconds()}`;

export const ClockContext = createContext(zeTime);
