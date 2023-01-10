import { Link } from "react-router-dom";

export default function Home() {

    // let showItems = (
    //     <>
    //     {items.map((item) => {
    //         return (
    //             <h1>
    //                 {item._id}
    //             </h1>
    //         )
    //     })}
    //     </>
    // )
    return (
        <>
        <h1> HOME PAGE </h1>
        {/* { showItems } */}
        <Link to={'/item/new'}> Post Your Own </Link>
        </>
    )
}