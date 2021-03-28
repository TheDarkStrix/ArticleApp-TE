import Dashboard from "../components/dashboard/dashboard";
import Head from "next/head";
import DisplayArticle from "../components/articles/displayArticles/displayArticle";
const Home = () => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Dashboard>
        <DisplayArticle />
      </Dashboard>
    </>
  );
};

export default Home;
