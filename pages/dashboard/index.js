import Dashboard from "../../components/dashboard/dashboard";
import Head from "next/head";
import DisplayArticle from "../../components/articles/displayArticles/displayArticle";

const DashboardPage = () => {
  return (
    <>
      <Dashboard>
        <DisplayArticle />
      </Dashboard>
    </>
  );
};

export default DashboardPage;
