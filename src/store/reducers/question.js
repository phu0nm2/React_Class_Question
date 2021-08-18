import { actionType } from "../actions/type";

const initialState = {
  questionList: [],
  DanhSachDapAn: [],
};

const reducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.FETCH_QUESTION:
      state.questionList = payload;
      return { ...state };

    //
    case actionType.PUSH_ANSWER: {
      const cloneAnswer = [...state.DanhSachDapAn];
      const foundIndex = cloneAnswer.findIndex(
        (item) => item.QuestionId === payload.QuestionId
      );
      // console.log(action);
      if (foundIndex === -1) {
        cloneAnswer.push(payload);
      } else {
        cloneAnswer[foundIndex].answer = payload.answer;
      }

      return { ...state, DanhSachDapAn: cloneAnswer };
    }

    default:
      return { ...state };
  }
};

export default reducers;
