import type { NextPage } from "next";
import { Box } from "../components/Box";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Box />
      <h1>
        <div>Hey, I'm Adam.</div>
        <div>Full Stach Web</div>
        <div>Developer</div>
      </h1>
    </Layout>
  );
};

export default Home;
