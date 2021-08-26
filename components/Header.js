import Image from "next/image"
import { SearchIcon,GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid'
import {useState} from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';



function Header() {
    const [SearchInput , setSearchInput] = useState("");
    const [startDate,setStartDate] =useState(new Date());
    const [endDate,setEndDate] = useState(new Date());
    
    const handleSelect = (ranges) =>{
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    
    const selectionRange = {
        startDate:startDate,
        endDate:endDate,
        key:'selection'
    }
   
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* left part div */}
            <div className="relative flex items-center h-10 cursor-pointer">
                <Image
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            {/* Center Part div ---- Search Bar*/}
            <div className="flex items-center md:border-2 rounded-full md:shadow-sm">
                <input 
                    value={SearchInput}
                    onChange={(e)=>setSearchInput(e.target.value)}
                    className="pl-5 bg-transparent outline-none flex-grow" 
                    type="text" 
                    placeholder="Search" 
                />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white cursor-pointer rounded-full p-2 md:mx-2" />
            </div>
            {/* Right part div */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer space-x-5">Become a Host</p>
                <div className= "h-6">
                <GlobeAltIcon className= "h-6 cursor-pointer"/>
                </div>
                <div className = "flex items-center border-2  rounded-full space-x-2 p-2">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon  className="h-6"/>
                </div>
            </div>
            { SearchInput && (
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRangePicker 
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#fd5b61"]}
                        onChange={handleSelect}
                    />
                </div>
            )}
        
        </header>
    )
}

export default Header
