// import Image from "next/image";
import {Header} from "./components/Header.jsx";
import {Body} from "./components/Body.jsx";

export default function Home() {
  return (
    <div className="w-[95%] m-auto font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Body />
    </div>
  );
}
