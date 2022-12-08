import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

function ContactMe() {
  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl  px-10 justify-evenly max-sm:justify-center max-sm:px-1 mx-auto items-center"
    >
      <h3 className="absolute  top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="font-semibold mt-10 text-center text-3xl max-sm:text-2xl">
          I have got just what you need.
          <span className="decoration-[#F7AB0a]/50 underline  max-sm:block">
            Lets Talk
          </span>
        </h4>

        <div className="space-y-10 ">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <a className="text-2xl" href="tel:+998976512125">
              +(97)-651-21-25
            </a>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl  max-sm:text-xl">
              asadbeklatipov176w@gmail.com
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">123 Developer Lane</p>
          </div>
        </div>
      </div>
      <form
        // onSubmit={onSubmit}
        className="flex flex-col mt-4 text-center space-y-2 w-fit mx-auto"
      >
        <div className="flex max-sm:flex-col w-full space-x-2 max-sm:space-x-0 max-sm:space-y-2">
          <input
            // value={nameinp}
            // onChange={onNamechange}
            placeholder="Name"
            type={"text"}
            className="contactInput"
          />
          <input
            // value={emailInp}
            // onChange={onEmailChange}
            placeholder="Email"
            type={"text"}
            className="contactInput"
          ></input>
        </div>
        <input
          // value={subjectInp}
          // onChange={onSubjectChange}
          placeholder="Subject"
          type={"text"}
          className="contactInput"
        />
        <textarea
          // value={messageInp}
          // onChange={onMessageChange}
          placeholder="Message"
          className="contactInput"
        />

        <button
          type="submit"
          className="bg-[#F7AB0A]  py-5 px-10 rounded-md text-black font-bold text-lg"
        >
          Submit
        </button>
      </form>
      {/* <ToastContainer theme="dark" position="top-left" /> */}
    </div>
  );
}

export default ContactMe;
