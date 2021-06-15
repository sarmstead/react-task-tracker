import { useState } from 'react';

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor Appointment',
            day: 'July 1 at 1 PM',
            reminder: true
        },
        {
            id: 2,
            text: 'Dentist Appointment',
            day: 'July 2 at 1 PM',
            reminder: true
        },
        {
            id: 3,
            text: 'Mechanic Appointment',
            day: 'July 3 at 1 PM',
            reminder: true
        },
    ])
    return (
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            )
            )}
        </>
    )
}

export default Tasks;