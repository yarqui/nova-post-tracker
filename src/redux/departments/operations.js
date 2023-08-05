import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchDepartments = createAsyncThunk(
  "departments/fetchByCity",
  async (cityName, { rejectWithValue }) => {
    try {
      const requestBody = {
        apiKey: API_KEY,
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: {
          CityName: cityName,
        },
      };
      const res = await axios.post("/", requestBody);

      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
