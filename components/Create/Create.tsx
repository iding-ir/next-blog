import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import styles from "./Create.module.scss";

type Inputs = {
  name: string;
  excerpt: string;
  content: string;
};

const Create = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Title" {...register("name", { required: true })} />

      {errors.name && (
        <div className={styles.error}>This field is required</div>
      )}

      <input
        placeholder="Excerpt"
        {...register("excerpt", { required: true })}
      />

      {errors.excerpt && (
        <div className={styles.error}>This field is required</div>
      )}

      <input
        placeholder="Content"
        {...register("content", { required: true })}
      />

      {errors.content && (
        <div className={styles.error}>This field is required</div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Create;
