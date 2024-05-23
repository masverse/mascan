import Search from "@/components/Search";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center relative">
      <Search />
      <Link href="/testnet" className="bg-slate-400 rounded-full px-3 py-2 font-bold text-white mt-4">
        TESTNET
      </Link>
    </main>
  );
}
