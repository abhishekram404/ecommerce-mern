import React, { useState } from "react";
import ImageDisplay from "components/ImageDisplay";
import "styles/EditProduct.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import axios from "axios";
import { ERROR, SUCCESS } from "redux/constants";
export default function AddProduct(props) {
  const dispatch = useDispatch();
  const [uploadImages, setUploadImages] = useState([]);
  const initialValues = {
    name: "",
    price: "",
    category: "Uncategorized",
    stock: "",
    tags: "",
    description: "",
    productImages: [],
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Product name is required."),
    price: Yup.number().required("Price is required."),
    category: Yup.string().required("Price is required."),
    stock: Yup.number().required("Stock number is required."),
    tags: Yup.string().required("At least one tag is required."),
    description: Yup.string(),
    productImages: Yup.array(),
  });

  const onSubmit = (values) => {
    let { tags } = values;
    let tagsArray = tags.split(",").map((tag) => tag.trim());
    let newObj = Object.assign(
      {},
      values,
      { productImages: uploadImages },
      { tags: tagsArray }
    );
    addProductMutation(newObj);
  };

  let { mutate: addProductMutation, isLoading } = useMutation(
    (data) =>
      axios.post("/product/create", data, {
        withCredentials: true,
      }),
    {
      onSuccess: ({ data }) => {
        dispatch({ type: SUCCESS, payload: data.message });
      },
      onError: (error) => {
        dispatch({ type: ERROR, payload: error?.response?.data?.message });
      },
    }
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => (
        <div className="edit-product p-3">
          <h2 className="page-title mb-0">Add product</h2>
          <hr />
          <Form className="card p-4">
            <div className="row gx-4">
              <div className="col left-form border-end">
                <h3 className="page-title text-center">Product details</h3>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Product Name <span className="text-danger">*</span>
                  </label>
                  <Field name="name" type="text" className="form-control" />
                  <div className="error-message text-danger">
                    <ErrorMessage name="name" />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Price <small>(per item)</small>{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <Field name="price" type="number" className="form-control" />
                  <div className="error-message text-danger">
                    <ErrorMessage name="price" />
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col">
                    <label htmlFor="name" className="form-label">
                      Category<span className="text-danger">*</span>
                    </label>

                    <Field
                      as="select"
                      className="form-select"
                      id="category"
                      name="category"
                    >
                      <option value="Uncategorized">Uncategorized</option>
                      <option value="Food & drinks">Food & drinks</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Beauty & cosmetics">
                        Beauty & cosmetics
                      </option>
                      <option value="Kitchen">Kitchen</option>
                      <option value="Clothings">Clothings</option>
                      <option value="Smartphones">Smartphones</option>
                    </Field>
                    <div className="error-message text-danger">
                      <ErrorMessage name="category" />
                    </div>
                  </div>
                  <div className="col">
                    <label htmlFor="stock" className="form-label">
                      Stock quantity <span className="text-danger">*</span>
                    </label>
                    <Field
                      name="stock"
                      type="number"
                      className="form-control"
                    />
                    <div className="error-message text-danger">
                      <ErrorMessage name="stock" />
                    </div>
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col">
                    <label htmlFor="tags" className="form-label">
                      Tags <small>(comma separated)</small>{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <Field
                      name="tags"
                      type="text"
                      className="form-control"
                      placeholder="eg. chilled, summer, relaxing"
                    />
                    <div className="error-message text-danger">
                      <ErrorMessage name="tags" />
                    </div>
                  </div>
                  <div className="col"></div>
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <Field
                    as="textarea"
                    name="description"
                    id="description"
                    cols="30"
                    rows="7"
                    className="form-control"
                  ></Field>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="btn btn-light btn-lg delete-btn w-100 border mb-2 text-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-lg submit-btn w-100 border"
                    disabled={isLoading}
                  >
                    {isLoading ? "Adding product" : "Add product"}
                  </button>
                </div>
              </div>
              {/* <hr /> */}
              <div className="col-7 right-form ">
                <h3 className="page-title text-center">Product Images</h3>
                <ImageDisplay
                  upload={true}
                  {...formikProps}
                  fileProp={(files) => {
                    setUploadImages(files);
                  }}
                />
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
