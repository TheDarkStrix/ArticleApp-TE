import Dashboard from "../../../components/dashboard/dashboard";
import Head from "next/head";
import Settings from "../../../components/settings/settings";

const SettingsPage = () => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Dashboard>
        <Settings />
      </Dashboard>
    </>
  );
};

export default SettingsPage;
