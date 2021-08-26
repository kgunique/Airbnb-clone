function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4 text-sm cursor-pointer text-gray-800">
                <h3 className="font-bold">ABOUT</h3>
                <p>How Airbnb Work</p>
                <p>News Room</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            <div className="space-y-4 text-sm cursor-pointer text-gray-800">
                <h3 className="font-bold">COMMUNITY</h3>
                <p>Diversity & Belonging</p>
                <p>Airbnb Associates</p>
                <p>Frontline Stays</p>
                <p>Guest Referrals</p>
                <p>Airbnb.org</p>
            </div>
            <div className="space-y-4 text-sm cursor-pointer text-gray-800">
                <h3 className="font-bold transform-uppercase">HOST</h3>
                <p>Host your home</p>
                <p>Host an Online Experience</p>
                <p>Host an Experience</p>
                <p>Responsible hosting</p>
                <p>Resource Centre</p>
            </div>
            <div className="space-y-4 text-sm cursor-pointer text-gray-800">
                <h3 className="font-bold">SUPPORT</h3>
                <p>Our COVID-19 Response</p>
                <p>Help Centre</p>
                <p>Cancellation options</p>
                <p>Neighbourhood Support</p>
                <p>Trust & Safety</p>
            </div>
        </div>
    )
}

export default Footer
