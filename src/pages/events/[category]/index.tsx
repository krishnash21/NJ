import { GetStaticPropsContext } from "next";

const EventsCategoryPage=()=>{
    return (
        <div>
            <h1>Events in London</h1>

            <div>
                <a href="/events/london/ev1">Event 1</a>
                <a href="">Event 2</a>
                <a href="">Event 3</a>
                <a href="">Event 4</a>
                <a href="">Event 5</a>
                <a href="">Event 6</a>
            </div>
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

export async function getStaticProps(context: GetStaticPropsContext){
    console.log(context);
    const id=context.params?.category;
    const {allEvents}=await import('../../../../data/data.json');
    
    
    const data=allEvents.filter((ev)=>ev.city===id);
    return{
        props:{data}
    };
}
