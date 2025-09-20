export const initialUiState = {
  page: 1,
  morePosts: 3,
  changePlaceholder: true,
};

export const INCREMENT = "ui/INCREMENT";
export const DECREMENT = "ui/DECREMENT";
export const RESET = "ui/RESET";
export const MORE_POSTS = "ui/MORE_POSTS";
export const RESET_MORE_POSTS = "ui/RESET_MORE_POSTS";
export const CHANGE_PLACEHOLDER = "ui/CHANGE_PLACEHOLDER";

const uiReducer = (state = initialUiState, action) => {
  console.log("uiReducer >>>", { state, action });

  switch (action.type) {
    case INCREMENT:
      return { ...state, page: state.page + 1 };
    case DECREMENT:
      return { ...state, page: Math.max(1, state.page - 1) };
    case RESET:
      return { ...state, page: 1 };
    case MORE_POSTS:
      return { ...state, morePosts: state.morePosts + 2 };
    case RESET_MORE_POSTS:
      return { ...state, morePosts: 2 };
    case CHANGE_PLACEHOLDER:
      return { ...state, changePlaceholder: !state.changePlaceholder };
    default:
      return state;
  }
};

export default uiReducer;
