import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home 컴포넌트입니다.</h1>
      <Link to={"/detail/1"}>detail 페이지로 가기</Link>
    </>
  );
};

export default Home;
