import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddItem = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const url = `https://boiling-escarpment-44673.herokuapp.com/api/products/`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

    swal({
      title: "Your item added now!",
      icon: "success",
    });
  };

  return (
    <section className="py-5 container">
      <div className="form-container col col-sm-6 col-md-6 col-lg-5 mx-auto">
        <div className="form-body py-4">
          <h2 className="mb-4 text-center"> Add New Item!</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Item Name"
              {...register("name", {
                required: "This input is required.",
                pattern: {
                  message: ``,
                },
              })}
            />
            {errors?.name && (
              <p className=" error-text text-danger text-start">
                {errors?.name?.message}
              </p>
            )}

            <input
              placeholder="Item Image"
              {...register("img", {
                required: "This input is required.",
                pattern: {
                  message: ``,
                },
              })}
            />
            {errors?.name && (
              <p className=" error-text text-danger text-start">
                {errors?.name?.message}
              </p>
            )}
            <input
              placeholder="Item Description"
              {...register("desc", {
                required: "This input is required.",
                pattern: {
                  message: ``,
                },
              })}
            />
            {errors?.name && (
              <p className=" error-text text-danger text-start">
                {errors?.name?.message}
              </p>
            )}
            <input
              placeholder="Item Quantity"
              type="number"
              {...register("quantity", {
                required: "This input is required.",
                pattern: {
                  message: ``,
                },
              })}
            />
            {errors?.name && (
              <p className=" error-text text-danger text-start">
                {errors?.name?.message}
              </p>
            )}
            <input
              placeholder="Item Price"
              type="number"
              {...register("price", {
                required: "This input is required.",
                pattern: {
                  message: ``,
                },
              })}
            />
            {errors?.name && (
              <p className=" error-text text-danger text-start">
                {errors?.name?.message}
              </p>
            )}
            <input
              placeholder="Supplier Name"
              {...register("supplierName", {
                required: "This input is required.",
                pattern: {
                  message: ``,
                },
              })}
            />
            {errors?.name && (
              <p className=" error-text text-danger text-start">
                {errors?.name?.message}
              </p>
            )}

            <input className="lr-btn" type="submit" value="Add New Item" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddItem;
