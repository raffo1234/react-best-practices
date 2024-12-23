import Link from "next/link";
import LocalStorage from "./components/LocalStorage";

export default function Home() {
  return (
    <main className="bg-slate-100 w-full h-full p-10">
      <section>
        <LocalStorage />
      </section>
    </main>
  );
}
