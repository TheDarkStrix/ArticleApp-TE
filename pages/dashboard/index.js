import Dashboard from "../../components/dashboard/dashboard";
import Head from "next/head";

const DashboardPage = () => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Dashboard />
    </>
  );
};

export default DashboardPage;
