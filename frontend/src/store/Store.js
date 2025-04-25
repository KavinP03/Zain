import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./cartslice/Cartslice"

export const Store=configureStore({
    reducer:{
        cart:Cartslice
    },
    devTools:true
});
