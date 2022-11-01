import axios from 'axios';
import {baseUrl} from '.';

export const axiosInstance = axios.create({
  baseURL: baseUrl,
});
