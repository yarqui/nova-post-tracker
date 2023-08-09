import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import isServerError from "../../utils/isServerError";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchDepartments = createAsyncThunk(
  "depsAndCities/fetchDepsByCity",
  async (cityRef, { rejectWithValue }) => {
    if (cityRef === "") {
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
      const res = await axios.post("/", requestBody);

      isServerError(res);

      const departmentCount = res.data.info.totalCount;

      if (!departmentCount) {
        throw new Error("Не знайдено відділень");
      }

      const departments = res.data.data;

      return departments;
    } catch (error) {
      console.log("error.message:", error.message);
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

      const res = await axios.post("/", requestBody);

      isServerError(res);

      if (res.data.errors.includes("CityName has invalid characters")) {
        throw new Error("В назві населеного пункту невалідні символи");
      }

      const citiesCount = res.data.data[0].TotalCount;
      if (!citiesCount) {
        throw new Error("Не знайдено населених пунктів з такою назвою");
      }

      const addresses = res.data.data[0].Addresses;

      return addresses;
    } catch (error) {
      console.log("error.message:", error.message);
      return rejectWithValue(error.message);
    }
  }
);
