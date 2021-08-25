import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';

export default function Home({ exploreData,cardData }) {
  return (
    <div>
      <Head>
        <title>AIRBNB Clone</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* Header Component */}
      <Header/>
      {/* Banner Component */}
      <Banner/>
      <main>
        <section className="max-w-7xl mx-auto px-8 sm:px-16">
          <h2 className="text-4xl font-semibold pb-5 pt-6">Explore Nearby</h2>
          {/* fetch some data from the server .API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map(({img,location,distance}) => (
                <SmallCard 
                key={img}
                    img= {img} 
                    distance={distance} 
                    location = {location}
                />
            ))}
          </div> 
        </section>
        <section className="max-w-7xl mx-auto px-8 sm:px-16">
          <h2 className="text-4xl font-semibold pb-5 pt-6">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-x-scroll overflow-y-hidden  p-3 -ml-3">
          {cardData?.map(({img,title})=>(
            <MediumCard key={img} img={img} title={title}/>
          ))
          }
          </div>
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps(){
    const exploreData = await fetch('https://links.papareact.com/pyp').
    then(
      (res) =>  res.json()
    );

    const cardData = await fetch('https://links.papareact.com/zp1').
    then(
      (res)=>res.json()
    );
    return{
      props:{
        exploreData,
        cardData,
      }
    }
}
