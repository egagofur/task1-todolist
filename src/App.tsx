import ProfileImage from "./assets/profile.png";

function App() {
  return (
    <main className="relative max-w-2xl min-h-screen mx-auto bg-bgDark">
      <div className="p-8">
        <header>
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

        <section>
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
      <div className="absolute bottom-0 w-full p-8">
        <button className="w-full py-4 text-xl font-semibold text-gray-100 border rounded-xl font-jakartaPlus bg-primary hover:bg-primary/75">
          <span className="mr-4 text-2xl">+</span> Create New
        </button>
      </div>
    </main>
  );
}

export default App;
