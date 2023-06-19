import { useState } from "react";
import ProfileImage from "./assets/profile.png";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <main className="relative h-screen max-w-2xl mx-auto overflow-x-hidden scrollbar-hide bg-bgDark">
      <div className="p-8">
        <header className="pb-2">
          <div className="flex items-center">
            <img
              src={ProfileImage}
              className="inline-block w-12 h-12 bg-gray-400 rounded-full ring-2 ring-white"
              alt=""
            />
            <div className="flex flex-col flex-1 ml-4 font-jakartaPlus">
              <h1 className="text-base font-bold text-gray-400 ">Hello,</h1>
              <h2 className="text-xl font-bold text-gray-700">Ega Gofur</h2>
            </div>
          </div>
        </header>

        <section className="overflow-y-scroll h-[calc(100vh-12rem)] scrollbar-hide">
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-700 font-jakartaPlus">
              On Progress
              <span className="ml-2 font-normal text-gray-500">( 12 )</span>
            </h3>
            <div className="flex items-center justify-between p-4 mt-4 bg-white border-l-8 rounded-lg shadow-sm border-warning">
              <div className="flex flex-col max-w-xs md:max-w-lg font-jakartaPlus">
                <div className="mb-4 space-y-2">
                  <h4 className="text-base font-bold text-gray-700">
                    Create a new project
                  </h4>
                  <p className="text-sm font-medium text-gray-400">
                    Create a new project for the client Lorem, ipsum dolor sit
                    amet consectetur adipisicing elit. Delectus, quod!
                  </p>
                </div>
                <hr />
                <div className="flex gap-4 mt-4 text-sm font-semibold text-gray-500">
                  <h4>Today</h4>
                  <h4 className="text-sm">12:30 PM</h4>
                </div>
              </div>
              <label className="inline-flex items-center">
                <input type="checkbox" className="w-6 h-6 rounded-full" />
              </label>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-700 font-jakartaPlus">
              Complated
            </h3>
            <div className="flex items-center justify-between p-4 mt-4 bg-white border-l-8 rounded-lg shadow-sm border-danger">
              <div className="flex flex-col max-w-xs md:max-w-lg font-jakartaPlus">
                <div className="mb-4 space-y-2">
                  <h4 className="text-base font-bold text-gray-700 line-through">
                    Create a new project
                  </h4>
                  <p className="text-sm font-medium text-gray-400">
                    Create a new project for the client Lorem, ipsum dolor sit
                    amet consectetur adipisicing elit. Delectus, quod!
                  </p>
                </div>
                <hr />
                <div className="flex gap-4 mt-4 text-sm font-semibold text-gray-500">
                  <h4>Today</h4>
                  <h4 className="text-sm">12:30 PM</h4>
                </div>
              </div>
              <label className="inline-flex items-center">
                <input type="checkbox" className="w-6 h-6 rounded-full" />
              </label>
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
            <form action="" className="mt-8">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="name"
                  className="text-xl font-semibold text-text font-jakartaPlus"
                >
                  Title Task
                </label>
                <input
                  type="text"
                  placeholder="Add Task Name.."
                  className="py-4 border-none rounded-lg bg-form focus:ring-0 focus:outline-none"
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
                    className="py-4 border-none rounded-lg bg-form focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>
            </form>
            <div className="flex justify-between mt-8 space-x-4">
              <button
                onClick={handleModal}
                className="w-full py-4 text-xl font-semibold bg-white border shadow-sm border-primary hover:text-white text-text rounded-xl font-jakartaPlus hover:bg-primary"
              >
                Cancel
              </button>
              <button className="w-full py-4 text-xl font-semibold text-gray-100 border shadow-md rounded-xl font-jakartaPlus bg-primary hover:bg-primary/75">
                Create
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="relative mx-8">
          <button
            onClick={handleModal}
            className="absolute w-full py-4 text-xl font-semibold text-gray-100 border buttom-0 rounded-xl font-jakartaPlus bg-primary hover:bg-primary/75"
          >
            <span className="mr-4 text-2xl">+</span> Create New
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
