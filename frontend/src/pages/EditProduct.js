import React, { useState } from "react";
import ImageDisplay from "components/ImageDisplay";
// import { useParams } from "react-router";
import "styles/EditProduct.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
export default function EditProduct(props) {
  const [uploadImages, setUploadImages] = useState([]);
  // const { id } = useParams();
  const initialValues = {
    name: "",
    price: undefined,
    category: "all",
    stock: undefined,
    tags: "",
    description: "",
    productImages: [],
  };

  const validationSchema = Yup.object({
    name: Yup.string(),
    price: Yup.string(),
    category: Yup.string(),
    stock: Yup.number(),
    tags: Yup.string(),
    description: Yup.string(),
    productImages: Yup.array(),
  });

  const onSubmit = (values) => {
    // console.log(values);
    let newObj = Object.assign({}, values, { productImages: uploadImages });
    // newObj.productImages = uploadImages;
    console.log(newObj);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
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
                  <Field name="price" type="text" className="form-control" />
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
                      <option value="all">All</option>
                      <option value="foods&drinks">Foods & drinks</option>
                      <option value="electronics">Electronics</option>
                      <option value="beauty&cosmetics">
                        Beauty & cosmetics
                      </option>
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
                  {...props}
                  fileProp={(file) => {
                    setUploadImages(file);
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
