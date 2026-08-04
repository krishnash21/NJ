const EventPage=()=>{
    return (
        <h1>Our Single Event</h1>
    );
}

export default EventPage;

export async function getStaticPaths(){
    const data=await import("../../../../data/data.json");
    const allEvents=data.default.allEvents;

    const allPaths=allEvents.map((event: { id: string })=>{
        return{
            params:{
                id:event.id,
            },
        };
    });

    return{
        paths:allPaths,
        fallback:false,
    };
}
