
const Title = () => {
    return (
        <>
            <div className='bg-gray-200 h-12 w-full flex items-center'>
                <p className="px-10 flex-1" >Tepharm Assent Management Solution</p>
                <div className="flex items-center pr-10 gap-3">
                    <button className="h-7 w-7 bg-gray-400 rouned hover:bg-gray-500 hover:color-">AB</button>
                    <div className="flex flex-col">
                        <p>Abhinav</p>
                        <span className="font-light text-xs">Cell removal group</span>
                    </div>
                </div>


            </div>
            <div className='bg-gray-200 h-12 w-full flex items-center my-5'>
                <p className="px-10 flex-1" >Disassembly Electrolyzer</p>
            </div>
        </>
    )
}

export default Title