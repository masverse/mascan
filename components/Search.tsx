'use client'
import { useState } from "react";
import Link from "next/link";

const Search = () => {

    const [txid, settxid] = useState("")

    return (
            <div className="bg-white w-2/4 h-16 rounded-xl px-5 flex items-center mt-16 relative z-10">
                <input className="w-full outline-none text-black" type="text" placeholder="Transaction ID" onChange={(e) => settxid(e.target.value)}/>
                <Link href={`/${txid}`}>
                    <button className="bg-gray-800 outline-none text-white rounded-lg px-7 py-2">Search</button>
                </Link>
            </div>
    )
}

export default Search