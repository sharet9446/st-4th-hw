import { useParams } from "react-router-dom";

const Detail = () => {
  console.log(useParams());
  return (
    <div>
      <h2>Detail 컴포넌트입니다.</h2>
    </div>
  );
};

export default Detail;
