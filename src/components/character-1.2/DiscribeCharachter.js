// import Discribe from "./Discribe";

function DiscribeCharachter ({props}) {
    // let Discribes = props.results.map(value => {
    // props.results.map(value => {
    let discribe = props.results;
    return discribe.map(value => (
        <div key={value.id}>
            <hr/>
            <h3>{value.id} {value.name}</h3>
            <img src={value.image} alt={value.name} />
            {/*<img src={props.sImage} alt={props.name}></img>*/}
            <h3>{value.species}</h3>
            <h3>{value.gender}</h3>
            <p>{value.status}</p>
        </div>
        )
    )
}


export default DiscribeCharachter;