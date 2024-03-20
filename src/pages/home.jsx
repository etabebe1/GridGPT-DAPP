import React from "react";

// Internal Import
import { useStateContext } from "../context/context";

function Home() {
  const { listMembership } = useStateContext();

  return (
    <div className="text-2xl">
      <button
        onClick={() => listMembership()}
        className="border-1 rounded border-gray-500 m-1"
      >
        List Membership
      </button>
    </div>
  );
}

export default Home;
