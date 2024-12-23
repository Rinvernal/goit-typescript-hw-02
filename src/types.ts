export interface Image {
  id: number,
  urls: {
    small: string,
    regular: string,
  },
  description: string,
  user: {name: string},
  alt_description: string,
  likes: number,
}

export interface APIResponse {
  results: Image[];
  total_pages: number;
};

export interface ImageCardProps {
  image: Image;
}

export interface ImageGalleryProps{
  images: Image[],
  onImageClick: (image: Image) => void
}

export interface ImageModalProps {
  isOpen: boolean,
  onClose: () => void,
  image?: Image | null
}

export interface LoadMoreBtnProps {
  setPage: (value: (prev: number) => number) => void;
}

export interface SearchBarProps {
  onChangeQuery: (query: string) => void
}

export interface FormValue {
  query: string,
}