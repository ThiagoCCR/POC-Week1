export type TaskEntity = {
  id: number;
  title: string;
  description: string;
  date: string | Date;
  done: boolean;
  responsible: string;
};

export type Task = Omit<TaskEntity, "id">;
