import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Card from "./Card";

function FreeBook() {
  // Ensure the category value matches exactly "Free"
  const filterData = list.filter((data) => data.category.trim() === "Free");

  // Debugging: Log the filtered data
  console.log("Filtered Data: ", filterData);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" max-w-screen-2xl container mx-auto px-4 md:px-20">
      <div>
        <h1 className="font-bold pb-2 text-xl">
          Free Offered Courses
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div className="">
        <Slider {...settings}>
          {filterData.length === 0 ? (
            <p>No free courses available</p>
          ) : (
            filterData.map((item) => (
              <Card item={item} key={item.id} />
            ))
          )}
        </Slider>
      </div>
    </div>
  );
}

export default FreeBook;
