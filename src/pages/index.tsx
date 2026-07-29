import Image from "next/image";

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
      <a href="/">Home</a>
      <a href="/events">Events</a>
      <a href="/aboutus">About Us</a>
      </nav>

      {data.map((ev)=>(
         <a key={ev.id} href={`/events/${ev.id}`}>
            <Image width={300} height={300} alt={ev.title} src={ev.image} /><h2>{ev.title}</h2><p>
               {ev.description}</p>
            </a>))}
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