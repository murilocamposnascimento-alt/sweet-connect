import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  return <main style={{minHeight:"100vh",background:"#090909",color:"#f7f4ed",display:"grid",placeItems:"center",fontFamily:"sans-serif"}}><h1>Escritório Gastrobar</h1></main>;
}
