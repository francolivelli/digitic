import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Nombre dinámico"} />
      <BreadCrumb title="Nombre dinámico" />
      <div className="blog-wrapper home-wrapper-2 py-5 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card px-4">
                <Link to="/blogs" className="d-flex gap-10 align-items-center">
                  <HiOutlineArrowLeft className="fs-6"/> Volver
                </Link>
                <h3 className="title">Lorem ipsum dolor sit amet.</h3>
                <img
                  src="images/blog-1.jpg"
                  className="img-fluid w-100 my-4"
                  alt="blog"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Alias nisi quibusdam delectus obcaecati voluptatum ipsa sint
                  et. Repellat totam natus quia eum incidunt. Perspiciatis
                  voluptatem molestias, excepturi natus molestiae fuga sint
                  similique! In dicta neque, libero id, iusto consectetur ut,
                  atque a inventore nam animi odio? Aliquid temporibus qui rem!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
