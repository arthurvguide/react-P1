function Person({name, age, job, photo}) {
    return (
        <div>
            <img src={photo} alt={name} />
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Job: {job}</p>
        </div>
    )
}

export default Person 