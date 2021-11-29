import styles from "../../../styles/Create.module.scss";
import Create from "../../../components/Create/Create";
import { IPost } from "../../../types";
import Head from "../../../components/Head/Head";

interface IProp {}

const CreatePage = (props: IProp) => {
  return (
    <>
      <Head title="Create a new blog post" />

      <Create />
    </>
  );
};

export default CreatePage;
