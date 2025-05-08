// import Image from "next/image";
import {Header} from "./components/Header.jsx";
import {Body} from "./components/Body.jsx";
import { Dashboard } from "./components/Dashboard.jsx";

// Main component
export default function Home() {
  return (
    <div className="w-[95%] m-auto font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Dashboard />
      <Body />
    </div>
  );
}
