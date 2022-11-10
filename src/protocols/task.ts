export type Task = {
  id?: number;
  title: string;
  description: string;
  date: string | Date;
  done: boolean;
  responsible: string;
};
