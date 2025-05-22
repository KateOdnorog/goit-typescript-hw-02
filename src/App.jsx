import "./App.css";
import fetchImg from "./services/api.js";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./components/ImageModal/ImageModal";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [LoadMore, setLoadMore] = useState(false);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

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

  const handleSubmitSearch = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setError("");
  };

  const handleClickLM = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const handleClickImg = (id) => {
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
