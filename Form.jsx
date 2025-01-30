import { useState } from "react";

const Form = ({ closeForm }) => {

  const [values,setValues] = useState({
    firstname : "",
    lastname:"",
    email:"",
    gender:"",
    language:[],
  });


  const handleChanges = (e) => {
    setValues({...values,[e.target.name]:[e.target.value]});
  }

  const handleSubmit = () => {
    e.preventDefault();
    console.log(values);
    
  }

  console.log(values);
  
  return (
    <>
      <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-gray-300 w-[85%] h-[4640px]">
        <div className="bg-white w-[47%] h-[13%] border-1 border-[#F2ECFF] rounded-xl px-7 py-4 relative top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
          <form onSubmit={handleSubmit}>
            <div className="w-[90%]">
              <div className="flex justify-between pb-2">
                <h2 className="text-2xl leading-7 font-bold">
                  Get Started Today!
                </h2>
                <span onClick={closeForm}>X</span>
              </div>
              <h3 className="text-lg leading-5 mt-2">
                Fill in your details and take control of your tasks.
              </h3>
            </div>
            <div className="mt-3 flex justify-between flex-wrap w-[90%]">
              <div className="">
                <div>
                  <label className="text-md leading-6" htmlFor="firstname">
                    First Name
                  </label>
                </div>
                <div className="">
                  <input
                    className="bg-[#FFDEE287] p-2 rounded-sm text-[#424242CC] text-md leading-6"
                    placeholder="Enter your First Name"
                    type="text"
                    name="firstname"
                    onChange={(e) => handleChanges(e)}
                  />
                </div>
              </div>
              <div className="">
                <div>
                  <label className="text-md leading-6" htmlFor="lastname">
                    Last Name
                  </label>
                </div>
                <div>
                  <input
                    className="bg-[#FFDEE287] p-2 rounded-sm  text-[#424242CC] text-md leading-6"
                    placeholder="Enter your Last Name"
                    type="text"
                    name="lastname"
                    onChange={(e) => handleChanges(e)}
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <label
                  htmlFor="gender"
                  className="text-md leading-6 font-medium"
                >
                  Gender
                </label>
                <div className="flex">
                  <div className="w-[133px] bg-[#FFDEE287] py-2 px-3 mr-1">
                    <input
                      className="w-5"
                      type="radio"
                      name="gender"
                      id="male"
                      onChange={(e) => handleChanges(e)}
                    />
                    <label className="text-lg leading-6">Male</label>
                  </div>
                  <div className="w-[133px] bg-[#FFDEE287] py-2 px-3 mr-2">
                    <input
                      className="w-5"
                      type="radio"
                      name="gender"
                      id="female"
                      onChange={(e) => handleChanges(e)}
                    />
                    <label className="text-lg leading-6">Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-1 w-[35%]">
              <label
                className="text-lg leading-6 my-2 font-medium"
                htmlFor="languages"
              >
                Language
              </label>
              <br />
              <div className="my-1">
                <div className="bg-[#FFDEE287] py-2 my-1">
                  <input
                    className="w-5"
                    type="checkbox"
                    name="languages"
                    id=""
                  />
                  <span className="text-lg leading-6 bg-[#FFDEE287]">
                    English
                  </span>
                </div>
                <div className="bg-[#FFDEE287] py-2 my-1">
                  <input
                    className="w-5"
                    type="checkbox"
                    name="languages"
                    id=""
                  />
                  <span className="text-lg leading-6 bg-[#FFDEE287] px-1">
                    Hindi
                  </span>
                </div>
                <div className="bg-[#FFDEE287] py-2 my-1">
                  <input
                    className="w-5"
                    type="checkbox"
                    name="languages"
                    id=""
                  />
                  <span className="text-lg leading-6 bg-[#FFDEE287] px-1">
                    Marathi
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="text-md leading-6 font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id=""
                onChange={(e) => handleChanges(e)}
                placeholder="Enter your email address"
                className="w-[90%] text-md leading-6 text-[#424242CC] bg-[#FFDEE287] px-2 py-2"
              />
            </div>
            <div className="mt-2 p-1">
              <input
                className="align-middle w-6"
                type="checkbox"
                name="agreement"
                id=""
              />
              <label htmlFor="agreement" className=" text-sm leading-5">
                I agree to the{" "}
                <span className="text-[#FF3E54]">terms and conditions</span>
              </label>
            </div>
            <button
              className="mx-auto w-[90%] py-2 px-4 text-white bg-[#FF3E54] mt-1"
              type="submit"
            >
              Done
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
