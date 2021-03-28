import Head from "next/head";
import AllArticles from "../../../components/articles/all/allArticles";
import Content from "../../../components/dashboard/content/content";
import Dashboard from "../../../components/dashboard/dashboard";

const AllArticlesPage = () => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Dashboard>
        <AllArticles />
      </Dashboard>
    </>
  );
};

export default AllArticlesPage;
