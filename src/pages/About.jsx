import React from "react";
import Category from "../Components/About/Category";
import { categories } from "../util/categories.js";
const About = () => {
  return (
    <>
      <div className="container  my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p
          className="lead w-75 mx-auto text-center text-muted"
          style={{ fontFamily: " Roboto" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          facere doloremque veritatis odit similique sequi. Odit amet fuga nam
          quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
          totam vero quas provident ipsam, veritatis nostrum velit quos
          recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
          earum unde eligendi autem praesentium, doloremque distinctio nesciunt
          porro tempore quis eaque labore voluptatibus ea necessitatibus
          exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
          tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
          quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
          delectus expedita a alias nam recusandae illo debitis repellat libero,
          quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
          dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
        </p>
        <h2 className="text-center py-4">Our Products</h2>

        <div className="row">
          {categories.map((category) => (
            <Category category={category} />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
