import Dashboard from "../../../components/dashboard/dashboard";
import Head from "next/head";
import Settings from "../../../components/settings/settings";

const SettingsPage = () => {
  return (
    <>
      <Dashboard>
        <Settings />
      </Dashboard>
    </>
  );
};

export default SettingsPage;
