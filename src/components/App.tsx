import { useEffect, useState } from "react"

import { featchArticles } from "../services/api";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import SearchBar from "./SearchBar/SearchBar";
import toast from "react-hot-toast";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import { APIResponse, Image } from "../types";


const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [query, setQuery] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [nbPages, setNbPages] = useState<number>(1)

  useEffect (() => {
    if (page > nbPages) {
      toast("You made it to the end")
    }
  }, [nbPages, page])

  useEffect(() => {
    if (query === '') {
      toast.error('The field is empty')
      return
    }
    const getData = async () => { 
      try {
        setIsLoading(true)
        setIsError(false)
        const { results, total_pages }: APIResponse = await featchArticles(query, page);
        setImages( prevImages => {
          const newImages = results.filter(
            newImage => !prevImages.some(image => image.id === newImage.id)
          );
          return [...prevImages, ...newImages];
        });
        setNbPages(total_pages)
      }
     catch (error) {
      console.log(error)
      setIsError(true)
      
    }
    finally{
      setIsLoading(false)
    }
  }
    getData();
  }, [query, page]);
  const handleChangeQuery = (query:string):void => {
    setImages([])
    setQuery(query)
    setPage(1)
  }

  const [modalImage, setModalImage] = useState<Image|null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (image: Image):void => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = ():void => {
    setModalImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <SearchBar onChangeQuery={handleChangeQuery}/>
      {isLoading && <Loader />}
      <ImageGallery images={images} onImageClick={openModal} />
      <ImageModal isOpen={isModalOpen} onClose={closeModal} image={modalImage} />
      {isError && <ErrorMessage/>}
      {nbPages > page && <LoadMoreBtn setPage = {setPage}/>}
    </div>
  )
}

export default App