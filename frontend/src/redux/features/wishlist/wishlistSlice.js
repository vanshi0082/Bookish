import { createSlice } from "@reduxjs/toolkit";
import Swal  from "sweetalert2";

const initialState = {
    wishlistItems: []
}

const wishlistSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers:{
        addToWishlist: (state, action) => {
            const existingItem = state.wishlistItems.find(item => item._id === action.payload._id);
            if(!existingItem) {
                state.wishlistItems.push(action.payload)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product Added to the Wishlist",
                    showConfirmButton: false,
                    timer: 1500
                  });
            } else(
                Swal.fire({
                    title: "Already Added to the Wishlist",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "OK!"
                  })
            )
        },
        removeFromWishlist: (state, action) => {
            state.wishlistItems =  state.wishlistItems.filter(item => item._id !== action.payload._id)
        },
        clearWishlist: (state) => {
            state.wishlistItems = []
        }
    }
})

// export the actions   
export const  {addToWishlist, removeFromWishlist, clearWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;