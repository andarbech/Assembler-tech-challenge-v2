import initialState from "./gif-state";
import * as GifTypes from "./gif-types";
const gifReducer = (state = initialState, action) => {
  switch (action.type) {

    case GifTypes.CREATE_GIF_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GifTypes.CREATE_GIF_SUCCESS: {
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    }
    case GifTypes.CREATE_GIF_ERROR: {
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    }
    case GifTypes.UPDATE_GIF_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GifTypes.UPDATE_GIF_SUCCESS: {
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    }
    case GifTypes.UPDATE_GIF_ERROR: {
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    }
      
    case GifTypes.DELETE_GIF_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GifTypes.DELETE_GIF_SUCCESS: {
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    }
    case GifTypes.DELETE_GIF_ERROR: {
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    }
    case GifTypes.GET_GIF_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GifTypes.GET_GIF_SUCCESS: {
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    }
    case GifTypes.GET_GIF_ERROR: {
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
export default gifReducer;
