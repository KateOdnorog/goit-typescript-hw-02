import "./App.css";
import fetchImg from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { TypeImages } from "./types/types";

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<TypeImages[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [LoadMore, setLoadMore] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<TypeImages | null>(null);

  useEffect(() => {
    const getDate = async () => {
      if (!query) return;
      try {
        setIsLoading(true);
        setLoadMore(false);
        const { results, total_pages } = await fetchImg(query, page);
        if (results.length === 0) {
          return toast.error(
            "No images found. Please change your search parameters and try again."
          );
        }
        setImages((prevImages) => [...prevImages, ...results]);
        if (page < total_pages) {
          setLoadMore(true);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          toast.error(error.message);
          setLoadMore(false);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getDate();
  }, [query, page]);

  const handleSubmitSearch = (query: string) => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setError("");
  };

  const handleClickLM = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const handleClickImg = (id: string) => {
    if (!images.length) return;
    const image = images.find((img) => img.id === id);
    if (!image) return;
    setModalImage(image);
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmitSearch} />

      {error.length !== 0 ? (
        <ErrorMessage message={error} />
      ) : (
        images.length !== 0 && (
          <ImageGallery images={images} onClickImg={handleClickImg} />
        )
      )}

      {isLoading && <Loader />}
      {!isLoading && LoadMore && <LoadMoreBtn onClickLM={handleClickLM} />}

      <ImageModal
        isModalOpen={isModalOpen}
        modalImage={modalImage}
        closeModal={handleModalClose}
      />
      <Toaster position="top-right" />
    </>
  );
};

export default App;
