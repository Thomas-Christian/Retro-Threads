import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
        <h1> HOME PAGE </h1>
        <p> ITems go hur </p>
        <Link to={'/item/new'}> Add </Link>
        </>
    )
}