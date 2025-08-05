import * as yup from "yup";

export const validationCreateBlogSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  postDate: yup.date().required("Post date is required"),
  author: yup.string().required("Author is required"),
  description: yup
    .string()
    .min(100, "Description must be at least 100 characters")
    .required("Description is required"),
  imageUrl: yup.string().required("Image URL is required"),
});
