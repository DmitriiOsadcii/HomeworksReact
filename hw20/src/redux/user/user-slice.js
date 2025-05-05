import { createSlice } from "@reduxjs/toolkit";


// import store from "../store";
import arrOfUsers from "../../data/data";


const userSlive = createSlice({
    name: 'user',
    initialState: arrOfUsers,
    reducers: {
        // addUser: (store ,{ payload })
    }
});

export default userSlive.reducer;