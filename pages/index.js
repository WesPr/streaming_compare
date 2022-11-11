import React, { useState } from "react";
import Head from "next/head";
import CardSection from "../components/CardSection/CardSection";
import Hero from "../components/HeroSection/Hero";
import { getPlatforms } from "../server/platforms.js";
import { useRouter } from "next/router";
import CookieConsent from "react-cookie-consent";

export function enableGoogleAdsense() {
  const head = document.getElementsByTagName("head")[0];
  const scriptElement = document.createElement(`script`);
  scriptElement.type = `text/javascript`;
  scriptElement.async;
  scriptElement.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`;
  scriptElement.crossOrigin = "anonymous";
  head.appendChild(scriptElement);
}

const Home = (props) => {
  const [platforms, setPlatforms] = useState(props.platforms);
  const router = useRouter();
  return (
    <div className="bg-[rgb(0,0,0)] h-screen">
      <Head>
        <title>Streaming Compare</title>
        <meta name="description" content="Streaming Compare" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="CookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        onAccept={() => enableGoogleAdsense()}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span
          style={{ fontSize: "10px", cursor: "pointer" }}
          onClick={() => {
            router.push({
              pathname: "/privacy",
            });
          }}
        >
          More Information
        </span>
      </CookieConsent>
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

export async function getServerSideProps(cxt) {
  const platforms = await getPlatforms();
  return {
    props: { platforms: JSON.parse(JSON.stringify(platforms)) },
  };
}

export default Home;
