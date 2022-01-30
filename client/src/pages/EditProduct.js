import React, { useState } from "react";
import ImageDisplay from "components/ImageDisplay";
// import { useParams } from "react-router";
import "styles/EditProduct.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { sendProductAddRequest } from "redux/actions/productActions";
export default function EditProduct(props) {
  const dispatch = useDispatch();
  const [uploadImages, setUploadImages] = useState([]);
  const initialValues = {
    name: "",
    price: 0,
    category: "uncategorized",
    stock: 0,
    tags: "",
    description: "",
    productImages: [],
  };

  const validationSchema = Yup.object({
    name: Yup.string(),
    price: Yup.number(),
    category: Yup.string(),
    stock: Yup.number(),
    tags: Yup.string(),
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
    if (props.mode === "add") {
      dispatch(sendProductAddRequest(newObj));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => (
        <div className="edit-product p-3">
          <h2 className="page-title mb-0">
            {props.mode === "add" ? "Add product" : "Edit product"}
          </h2>
          <hr />
          <Form className="card p-4">
            <div className="row gx-4">
              <div className="col left-form border-end">
                <h3 className="page-title text-center">Product details</h3>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Product Name
                  </label>
                  <Field name="name" type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Price <small>(per item)</small>
                  </label>
                  <Field name="price" type="number" className="form-control" />
                </div>
                <div className="mb-3 row">
                  <div className="col">
                    <label htmlFor="name" className="form-label">
                      Category
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
                  </div>
                  <div className="col">
                    <label htmlFor="stock" className="form-label">
                      Stock quantity
                    </label>
                    <Field
                      name="stock"
                      type="number"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col">
                    <label htmlFor="tags" className="form-label">
                      Tags <small>(comma separated)</small>
                    </label>
                    <Field
                      name="tags"
                      type="text"
                      className="form-control"
                      placeholder="eg. chilled, summer, relaxing"
                    />
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
                    {props.mode === "add" ? "Cancel" : "Delete this product"}
                  </button>
                  <button
                    type="submit"
                    className="btn btn-lg submit-btn w-100 border"
                  >
                    {props.mode === "add" ? "Add product" : "Update product"}
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
