import Head from "next/head";
import MainContent from "../components/MainContent";
// import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";

export const getStaticProps = async () => {
  const response = await fetch("https://assessment-edvora.herokuapp.com/");
  const data = await response.json();

  return {
    props: { users: data },
  };
};

export default function Home({ users }) {
  return (
    <>
      <Head>
        <title>Edvora | App</title>
      </Head>
      <div className="home_container">
        <Sidebar users={users} />
        <MainContent users={users} />
      </div>
    </>
  );
}
