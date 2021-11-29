import React, { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import createPost from "../../utils/createPost";

import styles from "./Create.module.scss";

type Inputs = {
  name: string;
  excerpt: string;
  content: string;
};

const Create = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    const res = await createPost(data);

    setLoading(false);

    // @ts-ignore
    formRef.current.reset();

    console.log(res);
  };

  return (
    <form
      ref={formRef}
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.info}>
        Please note that regardless of your input, mockAPI.io will create a
        random post entry.
      </div>

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

      <button disabled={loading} type="submit">
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Create;
