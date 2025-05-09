import axios from "axios";

export const getAllPosts = async (limit) => {
  try {
    const { data } = await axios.get(`/api/posts?limit=${limit}`);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};
export const getSinglePosts = async ({ slug }) => {
  try {
    const { data } = await axios.get(`/api/posts/${slug}`);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
        throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};
