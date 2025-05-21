import { createAsyncThunk, } from "@reduxjs/toolkit";
import { getQuoteData } from "../../api/quote-api";


export const fetchQuote = createAsyncThunk(
    'quote/fetch',
    async (__dirname, { rejectWithValue }) => {
        try {
            const data = await getQuoteData()
            return data
        } catch (error) {
            return rejectWithValue(error?.message)
        }
    }
)