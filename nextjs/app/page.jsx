// import Image from "next/image";
import { Header } from "./components/Header.jsx";
import { Body } from "./components/Body.jsx";
import { Dashboard } from "./components/Dashboard.jsx";

// Main component
export default function Home() {
  return (
    <div className="w-[95%] m-auto font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Body />
      <Dashboard />
      {/* <div className="flex justify-center items-center mt-4 mb-4 p-4 bg-white rounded-lg shadow-md">
        <Image src="/Logo.png" alt="Logo" width={200} height={200} />
      </div> */}
    </div>
  );
}
