import React from "react";

// Importing icons
import { IoSend } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import { IoImage } from "react-icons/io5";

function Form({ close, proMember, address, freeTrial }) {
  const today = Date.now();
  const date = new Date(today);
  const expiredDate = date.toLocaleDateString("en-US");

  return (
    <form>
      {
        /* proMember?.address === address &&
        proMember?.expiredDate === expiredDate && */ <>
          <div className="h-[4rem] flex items-center justify-center mx-3 gap-4">
            <div className="w-[90%] flex items-center gap-2 bg-colors-quantum-silver/50 p-1 rounded-md">
              <input
                type="text"
                placeholder="Ask any question here..."
                className="w-[90%] p-2  bg-transparent  outline-none"
                rows="1"
                cols="1"
              />
              <div className="icons flex items-center gap-1">
                <span className="text-white text-2xl cursor-pointer">
                  <MdKeyboardVoice />
                </span>
                <span className="text-white text-2xl cursor-pointer">
                  <IoImage />
                </span>
              </div>
            </div>
            <button className="p-[.9rem] text-white rounded-md bg-colors-quantum-silver">
              <IoSend />
            </button>
          </div>
        </>
      }
    </form>
  );
}

export default Form;
