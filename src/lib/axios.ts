"use client";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://du.opendataforall.com/wp-json",
});

export default axiosInstance;
