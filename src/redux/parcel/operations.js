import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchParcelInfo = createAsyncThunk(
  "parcel/fetchParcelInfo",
  async (trackingNumber, { rejectWithValue }) => {
    try {
      const requestBody = {
        apiKey: API_KEY,
        modelName: "TrackingDocument",
        calledMethod: "getStatusDocuments",
        methodProperties: {
          Documents: [
            {
              DocumentNumber: trackingNumber,
            },
          ],
        },
      };

      const { data } = axios.post("/", requestBody);
      console.log("data:", data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
