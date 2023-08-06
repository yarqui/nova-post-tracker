import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchDepartments = createAsyncThunk(
  "depsAndCities/fetchDepsByCity",
  async (cityRef, { rejectWithValue }) => {
    if (cityRef === "") {
      console.log("query is empty");
      return;
    }

    try {
      const requestBody = {
        apiKey: API_KEY,
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: {
          SettlementRef: cityRef,
        },
      };
      const { data } = await axios.post("/", requestBody);

      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCities = createAsyncThunk(
  "depsAndCities/fetchCities",
  async (cityName, { rejectWithValue }) => {
    if (cityName === "") {
      console.log("query is empty");
      return;
    }
    try {
      const requestBody = {
        apiKey: API_KEY,
        modelName: "Address",
        calledMethod: "searchSettlements",
        methodProperties: {
          CityName: cityName,
        },
      };

      const { data } = await axios.post("/", requestBody);

      return data.data[0].Addresses;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
