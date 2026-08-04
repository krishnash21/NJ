import { GetStaticPropsContext } from "next";
import Image from "next/image";
import Link from "next/link";

type Event = {
    id: string;
    title: string;
    city: string;
    description: string;
    image: string;
    emails_registered: string[];
};

type EventsCategoryPageProps = {
    data: Event[];
    pageName: string;
};

const EventsCategoryPage=({data,pageName}: EventsCategoryPageProps)=>{
    return (
        <div>
            <h1>Events in {pageName}</h1>

            <div>
                {data.map((ev: Event)=>(
                    <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
                        <a>
                        <Image width={300} height={300} alt={ev.title} src={ev.image} />
                        <h2>{ev.title}</h2>
                        <p>{ev.description}</p>
                        </a>
                    </Link>
                ))}
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
    
    
    const data=allEvents.filter((ev: Event)=>ev.city.toLowerCase()===id?.toString().toLowerCase());
    return{
        props:{data, pageName: id}
    };
}
