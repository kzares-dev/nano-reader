import { component$, useContext } from "@builder.io/qwik";
import Book from "../book/book";
import { LayoutContext } from "~/context/layout-context";

const books = [
    {id:1},
    {id:2},
    {id:3},
    {id:1},
    {id:2},
    {id:3},
    {id:1},
    {id:2},
    {id:3},
    


]

export default component$(() => {

    const state = useContext(LayoutContext);

    return (
        <div class={`flex gap-5 pt-5 px-3 h-[100vh] overflow-auto pb-[20vh] ${state.type ? "flex-wrap" : "flex-col" } `} >
            {books.map(({ id }) => (
                <Book key={id} /> 
            ))}
        </div>
    )
})
