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
  return (
    <section className="container">
      <Header />
      <Tasks tasks={tasks} />
    </section>
  );
}

export default App;
