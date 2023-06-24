import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { ITask } from "../helpers/ITask";
import { toast, Toaster } from "react-hot-toast";
import { useFilterLength } from "../helpers/useFilterLength";

import Header from "../components/Header";
import ModalTodo from "../components/ModalTodo";
import ButtonCreate from "../components/ButtonCreate";
import CardComplate from "../components/CardComplate";
import CardNotComplate from "../components/CardNotComplate";

function Todo() {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  const [update, setUpdate] = useState([] as ITask[]);
  const [form, setForm] = useState({
    title: "",
    desc: "",
    done: false,
    date: "",
    time: "",
  });

  // get data
  const getData = useCallback(async () => {
    const req = await axios.get("http://localhost:4000/api/todos");
    setTasks(req.data.data);
  }, []);

  // filter length task
  const {
    lengthOfUnfinishedTasks: lengthUnfinished,
    lengthOfFinishedTasks: lengthFinished,
  } = useFilterLength(tasks);

  // handle modal
  const handleModal = () => {
    setShowModal(!showModal);
    if (!showModal) {
      setForm({
        title: "",
        desc: "",
        date: "",
        time: "",
        done: false,
      });
    }
  };

  // handle checked
  const handleChecked = async (id: number, payload: ITask) => {
    await axios.patch(`http://localhost:4000/api/todos/${id}`, {
      done: !payload.done,
    });
    toast.success("Task Updated");
    getData();
  };

  // handle submit
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (update.length > 0) {
      await axios.patch(`http://localhost:4000/api/todos/${update[0].id}`, {
        title: form.title,
        desc: form.desc,
        date: form.date,
        time: form.time,
      });
      toast.success("Success Update Task");
      setUpdate([]);
      getData();
      return handleModal();
    }

    await axios.post("http://localhost:4000/api/todos", {
      title: form.title,
      desc: form.desc,
      date: form.date,
      time: form.time,
    });
    toast.success("Success Add New Task");

    handleModal();
    setForm({
      title: "",
      desc: "",
      done: false,
      date: "",
      time: "",
    });
    getData();
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:4000/api/todos/${id}`);
    toast.error("Task Deleted");
    getData();
  };

  const handleUpdate = async (id: number) => {
    const updateData = tasks.filter((task: ITask) => task.id === id);
    setUpdate(updateData);
    handleModal();
  };

  useEffect(() => {
    getData();
    setForm(update[0]);
  }, [update, getData]);

  return (
    <main className="relative h-screen max-w-2xl mx-auto overflow-x-hidden scrollbar-hide bg-bgDark">
      <div className="p-8">
        <Header />
        <Toaster />
        <section>
          <div className="mt-4">
            <h3 className="pb-2 text-xl font-bold text-gray-700 font-jakartaPlus">
              On Progress
              <span className="ml-2 font-normal text-gray-500">
                ( {lengthUnfinished} )
              </span>
            </h3>
            <div className="overflow-y-scroll max-h-80 scrollbar-hide">
              {tasks.length > 0 &&
                tasks
                  .filter((task: ITask) => task.done === false)
                  .map((task: ITask) => (
                    <CardNotComplate
                      key={task.id}
                      task={task}
                      handleUpdate={handleUpdate}
                      handleDelete={handleDelete}
                      handleChecked={handleChecked}
                    />
                  ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="pb-2 text-xl font-bold text-gray-700 font-jakartaPlus">
              Complated
              <span className="ml-2 font-normal text-gray-500">
                ( {lengthFinished} )
              </span>
            </h3>
            <div className="overflow-y-scroll max-h-80 scrollbar-hide">
              {tasks.length > 0 &&
                tasks
                  .filter((task: ITask) => task.done === true)
                  .map((task: ITask) => (
                    <CardComplate
                      key={task.id}
                      task={task}
                      handleUpdate={handleUpdate}
                      handleDelete={handleDelete}
                      handleChecked={handleChecked}
                    />
                  ))}
            </div>
          </div>
        </section>
      </div>

      {showModal ? (
        <ModalTodo
          setForm={setForm}
          handleModal={handleModal}
          handleSubmit={handleSubmit}
          form={form}
        />
      ) : (
        <ButtonCreate handleModal={handleModal} />
      )}
    </main>
  );
}

export default Todo;
