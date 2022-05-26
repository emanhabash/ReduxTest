import { configureStore } from "@reduxjs/toolkit";
import { uesrSlice } from "./usarSlice";

const store = configureStore({
	reducer: {
		uesr: uesrSlice,
	},
});
export default store;
