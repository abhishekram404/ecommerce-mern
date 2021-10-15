import React from "react";
import "styles/Orders.scss";
export default function Orders() {
  return (
    <div className="orders-page p-3">
      <div className="row page-title-row border-bottom  pb-3">
        <div className="col-3">
          <h2 className="page-title m-0">Orders</h2>
        </div>
        <div className="col-6">
          <form className="d-flex align-items-center">
            <label htmlFor="search" className="form-label visually-hidden">
              Search
            </label>
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="Search orders by customer name or product name"
            />
          </form>
        </div>
        <div className="col-3"></div>
      </div>
      <article className="mt-4 ">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Products</th>
              <th>Total Quantity</th>
              <th>Total Amount</th>
              <th>Order Status</th>
              <th>Order Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Abhishek Ram</td>
              <td>Phone, Macbook</td>
              <td>3</td>
              <td>$2000</td>
              <td>Ordered</td>
              <td>
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button type="button" class="btn btn-sm btn-danger">
                    Delete
                  </button>
                  <button type="button" class="btn btn-sm btn-warning">
                    Edit
                  </button>
                  <button type="button" class="btn btn-sm btn-success">
                    Set Delivered
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Abhishek Ram</td>
              <td>Phone, Macbook</td>
              <td>3</td>
              <td>$2000</td>
              <td>Ordered</td>
              <td>
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button type="button" class="btn btn-sm btn-danger">
                    Delete
                  </button>
                  <button type="button" class="btn btn-sm btn-warning">
                    Edit
                  </button>
                  <button type="button" class="btn btn-sm btn-success">
                    Set Delivered
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Abhishek Ram</td>
              <td>Phone, Macbook</td>
              <td>3</td>
              <td>$2000</td>
              <td>Ordered</td>
              <td>
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button type="button" class="btn btn-sm btn-danger">
                    Delete
                  </button>
                  <button type="button" class="btn btn-sm btn-warning">
                    Edit
                  </button>
                  <button type="button" class="btn btn-sm btn-success">
                    Set Delivered
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Abhishek Ram</td>
              <td>Phone, Macbook</td>
              <td>3</td>
              <td>$2000</td>
              <td>Ordered</td>
              <td>
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button type="button" class="btn btn-sm btn-danger">
                    Delete
                  </button>
                  <button type="button" class="btn btn-sm btn-warning">
                    Edit
                  </button>
                  <button type="button" class="btn btn-sm btn-success">
                    Set Delivered
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Abhishek Ram</td>
              <td>Phone, Macbook</td>
              <td>3</td>
              <td>$2000</td>
              <td>Ordered</td>
              <td>
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button type="button" class="btn btn-sm btn-danger">
                    Delete
                  </button>
                  <button type="button" class="btn btn-sm btn-warning">
                    Edit
                  </button>
                  <button type="button" class="btn btn-sm btn-success">
                    Set Delivered
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Abhishek Ram</td>
              <td>Phone</td>
              <td>3</td>
              <td>$2000</td>
              <td>Ordered</td>
              <td>
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button type="button" class="btn btn-sm btn-danger">
                    Delete
                  </button>
                  <button type="button" class="btn btn-sm btn-warning">
                    Edit
                  </button>
                  <button type="button" class="btn btn-sm btn-success">
                    Set Delivered
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Abhishek Ram</td>
              <td>Phone, Macbook</td>
              <td>3</td>
              <td>$2000</td>
              <td>Ordered</td>
              <td>
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button type="button" class="btn btn-sm btn-danger">
                    Delete
                  </button>
                  <button type="button" class="btn btn-sm btn-warning">
                    Edit
                  </button>
                  <button type="button" class="btn btn-sm btn-success">
                    Set Delivered
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Abhishek Ram</td>
              <td>Phone, Macbook</td>
              <td>3</td>
              <td>$2000</td>
              <td>Ordered</td>
              <td>
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button type="button" class="btn btn-sm btn-danger">
                    Delete
                  </button>
                  <button type="button" class="btn btn-sm btn-warning">
                    Edit
                  </button>
                  <button type="button" class="btn btn-sm btn-success">
                    Set Delivered
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Abhishek Ram</td>
              <td>Phone, Macbook</td>
              <td>3</td>
              <td>$2000</td>
              <td>Ordered</td>
              <td>
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button type="button" class="btn btn-sm btn-danger">
                    Delete
                  </button>
                  <button type="button" class="btn btn-sm btn-warning">
                    Edit
                  </button>
                  <button type="button" class="btn btn-sm btn-success">
                    Set Delivered
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
  );
}
