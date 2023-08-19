import { configureStore } from '@reduxjs/toolkit'
import HomeSlice from './homeSlice';


   const Store = configureStore({
  reducer: {
    home:HomeSlice
  },
})
export default Store;