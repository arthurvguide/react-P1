function Person({name, age, job}) {
    return (
        <div>
            <img src={props.photo} alt={name} />
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Job: {job}</p>
        </div>
    )
}

export default Person 