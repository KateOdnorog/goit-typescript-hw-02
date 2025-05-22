import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return <div className={s.errormessage}>{message}</div>;
};
export default ErrorMessage;
