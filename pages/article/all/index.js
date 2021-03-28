import Head from "next/head";
import AllArticles from "../../../components/articles/all/allArticles";
import Content from "../../../components/dashboard/content/content";
import Dashboard from "../../../components/dashboard/dashboard";

const AllArticlesPage = () => {
  return (
    <>
      <Dashboard>
        <AllArticles />
      </Dashboard>
    </>
  );
};

export default AllArticlesPage;
