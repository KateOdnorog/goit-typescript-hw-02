import s from "./ErrorMessage.module.css";
import { FC } from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <div className={s.errormessage}>{message}</div>;
};
export default ErrorMessage;
