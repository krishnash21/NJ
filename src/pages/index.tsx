import Image from "next/image";
import Link from "next/link";

type EventCategory={
   id:string;
   title:string;
   description:string;
   image:string;
};

const Page=({data}:{data:EventCategory[] })=>{
  return(
    <div>
    <header>
     <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}> 
       <Link href="/" >Home</Link>
       <Link href="/events" >Events</Link>
       <Link href="/aboutus">About Us</Link>
      </nav>

      {data.map((ev)=>(
         <Link key={ev.id} href={`/events/${ev.id}`} >
            <div style={{ position: "relative", width: 300, height: 300 }}>
               <Image src={ev.image} alt={ev.title} fill sizes="300px" loading="eager" style={{ objectFit: "cover" }} />
            </div>
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
         </Link>
      ))}
     </header>

     <footer className="mt-10">
      <p>© 2026 - Time to Code</p>
     </footer>
    </div>
  );
}

export default Page;

export async function getServerSideProps(){
   const {events_categories}=await import("../../data/data.json");
   return{
      props:{
         data:events_categories,
      },
   };
}