import actionTypes from "../actionTypes";
export const makeNewMove = ({newPosition,newMove}) => {
    return {
        type: actionTypes.NEW_MOVE,
        payload: {newPosition,newMove},
    }
}

export const generateCandidateMoves = (candidateMoves) => {
  console.log("Candidate moves", candidateMoves);
  return {
    type: actionTypes.GENERATE_CANDIDATE_MOVES,
    payload: { candidateMoves },
  };
};
export const clearCandidateMoves = (candidateMoves) => {
  return {
    type: actionTypes.CLEAR_CANDIDATE_MOVES,
  };
};

export const takeBack = () => {
    return {
            type: actionTypes.TAKE_BACK
           };
};

