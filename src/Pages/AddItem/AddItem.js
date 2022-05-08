import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddItem = () => {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const email = getValues("email");
  console.log(email);
  const onSubmit = (data) => {
    console.log(data);
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
            {errors?.img && (
              <p className=" error-text text-danger text-start">
                {errors?.img?.message}
              </p>
            )}
            <input
              placeholder="Item Description"
              {...register("desc", {
                // required: "This input is required.",
                pattern: {
                  message: ``,
                },
              })}
            />
            {errors?.desc && (
              <p className=" error-text text-danger text-start">
                {errors?.desc?.message}
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
            {errors?.quantity && (
              <p className=" error-text text-danger text-start">
                {errors?.quantity?.message}
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
            {errors?.price && (
              <p className=" error-text text-danger text-start">
                {errors?.price?.message}
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
            {errors?.supplierName && (
              <p className=" error-text text-danger text-start">
                {errors?.supplierName?.message}
              </p>
            )}
            <input
              placeholder="Email"
              {...register("email", {
                required: "This input is required.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: `Please include an '@' in the email address. '${email}' is missing an '@`,
                },
              })}
            />
            {errors?.email && (
              <p className="error-text text-danger text-start">
                {errors?.email?.message}
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
