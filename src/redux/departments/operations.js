import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDepartments = createAsyncThunk(
  "departments/fetchByCity",
  async (cityName, { rejectWithValue }) => {
    try {
      const requestOptions = {
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: {
          CityName: cityName,
        },
      };

      const res = await axios.get("/", requestOptions);

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
