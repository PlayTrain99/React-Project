
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string,
  description: string,
  id: number;
}

export default function App() {
  const[goals, setGoals] = useState<CourseGoal[]>([]);
  
  function handelAddGoal(goal: string, summary: string){
    setGoals(function(prevGoals){
        const newGoal = {
            title: goal,
            description: summary,
            id: Math.random()
        };

        return [...prevGoals, newGoal];
    });
}

    function handleDeleteGoal(id: number) {
      setGoals(function(prevGoals) {
        const updatedGoals = prevGoals.filter(function(goal) {
          return goal.id !== id;
        });
        return updatedGoals;
      });
    }

    const [count ,setCount] = useState<number>(0)
    let plusone = () => setCount(count+1)

  return (
    <main>
      <Header image = {{src: goalsImg, alt: 'App logo'}}>
        <h1>Your Course goals</h1>
      </Header>
      <NewGoal onAddGoal={handelAddGoal}/>
      <CourseGoalList onDeleteGoal={handleDeleteGoal} goals={goals}/>

      <button onClick={plusone}>Click me</button>
      <div>Count:{count}</div>
    

    </main>
  )
}


