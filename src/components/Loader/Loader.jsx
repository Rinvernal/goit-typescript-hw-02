import { MutatingDots } from "react-loader-spinner"
import s from "./Loader.module.css"
const Loader = () => {
  return (
    <div className={s.box}>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="rgba(218, 180, 255, 0.696)"
        secondaryColor="rgba(218, 180, 255, 0.696)"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )
}

export default Loader