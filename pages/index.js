import React, { useState } from "react";
import Head from "next/head";
import CardSection from "../components/CardSection/CardSection";
import Hero from "../components/HeroSection/Hero";
import { getPlatforms } from "../server/platforms.js";
import { useRouter } from "next/router";

const Home = (props) => {
  const [platforms, setPlatforms] = useState(props.platforms);
  const router = useRouter();
  return (
    <div className="bg-[rgb(0,0,0)] h-screen">
      <Head>
        <title>Streaming Compare</title>
        <meta name="description" content="Streaming Compare" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9013062630732036"
          crossorigin="anonymous"
        ></script>
      </Head>
      <section className={""}>
        <Hero />
      </section>
      <section className={" bg-[rgb(0,0,0)]"}>
        <CardSection platforms={platforms} />
      </section>
      <p
        className={"bg-[rgb(0,0,0)] text-white text-sm p-5 cursor-pointer"}
        onClick={() => {
          router.push({
            pathname: "/privacy",
          });
        }}
      >
        Privacy policy
      </p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const platforms = await getPlatforms();
  return {
    props: { platforms: JSON.parse(JSON.stringify(platforms)) },
  };
}

export default Home;
