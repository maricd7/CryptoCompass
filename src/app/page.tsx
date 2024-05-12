import Image from "next/image";
import MainContainer from "./components/MainContainer/MainContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainContainer />
    </main>
  );
}
