import React, { SyntheticEvent } from "react";

export interface ITask {
  id: number;
  title: string;
  desc: string;
  done: boolean;
  date: string;
  time: string;
  createdAt: string;
  updatedAt: string;
}

export interface ModalTodoProps {
  setForm: React.Dispatch<
    React.SetStateAction<{
      title: string;
      desc: string;
      done: boolean;
      date: string;
      time: string;
    }>
  >;
  handleModal: () => void;
  handleSubmit: (e: SyntheticEvent) => Promise<void>;
  form: {
    title: string;
    desc: string;
    date: string;
    time: string;
    done: boolean;
  };
}

export interface CardProps {
  task: ITask;
  handleUpdate: (id: number) => void;
  handleDelete: (id: number) => void;
  handleChecked: (id: number, task: ITask) => void;
}
