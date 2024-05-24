
export default async function Page({ params }: { params: { id: string } }) {
    async function search() {
        try {
            const res = await fetch(`${process.env.NEXT_MAINNET_FETCH_URL}${params.id}`)
            if (!res.ok) {
                throw new Error('Failed to fetch data')
            }
            return res.json()
        } catch (error) {
            console.log("Failed to fetch data, error:", error)
            return null
        }
    }

    const info = await search();
    if (!info) {
        return (
            <div className="flex flex-col items-center w-full">
                <div className="w-full px-10 md:px-24 lg:px-56">
                    <p className="text-xl md:text-3xl font-bold mt-8 md:mt-16 text-white">Transaction Details</p>
                    <div className="rounded-3xl flex flex-col items-center mt-8 py-8 px-4 h-fit border-0 border-gray-200 break-all text-white bg-white/30 backdrop-blur-md text-[13px] md:text-[17px]">
                        <p className=" font-semibold text-[25px]">Failed to fetch transaction details. Please try again later.</p>
                    </div>
                </div>
            </div>
        );
    }

    const { timestamp, hash, block, result, from } = info
    const date = new Date(timestamp);

    return (
        <>
            <div className="flex flex-col items-center w-full">
                <div className="w-full px-10 md:px-24 lg:px-56">
                    <p className="text-xl md:text-3xl font-bold mt-8 md:mt-16 text-white">Transaction Details</p>
                    <div className="rounded-3xl flex flex-col items-center mt-8 py-8 px-4 h-fit border-0 border-gray-200 break-all text-white bg-white/30 backdrop-blur-md text-[13px] md:text-[17px]">
                        <div className="flex font-semibold w-full gap-4 p-4">
                            <p className="flex justify-start w-[150px] md:w-[180px]">TX ID:</p>
                            <p className="flex w-full justify-start">
                                {hash}
                            </p>
                        </div>
                        <div className="flex font-semibold w-full gap-4 p-4 items-center">
                            <p className="flex justify-start w-[180px]">Status:</p>
                            <div className="flex w-full justify-start">
                                {result == "success" ?
                                    <div className="flex px-3 py-1 gap-2 bg-green-200 rounded-md items-center">
                                        <span className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></span>
                                        <p className="text-green-500 text-sm">Success</p>
                                    </div>
                                    :
                                    <div className="flex px-3 py-1 gap-2 bg-red-200 rounded-md items-center">
                                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                        <p className="text-red-500 text-sm">Failed</p>
                                    </div>}
                            </div>
                        </div>
                        <div className="flex font-semibold w-full gap-4 p-4">
                            <p className="flex justify-start w-[150px] md:w-[180px] break-normal">Timestamp:</p>
                            <p className="flex w-full justify-start">
                                {date.toString()}
                            </p>
                        </div>
                        <div className="flex font-semibold w-full gap-4 p-4">
                            <p className="flex justify-start w-[180px]">Block Number:</p>
                            <p className="flex w-full justify-start">
                                {block}
                            </p>
                        </div>
                        <div className="flex font-semibold w-full gap-4 p-4">
                            <p className="flex justify-start w-[180px]">From Wallet:</p>
                            <p className="flex w-full justify-start">
                                {from.hash}
                            </p>
                        </div>
                    </div>

                    <div className="text-[13px] md:text-[16px] rounded-2xl flex flex-col items-center mt-8 h-fit border-0 border-gray-200 break-all text-white bg-white/30 backdrop-blur-md mb-24">
                        <div className="flex font-semibold w-full px-5 py-4 md:px-8 justify-between items-center gap-6">
                            <p className="flex justify-start break-normal">You're able to request for access. Click here to request for access</p>
                            <button className="bg-gray-300 outline-none text-[#8b8b8b] rounded-lg md:px-5 md:py-2 px-2 py-2 w-fit break-keep cursor-not-allowed before:content-['Request'] hover:before:content-['Coming_Soon!']">Request</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
