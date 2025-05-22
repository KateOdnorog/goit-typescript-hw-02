import s from "./LoadMoreBtn.module.css";
import { FC } from "react";

interface LoadMoreBtnProps {
  onClickLM: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClickLM }) => {
  return (
    <div>
      <button className={s.loadMore} type="button" onClick={onClickLM}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
