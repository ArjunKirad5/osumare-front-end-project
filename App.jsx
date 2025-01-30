import "./App.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Form from "./Form"
import { useState } from "react";

function App() {
  
  const [formToggle, setFormToggle] = useState(0);
  
  const openForm = () => {
    if (formToggle === 1) {
      setFormToggle(0)
    } else {
      setFormToggle(1);
    }
  }

  return (
    <>
      <div className="bg-[#FFFFFF] h-25 flex justify-evenly items-center">
        <div>
          <img
            className="w-30"
            src="https://s3-alpha-sig.figma.com/img/c9f8/8742/68b0097d93721c5c75506121f71732b2?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oebdLvRxAIZ0myRAhc-LKzrWXHDx2u~Tau1Ss4oo8lNjHML25B2m0BjPOjzKHnpZqQpFx0W34XlJQfnUmy1J4ef8hzbFUem~hhH4TkISPLF29yq08SO4OCKiSnI99Lwn57mkKF4m7ye3Ni7rjoZ05YQx8Ok9KQjqQzFwZAgTdMA4UFERVpy71-N-8c1y0RkVO-heHgFEQbneRdGZZ3etDBZ0rI7PgIMq1M~BxgAewbhHwzMegNYkIaB7SAenpBWsxg0uKIKBKjndr5HUObDZjihtBVZs3nnK8wzFHMKYZc8jW88gIn34A~CR7ZVuPVjGIfdo1pJiL2uUmgbodqU0OQ__"
          ></img>
        </div>
        <div className="h-5 text-md flex items-center">
          <div className="mx-2">About Us</div>
          <div className="mx-2">Features</div>
          <div className="mx-2">More Options</div>
          <div className="mx-2">Contact</div>
        </div>
        <div className="h-11 text-lg flex items-center">
          <button className="mx-2 px-7 py-1 border-1 border-[#FF3E54] rounded-sm text-[#FF3E54]">
            Log In
          </button>
          <button className="mx-2 px-7 py-1 border-1-none rounded-sm text-white bg-[#FF3E54] cursor-pointer" onClick={openForm}>
            Sign Up
          </button>
        </div>
      </div>
      <div className="bg-[#F7F7FB] flex-col justify-items-center pt-3">
        <div className="text-5xl w-[48%] text-center font-semibold">
          Simplify Your Life With Our Todo App
        </div>
        <div className="mt-4 text-md w-[45%] text-center text-[#6F6C90]">
          Stay organized and boost your productivity with our intuitive todo
          website. Experience a modern approach to task management that fits
          your lifestyle.
        </div>
        <div className="mt-2">
          <button className="mx-2 px-7 text-md py-1 border-1-none rounded-2xl text-white bg-[#FF3E54] cursor-pointer" onClick={openForm}>
            Get Started
          </button>
          <button className="mx-2 px-7 text-md py-1 border-1 border-[#FF3E54] rounded-2xl text-[#FF3E54]">
            Learn More
          </button>
        </div>

        <div className="flex justify-evenly w-[80%] h-[643px] mt-3">
          <div className="p-6 bg-[#FF3E54] w-[65%] rounded-2xl">
            <div>
              <span className="text-[98px] leading-[98px] text-[#FFFFFF80]">
                Organise
              </span>
              <br />
              <span className="text-[98px] leading-[98px] text-[#FFFFFFCC]">
                Achieve
              </span>
              <br />
              <span className="text-[98px] leading-[98px] text-[#FFFFFFCC]">
                Relax
              </span>
              <div className="mt-6 text-[20px] leading-[31px] text-left">
                Turn clutter into clarity, chaos into control, and dreams into
                done.bold
                <br /> visions into market success
              </div>
            </div>
            <div className="mt-10 md:mt-20 w-[45%] flex justify-between">
              <button className="px-5 py-2 border-0 bg-white rounded-4xl text-lg leading-[20px] text-black">
                Get Started Today
              </button>
              <button className="px-5 py-2 border-0 rounded-4xl text-white text-lg leading-[20px] bg-[#FFFFFF1A]">
                Discover Features
              </button>
            </div>
          </div>

          <div className="bg-[url(src/assets/person.png)] bg-cover bg-center opacity-80 rounded-2xl w-[30%]">
            <div className="px-8 py-6 flex justify-between items-center">
              <div className="">
                <span className="text-4xl text-[#FFFFFF]">Your Tasks</span>
                <br />
                <span className="text-4xl text-[#FFFFFF]">Our Tools</span>
              </div>
              <div>Pagination</div>
            </div>

            <div className="w-[80%] flex justify-between mx-auto relative top-40">
              <span className="text-2xl text-white font-semibold">
                <FaArrowLeft />
              </span>
              <span className="text-2xl text-white font-semibold">
                <FaArrowRight />
              </span>
            </div>

            <div className="px-6 flex mt-90 justify-between items-center">
              <div className="flex-col justify-evenly items-center">
                <div className="text-xl text-white font-semibold">
                  Logoipsum
                </div>
                <div className="text-lg text-white leading-[23px]">
                  Freddie Halvorson
                </div>
                <div className="text-lg text-white leading-[23px]">
                  Chief Productivity Entusiastic
                </div>
              </div>
              <div className="text-white font-semibold bg-black w-[40px] h-[40px] flex justify-center items-center rounded-[50%]">
                Play
              </div>
            </div>
          </div>
        </div>
        <div className="my-6 w-[70%] text-xl text-gray-500 font-semibold flex justify-evenly items-center">
          <span>Google</span>
          <span>Facebook</span>
          <span>Youtube</span>
          <span> Pinterest</span>
          <span>Twitch</span>
        </div>

        <div className="bg-[#FFFFFF] w-[100%] pt-7">
          <div className="mb-7 font-semibold mx-auto text-center w-[65%] text-4xl">
            Transform Your Productivity with Our Innovative To-Do List Features
          </div>

          <div className="w-[85%] flex justify-evenly items-center flex-wrap px-1 mt-5 mx-auto">
            <div className="w-[230px] h-[250px] bg-[#F7F7F7] p-2 m-1 rounded-xl">
              <div className="flex justify-between">
                <span>logo here</span>
                <span className="relative text-3xl font-bold text-gray-400">
                  01
                </span>
              </div>
              <div className="text-md font-extrabold leading-5 my-2 h-[40px]">
                User Friendly Interface
              </div>
              <div className="bg-[#FF3E54] w-[90px] h-[6px] rounded-2xl my-2"></div>
              <div className="text-lg font-normal leading-6">
                Our platform offers seamless task management to boost your
                efficiency.
              </div>
            </div>

            <div className="w-[230px] h-[250px] bg-[#F7F7F7] p-2 m-1 rounded-xl">
              <div className="flex justify-between">
                <span>logo here</span>
                <span className="relative text-3xl font-bold text-gray-400">
                  02
                </span>
              </div>
              <div className="text-md font-extrabold leading-5 my-2 h-[40px]">
                Collaborate & Share Effortlessly
              </div>
              <div className="bg-[#FF3E54] w-[90px] h-[6px] rounded-2xl my-2"></div>
              <div className="text-lg font-normal leading-6">
                Invite team members to work together and achieve your goals
                faster.
              </div>
            </div>

            <div className="w-[230px] h-[250px] bg-[#F7F7F7] p-2 m-1 rounded-xl">
              <div className="flex justify-between">
                <span>logo here</span>
                <span className="relative text-3xl font-bold text-gray-400">
                  03
                </span>
              </div>
              <div className="text-md font-extrabold leading-5 my-2 h-[40px]">
                Effortless Collaboration
              </div>
              <div className="bg-[#FF3E54] w-[90px] h-[6px] rounded-2xl my-2"></div>
              <div className="text-lg font-normal leading-6">
                Invite team members to work together and achieve your goals
                faster.
              </div>
            </div>

            <div className="w-[230px] h-[250px] bg-[#F7F7F7] p-2 m-1 rounded-xl">
              <div className="flex justify-between">
                <span>logo here</span>
                <span className="relative text-3xl font-bold text-gray-400">
                  04
                </span>
              </div>
              <div className="text-md font-extrabold leading-5 my-2 h-[40px]">
                Seamless Access
              </div>
              <div className="bg-[#FF3E54] w-[90px] h-[6px] rounded-2xl my-2"></div>
              <div className="text-lg font-normal leading-6">
                Stay connected and manage your tasks on the go with ease.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-white pt-10 relative">
        <div className="w-[78%] mx-auto px-1">
          <h2 className="text-5xl font-bold leading-14">
            Customer Testimonials
          </h2>
          <h3 className="mt-6 text-lg font-normal leading-7">
            This tool has transformed my productivity and organization!
          </h3>
          <div className="w-[48%] mt-16 h-[590px] border-17 border-[#FF3E54]"></div>
          <div className="w-[75%] mx-auto p-5 flex justify-between items-center absolute top-69 left-53 bg-white">
            <div className="w-[58%]">
              <h2 className="text-4xl font-bold leading-12">
                Using this website has made my tasks so much easier! I can't
                imagine my day without it."
              </h2>
              <div className="mt-4 flex items-center">
                <div className="bg-[#FF3E54] w-[30px] h-[30px]"></div>
                <div className="mx-3">
                  <h3 className="text-lg leading-5 font-bold">Sherri Cronin</h3>
                  <h3 className="text-md leading-6">
                    Project Manager, TechCorp
                  </h3>
                </div>
              </div>
              <div className="w-[92px] mt-5 flex justify-between">
                <div className="h-[40px] w-[40px] rounded-[50%] border-1 flex justify-center items-center border-[#FF3E54]">
                  <FaArrowLeft />
                </div>
                <div className="h-[40px] w-[40px] rounded-[50%] border-1 flex justify-center items-center bg-[#FF3E54] border-[#FF3E54]">
                  <FaArrowRight />
                </div>
              </div>
            </div>
            <div className="pt-2 pr-2 pb-2 border-l-0 border-16 border-[#FF3E54]">
              <img
                className="w-[348px] h-[370px] object-cover"
                src="https://s3-alpha-sig.figma.com/img/6bb1/ecf9/fd971651da8485b4f465f18a97a5df86?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=loufklJtevp7vtF8UaAOIF1bX1L532gZBHF6q-24xgKtBIJxwu6Ddvqa530qWHaOKtaS79jRfi8sKVbCmLv5wuJq7TzI7bnKEezUnSmPpKiXqxMPNQ4TaKOaZwpb94XWCuMlcL6cFnwOJz8s0Yf6WrA2-3KyUhUtdcTbxP9iwUjqf9cuMhwBv-64nlDuVtJh1BZoH9i~Kmb6kfgn9gBEx3PWdl7s0RxGcD49r-LxXO-iyK3OX3XfqjlhJ613Nw27sXKPgpJM2pNHWsupSqq~Kguvy-Caz6HsZ8SRE534AqgKtENFpbwe5l8Flz1olO3ue2BXJ~ItemNMSzErMeqabw__"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] mt-15 mx-auto md:flex items-center justify-between">
        <div className="w-[90%] md:w-[50%]">
          <img
            className="w-[100%]"
            src="https://s3-alpha-sig.figma.com/img/9ed3/2348/6d38c058a4c113138f4c9ac8b0cbc4ee?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H3MJNOcDhIrrX-B~txiKBzYAq4auROHhbbRGoBohtUrbCUlEaYMrLSJHQH-6Kf0R98C~5vYl1R6t42lRL3P7ZRgn0ilzRzx6GRX0HeCs6DBuB6EzOQ3x~BkiwLcgMQJqP~eiLG06IZevaZWMlmrhb-P7-d78H6Jw~UOO19n61pLTJYywUI7olj9dQVgC0HPpwJPm8KM6JCK1rF~-jCYuO13P6Ut8spCRiQPQgZHpKOXyqYsNjij2ZH6KZ~bqSBMrDJBCkz9lMy3sXDrtphl053UBpo1wj8ZmND~IvpUDbi4jwguKbXAgveARxjhSs1e~J-mm2wmgf~HS~zac5n8xkA__"
            alt=""
            srcset=""
          />
        </div>
        <div className="w-[45%]">
          <h2 className="text-5xl leading-15 font-bold my-4">
            Start Organizing Your Life Today
          </h2>
          <h3 className="text-lg leading-6 my-4">
            Join us now and transform your productivity with our intuitive to-do
            list platform!
          </h3>
          <span className="flex justify-start items-center my-2 sm:w-[90%] md:w-[65%]">
            <button className="w-[45%] flex justify-center items-center h-12 text-md leading-6 my-2 mx-1 px-6 py-3 bg-[#FF3E54] border-1 border-[#FF3E54] text-white">
              Sign Up
            </button>
            <button className="w-[45%] flex justify-center items-center h-12 text-md leading-6 my-2 mx-1 px-6 py-3 border-1 border-[#FF3E54] ">
              Learn More
            </button>
          </span>
        </div>
      </div>
      <div className="w-[80%] mx-auto p-5">
        <div className="flex justify-between">
          <div className="w-[40%]">
            <div className="w-[170px] h-[170px]">
              <img
                className="object-center"
                src="https://s3-alpha-sig.figma.com/img/c9f8/8742/68b0097d93721c5c75506121f71732b2?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oebdLvRxAIZ0myRAhc-LKzrWXHDx2u~Tau1Ss4oo8lNjHML25B2m0BjPOjzKHnpZqQpFx0W34XlJQfnUmy1J4ef8hzbFUem~hhH4TkISPLF29yq08SO4OCKiSnI99Lwn57mkKF4m7ye3Ni7rjoZ05YQx8Ok9KQjqQzFwZAgTdMA4UFERVpy71-N-8c1y0RkVO-heHgFEQbneRdGZZ3etDBZ0rI7PgIMq1M~BxgAewbhHwzMegNYkIaB7SAenpBWsxg0uKIKBKjndr5HUObDZjihtBVZs3nnK8wzFHMKYZc8jW88gIn34A~CR7ZVuPVjGIfdo1pJiL2uUmgbodqU0OQ__"
                alt=""
                srcset=""
              />
            </div>
            <h2 className="text-md leading-5 w-[85%]">
              Subscribe to our newsletter for the latest features and updates
              delivered to you.
            </h2>
            <div>
              <div className="w-[90%] flex flex-wrap justify-between items-center mt-4">
                <input
                  className="w-[70%] text-sm leading-5 p-2 border-1"
                  type="email"
                  name=""
                  id=""
                  placeholder="Your email here"
                />
                <button className="w-[28%] text-white py-2 px-5 text-sm leading-5 bg-[#FF3E54] rounded-sm">
                  Join
                </button>
              </div>
              <span className="text-xs leading-3">
                By subscribing, you consent to our Privacy Policy and agree to
                receive updates.
              </span>
            </div>
          </div>
          <div className="w-[50%] flex justify-evenly items-center">
            <div className="w-[130px]">
              <h3 className="text-sm leading-5 font-medium">Useful Links</h3>
              <div className="mt-2">
                <h3 className="text-sm leading-4 py-1.5">Home Page</h3>
                <h3 className="text-sm leading-4 py-1.5">About Us</h3>
                <h3 className="text-sm leading-4 py-1.5">Contact Us</h3>
                <h3 className="text-sm leading-4 py-1.5">Blog Posts</h3>
                <h3 className="text-sm leading-4 py-1.5">FAQs</h3>
              </div>
            </div>
            <div className="w-[130px]">
              <h3 className="text-sm leading-5 font-medium">Resources</h3>
              <div className="mt-2">
                <h3 className="text-sm leading-4 py-1.5">Help Center</h3>
                <h3 className="text-sm leading-4 py-1.5">User Guide</h3>
                <h3 className="text-sm leading-4 py-1.5">Community Forum</h3>
                <h3 className="text-sm leading-4 py-1.5">Feedback</h3>
                <h3 className="text-sm leading-4 py-1.5">Support</h3>
              </div>
            </div>
            <div className="w-[130px]">
              <h3 className="text-sm leading-5 font-medium">Connect With Us</h3>
              <div className="mt-2">
                <h3 className="text-sm leading-4 py-1.5">Facebook</h3>
                <h3 className="text-sm leading-4 py-1.5">Instagram</h3>
                <h3 className="text-sm leading-4 py-1.5">X</h3>
                <h3 className="text-sm leading-4 py-1.5">Linkedin</h3>
                <h3 className="text-sm leading-4 py-1.5">Youtube</h3>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>
          <div className="mt-7 flex justify-between items-end h-11 border-t-2">
            <div className="text-md leading-4">
              © 2024 Osumare. All rights reserved.
            </div>
            <div>
              <span className="text-md leading-4 underline mx-2">
                Privacy Policy
              </span>
              <span className="text-md leading-4 underline mx-2">
                Terms of Service
              </span>
              <span className="text-md leading-4 underline mx-2">
                Cookie Settings
              </span>
            </div>
          </div>
        </div>
      </div>
      {formToggle && <Form closeForm = {openForm}/>}
    </>
  );
}

export default App;
