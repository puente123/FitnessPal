const WorkoutDetails = ({ workout }) => {

    return(
        <div className = "workout_details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>        
        </div>
    )
}


export default WorkoutDetails

//this file creates a output to the website based on the workout that is passed