import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero title={"LET'S WATCH MOVIE TOGETHER"} imageUrl={"/home.svg"} />
    </>
  );
}
