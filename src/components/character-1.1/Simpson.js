
function Simpson ({props: value}, {index: id}) {
    // let {value, index} = props;
    return (
        <div key={id}>
            <h2>{value.name}</h2>
            <img src={value.sImage} alt={value.name} />
            {/*<img src={props.sImage} alt={props.name}></img>*/}
            <p>{value.description}</p>
        </div>
    )
}

// export default Simpson;
export default Simpson;