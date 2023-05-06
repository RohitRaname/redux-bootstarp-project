import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProductsThunk } from "./productsThunk";

const initialFilterState = {
  search: "",
  category: "all",
  company: "all",
  color: "all",
  price: 0,
  maxPrice: 0,
  shipping: false,
};

const initialState = {
  name: "products",
  isLoading: true,

  // components
  gridView: true,



  sort: "lowest-price",

  // data
  items: [],
  filteredItems: [],

  // filter
  filters: initialFilterState,
};

export const getProducts = createAsyncThunk(
  "/products/getProducts",
  async (_, thunkAPI) => {
    return await getAllProductsThunk(_, thunkAPI);
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    clearFilters: (state) => {
      return {
        ...state,
        filters: {
          ...initialFilterState,
          price: state.filters.maxPrice,
          maxPrice: state.filters.maxPrice,
        },
      };
    },

    clearFiltersAndSort: (state) => {
      return {
        ...state,
        filters: {
          ...initialFilterState,
          price: state.filters.maxPrice,
          maxPrice: state.filters.maxPrice,
        },
        sort: "lowest-price",
      };
    },

    clearAllProducts: (state) => initialState,
    setSort: (state, { payload }) => {
      state.sort = payload;
    },
    setFilter: (state, { payload }) => {
      state.filters[payload.name] = payload.value;
    },
    setGridView: (state) => {
      state.gridView = true;
    },
    setListView: (state) => {
      state.gridView = false;
    },

    sortProducts: (state) => {
      state.isLoading = true;
      const { sort } = state;
      let products = state.filteredItems;

      if (sort === "lowest-price") products.sort((a, b) => a.price - b.price);
      if (sort === "highest-price")
        products.sort((a, b) => -(a.price - b.price));
      if (sort === "a-z") products.sort((a, b) => a.name.localeCompare(b.name));
      if (sort === "z-a")
        products.sort((a, b) => -a.name.localeCompare(b.name));

      state.filteredItems = products;
      state.isLoading = false;
    },

    filterProducts: (state) => {
      state.isLoading = true;

      const { search, category, company, color, price, shipping } =
        state.filters;

      let products = state.items;
      // if (products.length === 0) return state;

      // search: "",
      // category: "all",
      // company: "all",
      // color: "all",
      // price: 0,
      // maxPrice: "",
      // shipping: false,
      // sort: "lowest-price",

      if (search !== "")
        products = products.filter((el) => el.name.startsWith(search));

      if (category !== "all")
        products = products.filter((el) => el.category === category);

      if (company !== "all")
        products = products.filter((el) => el.company === company);
      if (color !== "all")
        products = products.filter((el) =>
          el.colors.find((elColor) => elColor === color)
        );

      if (price) products = products.filter((el) => el.price < price);
      if (shipping)
        products = products.filter((el) => el.shipping === shipping);

      state.filteredItems = products;
      state.isLoading = false;
    },


  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
        state.filteredItems = payload;

        const maxPrice = Math.max(...state.items.map((el) => el.price));
        state.filters.price = maxPrice;
        state.filters.maxPrice = maxPrice;
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const {
  showLoading,
  hideLoading,

  clearFilters,
  clearAllProducts,
  clearFiltersAndSort,

  setSort,
  setFilter,
  setGridView,
  setListView,

  sortProducts,
  filterProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
