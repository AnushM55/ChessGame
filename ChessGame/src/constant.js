import { createPosition } from "./helper";

export const initGameState = {
  position: [createPosition()],
  turn: "W",
  candidateMoves : []
};
