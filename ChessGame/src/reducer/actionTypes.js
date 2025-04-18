const actionTypes = {
  CAN_CASTLE: "CAN_CASTLE",
  STALEMATE : "STALEMATE",
  NEW_MOVE: "NEW_MOVE",
  NEW_GAME: "NEW_GAME",
  GENERATE_CANDIDATE_MOVES: "GENERATE_CANDIDATE_MOVES",
  CLEAR_CANDIDATE_MOVES: "CLEAR_CANDIDATE_MOVES",
  OPEN_PROMOTION: "OPEN_PROMOTION",
  CLOSE_PROMOTION: "CLOSE_PROMOTION",

  INSUFFICIENT_MATERIAL: "INSUFFICIENT_MATERIAL",
  WIN : "WIN",
  TAKE_BACK: "TAKE_BACK",
  
  // Player color selection
  SET_PLAYER_COLOR: "SET_PLAYER_COLOR",
};
export default actionTypes;
