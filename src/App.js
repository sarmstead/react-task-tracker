import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
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
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => 
    task.id !== id
    ))
  }

  return (
    <section className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No tasks to show!'}
    </section>
  );
}

export default App;
