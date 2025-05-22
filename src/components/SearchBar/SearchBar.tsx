import s from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { FC, FormEvent } from "react";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const query = (
      form.elements.namedItem("query") as HTMLInputElement
    ).value.trim();
    if (!query) {
      toast.error("Please enter a search term");
      return;
    }
    onSubmit(query);
    form.reset();
  };

  return (
    <>
      <header className={s.header}>
        <form onSubmit={handleSearch}>
          <input
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
