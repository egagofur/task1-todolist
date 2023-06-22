import { ITask } from "./ITask";

export const useFilterLength = (tasks: ITask[]) => {
  const unfinishedTasks = tasks.filter((task: ITask) => task.done === false);
  const lengthOfUnfinishedTasks = unfinishedTasks.length;

  const lengthOfFinishedTasks = tasks.length - lengthOfUnfinishedTasks;

  return {
    lengthOfUnfinishedTasks,
    lengthOfFinishedTasks,
  };
};
