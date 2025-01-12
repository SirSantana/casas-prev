export default async function Modelos({params}) {
    const { id } = await params;
    return (
        <h1>Modelos {id}</h1>
    )
}