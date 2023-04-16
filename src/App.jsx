import "./App.css";

function App() {
  return (
    <>
      {/* section-header */}

      <header className="text-gray-700 border-b ">
        <div
          className="flex container mx-auto p-5 flex-col md:flex-row
         items-center"
        >
          <a className=" font-medium text-gray-900 mb-4 md:z-0" href="">
            <span className=" text-blue-700 text-xl ml-3 ">Youichi,Page</span>
          </a>
          <nav className=" md:ml-auto text-base">
            <a className=" mr-5 hover:text-red-400 duration-300" href="#home">
              Home
            </a>
            <a className=" mr-5 hover:text-red-400 duration-300" href="#blog">
              Blog
            </a>
            <a className=" mr-5 hover:text-red-400 duration-300" href="#about">
              About
            </a>
            <a className=" mr-5 hover:text-red-400 duration-300" href="#skills">
              Skills
            </a>
            <a
              className=" mr-5 hover:text-red-400 duration-300"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
      {/* section-Home */}
      <section className=" text-gray-700 border-b" id="home">
        <div className="flex mx-10 my-6 px-5 items-center flex-col md:flex-row ">
          <div className="">
            <h1 className="text-3xl sm:text-6xl">
              Hi! <br />
              Im,Sugi-Osan
              <br />
              52 years old
            </h1>
            <p className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A id
              praesentium eligendi laudantium, aut soluta excepturi doloremque
              asperiores recusandae deleniti!
            </p>
            <button className=" py-1 mb-3 bg-green-400 w-16  rounded-md text-gray-500">
              Contact
            </button>
          </div>
          <div className="">
            <img className=" rounded-xl" src="./img/macicon.png" alt="" />
          </div>
        </div>
      </section>

      {/* section-About */}
      <section id="about" className=" text-gray-700 container">
        <div className=" container px-5 py-20 mx-auto text-center">
          <h2 className=" text-center text-2xl text-gray-900">About Me</h2>
          <p className="pb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            tempora.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sit
            veniam repellendus! Accusamus sunt vel beatae consequatur maiores
            assumenda vitae doloremque molestias laboriosam aliquam. Perferendis
            alias optio, in, praesentium laboriosam recusandae, rem voluptas
            quis beatae architecto vitae distinctio eos libero natus voluptatem
            dolore necessitatibus nemo assumenda ab dolorum. Dolore suscipit cum
            ipsum laborum iusto, voluptate quo quos inventore veritatis
            excepturi!
          </p>

          {/* About-cade */}
          <div className=" flex  justify-between container mt-8  flex-wrap">
            {/* About-cade1 */}
            <div className=" flex  md:w-1/3 p-4">
              <div className=" bg-gray-200 rounded-lg p-8">
                <div className=" flex items-center ">
                  <div className=" bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 9V13.1707C9.83481 13.5825 9 14.6938 9 16C9 17.6569 10.3431 19 12 19C13.6569 19 15 17.6569 15 16C15 14.6938 14.1652 13.5825 13 13.1707V9H11ZM11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12 5C15.866 5 19 8.13401 19 12V13H17V12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12V13H5V12C5 8.13401 8.13401 5 12 5Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className=" text-gray-900 text-lg font-medium ">
                    Sugi osan
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat at, ipsam modi aliquam ut eaque eligendi sint quae
                  vitae deleniti.
                </p>
              </div>
            </div>

            {/* About-cade2*/}
            <div className=" flex  md:w-1/3 p-4">
              <div className=" bg-gray-200 rounded-lg p-8">
                <div className=" flex items-center ">
                  <div className=" bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 9V13.1707C9.83481 13.5825 9 14.6938 9 16C9 17.6569 10.3431 19 12 19C13.6569 19 15 17.6569 15 16C15 14.6938 14.1652 13.5825 13 13.1707V9H11ZM11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12 5C15.866 5 19 8.13401 19 12V13H17V12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12V13H5V12C5 8.13401 8.13401 5 12 5Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className=" text-gray-900 text-lg font-medium ">
                    Sugi osan
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat at, ipsam modi aliquam ut eaque eligendi sint quae
                  vitae deleniti.
                </p>
              </div>
            </div>

            {/* About-cade3*/}
            <div className=" flex  md:w-1/3 p-4">
              <div className=" bg-gray-200 rounded-lg p-8">
                <div className=" flex items-center ">
                  <div className=" bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 9V13.1707C9.83481 13.5825 9 14.6938 9 16C9 17.6569 10.3431 19 12 19C13.6569 19 15 17.6569 15 16C15 14.6938 14.1652 13.5825 13 13.1707V9H11ZM11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12 5C15.866 5 19 8.13401 19 12V13H17V12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12V13H5V12C5 8.13401 8.13401 5 12 5Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className=" text-gray-900 text-lg font-medium ">
                    Sugi osan
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat at, ipsam modi aliquam ut eaque eligendi sint quae
                  vitae deleniti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
