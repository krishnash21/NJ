import { GetStaticProps } from "next";

const EventsCategoryPage=()=>{
    return (
        <div>
            <h1>Events in London</h1>

            <a href="/events/event1">Event 1</a>
            <a href="/events/event2">Event 2</a>
            <a href="/events/event3">Event 3</a>
            <a href="/events/event4">Event 4</a>
            <a href="/events/event5">Event 5</a>
            <a href="/events/event6">Event 6</a>
        </div>
    );
}

export default EventsCategoryPage;

export async function getStaticPaths(){

    const {events_categories}=await import ("../../../../data/data.json");
    const allPaths= events_categories.map(ev=>{
        return{
            params:{
                category: ev.id.toString(),
            },
        };
    });
    console.log(allPaths);

    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context: GetStaticProps){
    console.log(context);
    return{
        props:{}
    };
}


