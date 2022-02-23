import * as GifTypes from "./gif-types";
import api from "../../api";

//CREATE
export function createGifRequest() {
  return { type: GifTypes.CREATE_GIF_REQUEST };
}

export function createGifSuccess(data) {
  return { type: GifTypes.CREATE_GIF_SUCCESS, payload: data };
}

export function createGifError(data) {
  return { type: GifTypes.CREATE_GIF_ERROR, payload: data };
}

//UPDATE

export function updateGifRequest() {
  return { type: GifTypes.UPDATE_GIF_REQUEST };
}

export function updateGifSuccess(data) {
  return { type: GifTypes.UPDATE_GIF_SUCCESS, payload: data };
}

export function updateGifError(data) {
  return { type: GifTypes.CREATE_GIF_ERROR, payload: data };
}

// DELETE
export function deleteGifRequest() {
  return { type: GifTypes.DELETE_GIF_REQUEST };
}

export function deleteGifSuccess(data) {
  return { type: GifTypes.DELETE_GIF_SUCCESS, payload: data };
}

export function deleteGifError(data) {
  return { type: GifTypes.DELETE_GIF_ERROR, payload: data };
}
// GET
export function getGifRequest() {
  return { type: GifTypes.GET_GIF_REQUEST };
}

export function getGifSuccess(data) {
  return { type: GifTypes.GET_GIF_SUCCESS, payload: data };
}

export function getGifError(data) {
  return { type: GifTypes.GET_GIF_ERROR, payload: data };
}


export async function getAllGifs() {
  return async function createThunk(dispatch) {
    try {
      console.log("inside")

      const res = await api.fetchAllGifs(data);
    } catch (error) {
      console.log(error)
    }
    dispatch(console.log(res));
  };
}
