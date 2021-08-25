import Image from 'next/image';
function SmallCard({img,location,distance}) {
    return (
        <div className="flex items-center m-2 mr-5 space-x-4 rounded-xl cursor-pointer
                        hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-in-out"
        >
            {/* left div contain img */}
            <div className="relative h-16 w-16">
                <Image 
                    src={img}
                    layout="fill"
                    className="rounded-lg"
                />
            </div>

            {/* Right div contain location and distance */}
            <div>
                <h2>{location}</h2>
                <h3 className="text-gray-500">{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard
