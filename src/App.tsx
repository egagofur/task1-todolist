import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";

import Header from "./components/Header";

export interface Task {
  id: number;
  title: string;
  desc: string;
  done: boolean;
  date: string;
  time: string;
  createdAt: string;
  updatedAt: string;
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [update, setUpdate] = useState([] as Task[]);
  const [form, setForm] = useState({
    title: "",
    desc: "",
    done: false,
    date: "",
    time: "",
  });

  const unfinishedTasks = tasks.filter((task: Task) => task.done === false);
  const lengthOfUnfinishedTasks = unfinishedTasks.length;

  const getData = useCallback(async () => {
    const req = await axios.get("http://localhost:4000/api/todos");
    setTasks(req.data.data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

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

  const handleChecked = async (id: number, payload: Task) => {
    await axios.patch(`http://localhost:4000/api/todos/${id}`, {
      done: !payload.done,
    });
    getData();
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (update.length > 0) {
      await axios.patch(`http://localhost:4000/api/todos/${update[0].id}`, {
        title: form.title,
        desc: form.desc,
        date: form.date,
        time: form.time,
      });
      setUpdate([]);
      getData();
      return handleModal();
    }
    await axios.post("http://localhost:4000/api/todos", {
      title: form.title,
      desc: form.desc,
      done: form.done,
      date: form.date,
      time: form.time,
    });
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
    getData();
  };

  const handleUpdate = async (id: number) => {
    const updateData = tasks.filter((task: Task) => task.id === id);
    setUpdate(updateData);
    handleModal();
  };

  useEffect(() => {
    return setForm(update[0]);
  }, [update]);

  return (
    <main className="relative h-screen max-w-2xl mx-auto overflow-x-hidden scrollbar-hide bg-bgDark">
      <div className="p-8">
        <Header />
        <section className="">
          <div className="mt-4">
            <h3 className="pb-2 text-xl font-bold text-gray-700 font-jakartaPlus">
              On Progress
              <span className="ml-2 font-normal text-gray-500">
                ( {lengthOfUnfinishedTasks} )
              </span>
            </h3>

            <div className="overflow-y-scroll max-h-80 scrollbar-hide">
              {tasks.length > 0 &&
                tasks
                  .filter((task: Task) => task.done === false)
                  .map((task: Task) => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between p-4 mt-4 bg-white border-l-8 rounded-lg shadow-sm border-warning"
                    >
                      <button
                        className="w-full text-left"
                        onClick={() => handleUpdate(task.id)}
                      >
                        <div className="flex flex-col max-w-xs md:max-w-lg font-jakartaPlus">
                          <div className="mb-4 space-y-2">
                            <h4 className="text-base font-bold text-gray-700">
                              {task.title}
                            </h4>
                            <p className="text-sm font-medium text-gray-400 ">
                              {task.desc}
                            </p>
                          </div>
                          <hr className="w-full min-w-max" />
                          <div className="flex gap-4 mt-4 text-sm font-semibold text-gray-500">
                            <h4>
                              {moment(task.updatedAt).format("DD MMMM YYYY")}
                            </h4>
                            <h4 className="text-sm">
                              {moment(task.updatedAt).format("h:mm a")}
                            </h4>
                          </div>
                        </div>
                      </button>
                      <label className="inline-flex items-center">
                        <input
                          checked={task.done}
                          onChange={() => handleChecked(task.id, task)}
                          type="checkbox"
                          className="w-6 h-6 rounded-full "
                        />
                      </label>
                    </div>
                  ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="pb-2 text-xl font-bold text-gray-700 font-jakartaPlus">
              Complated
            </h3>
            <div className="overflow-y-scroll max-h-80 scrollbar-hide">
              {tasks.length > 0 &&
                tasks
                  .filter((task: Task) => task.done === true)
                  .map((task: Task) => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between p-4 mt-4 bg-white border-l-8 rounded-lg shadow-sm border-danger"
                    >
                      <button
                        className="w-full text-left"
                        onClick={() => handleUpdate(task.id)}
                      >
                        <div className="flex flex-col max-w-xs md:max-w-lg font-jakartaPlus">
                          <div className="mb-4 space-y-2">
                            <h4 className="text-base font-bold text-gray-700 line-through">
                              {task.title}
                            </h4>
                            <p className="text-sm font-medium text-gray-400">
                              {task.desc}
                            </p>
                          </div>
                          <hr />
                          <div className="flex gap-4 mt-4 text-sm font-semibold text-gray-500">
                            <h4>
                              {moment(task.updatedAt).format("DD MMMM YYYY")}
                            </h4>
                            <h4 className="text-sm">
                              {moment(task.updatedAt).format("h:mm a")}
                            </h4>
                          </div>
                        </div>
                      </button>
                      <label className="flex flex-col items-center pb-6 space-y-4">
                        <button
                          onClick={() => handleDelete(task.id)}
                          className="p-1 text-white bg-red-500 rounded-md hover:bg-red-600"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <input
                          checked={task.done}
                          onChange={() => handleChecked(task.id, task)}
                          type="checkbox"
                          className="w-6 h-6 rounded-full"
                        />
                      </label>
                    </div>
                  ))}
            </div>
          </div>
        </section>
      </div>

      {showModal ? (
        <>
          <div className="absolute bottom-0 w-full p-8 bg-white shadow-[0px_-80px_100px_40px_#00000024] rounded-t-3xl">
            <h2 className="mb-4 text-2xl font-semibold text-center text-text">
              New Task ToDo
            </h2>
            <hr />
            <form action="" onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="name"
                  className="text-xl font-semibold text-text font-jakartaPlus"
                >
                  Title Task
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Add Task Name.."
                  required
                  className="py-4 border-none rounded-lg bg-form focus:ring-0 focus:outline-none"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>
              <div className="flex flex-col mt-4 space-y-2">
                <label
                  htmlFor="name"
                  className="text-xl font-semibold text-text font-jakartaPlus"
                >
                  Description
                </label>
                <textarea
                  name="desc"
                  id="desc"
                  cols={10}
                  rows={5}
                  value={form.desc || ""}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      desc: e.target.value,
                    })
                  }
                  placeholder="Add Descriptions.."
                  className="py-4 border-none rounded-lg bg-form focus:ring-0 focus:outline-none"
                ></textarea>
              </div>
              <div className="flex justify-between my-4 space-x-4">
                <div className="flex flex-col flex-1">
                  <label
                    htmlFor="date"
                    className="text-xl font-semibold text-text font-jakartaPlus"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    className="py-4 border-none rounded-lg bg-form focus:ring-0 focus:outline-none"
                    value={form.date}
                    required
                    onChange={(e) =>
                      setForm({
                        ...form,
                        date: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label
                    htmlFor="time"
                    className="text-xl font-semibold text-text font-jakartaPlus"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    required
                    className="py-4 border-none rounded-lg bg-form focus:ring-0 focus:outline-none"
                    value={form.time}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        time: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="flex justify-between mt-8 space-x-4 ">
                <button
                  onClick={handleModal}
                  className="w-full py-4 text-xl font-semibold bg-white border shadow-sm border-primary hover:text-white text-text rounded-xl font-jakartaPlus hover:bg-primary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full py-4 text-xl font-semibold text-gray-100 border shadow-md rounded-xl font-jakartaPlus bg-primary hover:bg-primary/75"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <div className="relative mx-8">
          <button
            onClick={handleModal}
            className="absolute top-0 w-full py-4 text-xl font-semibold text-gray-100 border buttom-0 rounded-xl font-jakartaPlus bg-primary hover:bg-primary/75"
          >
            <span className="mr-4 text-2xl">+</span> Create New
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
