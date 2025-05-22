import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClickLM }) => {
  return (
    <div>
      <button className={s.loadMore} type="button" onClick={onClickLM}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
