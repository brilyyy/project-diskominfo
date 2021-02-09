import React from 'react'

const TambahData = () => {
    return(
        <div>
            <h1 className='mb-6 text-3xl font-bold'>Tambah Data</h1>
            <form>

            
            <div className='grid grid-cols-2 gap-8 border-collapse border-gray-300 border-2 p-3'>
                <div>
                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label for="forms-labelLeftInputCode">Full name</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Regular input" id="forms-labelLeftInputCode"/>
                        </div>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label for="forms-labelLeftInputCode">Full name</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Regular input" id="forms-labelLeftInputCode"/>
                        </div>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label for="forms-labelLeftInputCode">Full name</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Regular input" id="forms-labelLeftInputCode"/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label for="forms-labelLeftInputCode">Full name</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Regular input" id="forms-labelLeftInputCode"/>
                        </div>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label for="forms-labelLeftInputCode">Full name</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Regular input" id="forms-labelLeftInputCode"/>
                        </div>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label for="forms-labelLeftInputCode">Full name</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Regular input" id="forms-labelLeftInputCode"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex flex-row-reverse'>
                <button class="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:outline-none">Large</button>
            </div>
            </form>
        </div>
    )
}

export default TambahData