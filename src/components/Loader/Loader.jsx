import { FadeLoader } from "react-spinners";

const Loader = () => {
  const override = {
    display: "block",
    margin: "30px auto",
  };

  return <FadeLoader color="#1411de" cssOverride={override} />;
};

export default Loader;
