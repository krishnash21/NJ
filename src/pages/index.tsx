const Page=({data})=>{
  return(
    <div>
    <header>
     <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}> 
      <img />
      <a href="/">Home</a>
      <a href="/events">Events</a>
      <a href="/aboutus">About Us</a>
      </nav>

      {data.map((ev)=>(
         <a key={ev.id} href={`/events/${ev.id}`}>
            <Image src={ev.image} /><h2>{ev.title}</h2><p>
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
   console.log(events_categories);
   return{
      props:{
         data:events_categories,
      },
   };
}