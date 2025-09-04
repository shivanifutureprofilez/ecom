import react from 'react'

function Address() {
    const addresses = [
        {
            address_type: "Permanent Address",
            full_address: "123 Marine Drive, Mumbai, Maharashtra, India",
        },
        {
            address_type: "Residential Address",
            full_address: "258 MG Road, Bengaluru, Karnataka, India",
        },
        {
            address_type: "Office",
            full_address: "789 Market Street, San Francisco, California, USA",
        },
        {
            address_type: "Other",
            full_address: "789 Market Street, San Francisco, California, USA",
        },
    ];
    return (
        <div className='container mx-auto '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
                {addresses?.length === 0 ? (
                    <p className="text-[15px] font-medium text-[#46494D] ">
                        No Data Found !!
                    </p>
                )
                    :
                    (
                        addresses && addresses?.map((item, index) => (
                            <div key={index}
                                className='bg-[#f8f8f9] rounded-lg text-left px-3 py-3'>
                                <h4 className=' text-[15px] font-bold  uppercase text-[#46494D]'>{item?.address_type}</h4>
                                <p className=' text-[15px] font-medium text-[#46494D]'>{item?.full_address}</p>
                            </div>
                        ))
                    )}
            </div>
        </div>
    )
}

export default Address;