import { ModalTodoProps } from "../helpers/ITask";

const ModalTodo: React.FC<ModalTodoProps> = ({
  handleSubmit,
  setForm,
  handleModal,
  form,
}) => {
  return (
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
  );
};

export default ModalTodo;
