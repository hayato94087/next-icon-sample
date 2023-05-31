import Image from "next/image";
import Link from "next/link";
import Login from "./login";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-white">
      <Login />
    </main>
  );
}
