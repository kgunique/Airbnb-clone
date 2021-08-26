import Footer from "../components/Footer"
import Header from "../components/Header"
import {format} from "date-fns";
import { useRouter } from "next/dist/client/router";


function Search() {
    const router = useRouter();
    const {location, startDate, endDate, noOfGuest} = router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`;
    return (
        <div>
           <Header placeholder ={`${location} | ${range} | ${noOfGuest} guests`}/>

           <main className="flex">
            <section className="flex-grow pt-14 px-6">
                <p className="text-xs">300+ - {range} - for {noOfGuest} Guest</p>
                <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                    <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">Cancellation Flexibility</p>
                    <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">Types of Places</p>
                    <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">Rooms and Beds</p>
                    <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">Price</p>
                    <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">More filter</p>
                </div>
            </section>
           </main>
           <Footer/>
        </div>
    )
}

export default Search;
