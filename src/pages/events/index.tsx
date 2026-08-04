import Image from "next/image";
import Link from "next/link";

type EventCategory = {
  id: string;
  title: string;
  description: string;
  image: string;
};

type EventsPageProps = {
  data: EventCategory[];
};

const EventsPage=({data}: EventsPageProps)=>{
    return (
     <div>
      <h1>Event Page</h1>
      <div>
         {data.map((ev: EventCategory)=>(
            <Link key={ev.id} href={`/events/${ev.id}`} >
               <div style={{ position: "relative", width: 300, height: 300 }}>
                  <Image src={ev.image} alt={ev.title} fill sizes="300px" style={{ objectFit: "cover" }} />
               </div>
               <h2>{ev.title}</h2>
            </Link>
         ))}
      </div>
     </div>
    );
}

export default EventsPage;

export async function getStaticProps(){
   const {events_categories}=await import("../../../data/data.json");
   return {
      props:{
         data: events_categories,
      },
   };
}

