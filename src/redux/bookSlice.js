import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: "1", title: "1984", author: "George Orwell", category: "Fiction", description: "Dystopian novel", rating: "4.5" },
    { id: "2", title: "A Brief History of Time", author: "Stephen Hawking", category: "Non-Fiction", description: "Science explained", rating: "4.8" },
    { id: "3", title: "Dune", author: "Frank Herbert", category: "Sci-Fi", description: "Epic science fiction novel", rating: "4.7" }
  ]
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.items.push(action.payload);
    }
  }
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
