import axios from "axios";
import { API_BASE_URL, CLASSIFY_PATH } from "../constants";

const API = axios.create({ baseURL: API_BASE_URL });

// eslint-disable-next-line import/prefer-default-export
export function classifyApi({ modelType, text }) {
  return API.post(`/${CLASSIFY_PATH}`, { modelType, text });
}
