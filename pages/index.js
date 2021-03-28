import Dashboard from "../components/dashboard/dashboard";
import Head from "next/head";
import DisplayArticle from "../components/articles/displayArticles/displayArticle";
const Home = () => {
  return (
    <>
      <Dashboard>
        <DisplayArticle />
      </Dashboard>
    </>
  );
};

export default Home;
