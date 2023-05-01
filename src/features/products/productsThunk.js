import axios from "axios";
import { products_url } from "../../utils/constants";

export const getAllProductsThunk = async (_, thunkAPI) => {
  try {


    const res = await axios.get(products_url);
    return res.data
  } catch (err) {
    thunkAPI.rejectWithValue(err.response.data.msg);
  }
};


