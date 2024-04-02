import React from "react";

function Price() {
  const priceTable = [
    {
      title: "Weekly Plan",
      price: "1 Matic",
      priceIcon: "weekly.svg",
      item: [
        {
          icon: "arrow.svg",
          item: "Intelligent Ai ChatBot",
        },
        {
          icon: "arrow.svg",
          item: "Unlimited answers of question",
        },
        {
          icon: "arrow.svg",
          item: "Avoid buying coin forever",
        },
        {
          icon: "arrow.svg",
          item: "No ad in background",
        },
        {
          icon: "arrow.svg",
          item: "Early access to new features",
        },
      ],
    },
    {
      title: "Monthly Plan",
      price: "3 Matic",
      priceIcon: "monthly.svg",
      item: [
        {
          icon: "arrow.svg",
          item: "Intelligent Ai ChatBot",
        },
        {
          icon: "arrow.svg",
          item: "Unlimited answers of question",
        },
        {
          icon: "arrow.svg",
          item: "Avoid buying coin forever",
        },
        {
          icon: "arrow.svg",
          item: "No ad in background",
        },
        {
          icon: "arrow.svg",
          item: "Early access to new features",
        },
        {
          icon: "arrow.svg",
          item: "15+ new category",
        },
      ],
    },
    {
      title: "Lifetime Plan",
      price: "5 Matic",
      priceIcon: "yearly.svg",
      item: [
        {
          icon: "arrow.svg",
          item: "Intelligent Ai ChatBot",
        },
        {
          icon: "arrow.svg",
          item: "Unlimited answers of question",
        },
        {
          icon: "arrow.svg",
          item: "Avoid buying coin forever",
        },
        {
          icon: "arrow.svg",
          item: "No ad in background",
        },
        {
          icon: "arrow.svg",
          item: "Early access to new features",
        },
        {
          icon: "arrow.svg",
          item: "Chatbot lifetime access",
        },
      ],
    },
  ];

  // sm:h-[1800px]

  return (
    <section className="price" href="/price">
      <div className="price-container h-full px-5 sm:px-10 pt-10 space-y-10">
        {/* text-content */}
        <div className="text-container flex flex-col md:flex-row gap-5 md:gap-5 items-center">
          <h2 className="header text-lg sm:text-xl font-semibold text-center w-full md:w-[50%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="description text-sm sm:text-base text-colors-quantum-silver w-full md:w-[50%] md:border-l-2 md:pl-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            laudantium repudiandae expedita nihil provident iste molestiae iusto
            modi vero autem quibusdam aliquid officiis culpa beatae magnam enim
            quos consequuntur neque.
          </p>
        </div>

        {/* price-content */}
        <div className="price-content">
          <ul className="price-list flex flex-wrap gap-5 md:gap-14 lg:gap-5 justify-center">
            {priceTable.map((pricing, index) => {
              return (
                <div
                  className="pricing-box w-[350px] min-h-[470px] flex flex-col items-center"
                  key={index + 1}
                >
                  <div
                    className="pricing-top relative pt-2"
                    style={{ background: "rgba(10, 14, 23, 0.5)" }}
                  >
                    <img
                      src="/assets/svg/pricing/pricing-top.svg"
                      className="w-full max-w-[200px]"
                      alt=""
                    />
                    <div className="title-container absolute top-1/4 justify-center flex flex-row items-center w-full gap-2">
                      <img
                        src={`/assets/svg/pricing/${pricing.priceIcon}`}
                        className="w-7"
                        alt=""
                      />
                      <h2>{pricing.title}</h2>
                    </div>
                  </div>

                  <div className="pricing-mid bg-gradient-to-b from-colors-quantum-silver/35 via-colors-quantum-silver/40 to-colors-quantum-silver/35  border h-[150px] w-full flex flex-col justify-center items-center">
                    <h2 className="text-center text-xl font-semibold">
                      {pricing.price}
                    </h2>
                    <p>/Only</p>
                  </div>

                  <div className="pricing-content w-[90%] h-full bg-gradient-to-b from-colors-quantum-silver/35 via-colors-quantum-silver/40 to-colors-quantum-silver/35">
                    <ul className="border-b mx-4 sm:mx-5 space-y-3 py-3">
                      {pricing.item.map((item, index) => {
                        return (
                          <li
                            className="list flex flex-row gap-2 items-start sm:items-center"
                            key={index + 1}
                          >
                            <img
                              src={`/assets/svg/${item.icon}`}
                              className="w-8"
                              alt=""
                            />
                            <p className="description text-sm">{item.item}</p>
                          </li>
                        );
                      })}
                    </ul>
                    <h2 className="text-lg sm:text-xl text-center items-center pt-5 uppercase">
                      Choose Plan
                    </h2>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Price;
