import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function Upgrade() {
  const navigate = useNavigate();
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-colors-digital-gray"
      style={{ minHeight: "100vh" }}
    >
      <div className="min-w-[15rem] w-[18rem] flex justify-center">
        <Card
          color="gray"
          variant="gradient"
          className="w-full h-full max-w-[18rem] p-4 backdrop-blur-lg border border-gray-200/50 shadow-lg rounded-lg transition duration-300 ease-in-out hover:border-blue-500/50"
          style={{
            background: `linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3))`,
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backdropFilter = "blur(15px)";
            e.currentTarget.style.background = `linear-gradient(145deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.4))`; // Slightly more visible gradient on hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backdropFilter = "blur(10px)";
            e.currentTarget.style.background = `linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3))`; // Original gradient
          }}
        >
          {/* Your Card component here */}
          <Card
            color="gray"
            variant="gradient"
            className="w-full max-w-[20rem] p-4"
          >
            {/* card header */}
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 mb-4 rounded-none border-b border-white/10 pb-4 text-center flex items-center justify-between space-x-2"
            >
              <Typography
                variant="small"
                color="white"
                className="font-normal uppercase"
              >
                Pro Membership
              </Typography>
              <i
                className="text-white cursor-pointer hover:text-colors-ai-blue transition duration-300"
                onClick={() => navigate(-1)}
              >
                <FaXmark></FaXmark>
              </i>
            </CardHeader>

            {/* card body */}
            <CardBody className="p-0 space-y-3 border-b border-white/10 pb-4">
              <div className="text-container space-y-2">
                <h3>Six Month Plan</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  corporis aut illo facere temporibus nam facilis, enim vero
                  asperiores unde deserunt, iusto maiores mollitia sequi omnis
                  quas repellat id. Quo.
                </p>
                <h3>Only: 3 Matic</h3>
              </div>
              <div className="star-container text-blue-700 flex flex-row">
                <i>
                  <FaStar></FaStar>
                </i>
                <i>
                  <FaStar></FaStar>
                </i>
                <i>
                  <FaStar></FaStar>
                </i>
                <i>
                  <FaStar></FaStar>
                </i>
                <i>
                  <FaStar></FaStar>
                </i>
              </div>
            </CardBody>

            {/* card footer */}
            <CardFooter className="mt-6 p-0">
              <Button
                size="lg"
                color="white"
                className="p-2 hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-slate-600"
                ripple={false}
                fullWidth={true}
              >
                Upgrade
              </Button>
            </CardFooter>
          </Card>
        </Card>
      </div>
    </div>
  );
}

export default Upgrade;
