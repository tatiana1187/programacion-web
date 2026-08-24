export default function Persona(props){
    const {nombre, apellido} = props

    return(
    <div>
    <h1>{nombre} {apellido}</h1>
    <p>verduleria</p>
    <ul>papa</ul>
    <ul>cebolla</ul>
    <ul>lechuga</ul>
    </div>
)
}