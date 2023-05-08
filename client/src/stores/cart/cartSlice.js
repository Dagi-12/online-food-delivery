// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     products: []
// }

// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart: (state, action) => {
//             return { products: [...state.products, {...action.payload, amount: 1}]}
//         },
//         clearCart: (state) => {
//             return { products: []}
//         },
//         incrementProductAmount: (state, action) => {
//             console.log('increment');
//             return { products: state.products.map(product => product.id === action.payload.id ? {...product, amount: product.amount + 1} : product)}
//         },
//         decrementProductAmount: (state, action) => {
//             return { products: state.products.map(product => product.id === action.payload.id ? {...product, amount: product.amount - 1} : product)}
//         }
//     }
// })
// export const cartProducts = state => state.cart.products

// export const {  addToCart, clearCart, incrementProductAmount, decrementProductAmount } = cartSlice.actions

// export default cartSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = { ...action.payload, amount: 1, id: Date.now() };
      return { products: [...state.products, productToAdd] };
    },
    clearCart: (state) => {
      return { products: [] };
    },
    incrementProductAmount: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload
      );
      state.products[productIndex].amount++;
    },
    decrementProductAmount: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (state.products[productIndex].amount > 1) {
        state.products[productIndex].amount--;
      } else {
        state.products.splice(productIndex, 1);
      }
    },
  },
});

export const cartProducts = (state) => state.cart.products;

export const {
  addToCart,
  clearCart,
  incrementProductAmount,
  decrementProductAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
