import CourseGoal from "./CourseGoal"
import { type CourseGoal as CGoal } from "../App"

interface CourseGoalListProps {
    goals: CGoal[];
    onDeleteGoal: (id: number) => void
}

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps ){
    return (
        <ul>
      {goals.map(function(goal) {
        return (
        <li key={goal.id}>
            <CourseGoal id={goal.id} onDelete={onDeleteGoal} title={goal.title}>
                <p>{goal.description}</p>
            </CourseGoal>
        </li>
        );
      })}
      </ul>
    )
}