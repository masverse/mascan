import SearchTestnet from '@/components/SearchTestnet'
import Link from 'next/link'

const page = () => {
    return (
        <main className="flex flex-col items-center relative">
            <SearchTestnet />
            <Link href="/" className="bg-slate-400 rounded-full px-3 py-2 font-bold text-white mt-4">
                MAINNET
            </Link>
        </main>
    )
}

export default page