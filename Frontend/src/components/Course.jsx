import React from "react";
import Card from "./Card";
import list from "../../public/list.json";
import { Link } from "react-router-dom";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="mt-28 flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-600">Here :)</span>
          </h1>
          <p className="mt-12 max-w-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Link to='/'>
            <button className="mt-6 bg-pink-500 text-white hover:bg-pink-800 duration-300 rounded-md py-2 px-4">
              Back
            </button>
          </Link>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {list.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
