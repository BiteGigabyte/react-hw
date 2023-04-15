import Simpson from "./Simpson";

function Simpsons ({simpsonsData: simpsonsDatas}) {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <b><h2>Task 1</h2></b>
            <br/>
            {
                simpsonsDatas.map((value, index) => (<Simpson props={value} key={index}/>))
            }
        </div>
    )
}

export default Simpsons;
