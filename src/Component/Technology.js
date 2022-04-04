import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { smallMenu } from "./../hooks/useFetching";

function Technology() {
  const technology = useSelector((state) => state.allProducts.products);

  return technology.map((technology) => {
    if (technology.navLink === "technology") {
      return (
        <div
          className="container-fluid technology_page page_top px-0"
          key={technology.id}
          style={{ background: `url(${technology.background}) no-repeat` }}
        >
          <div className="all-container technology_page_default py-5">
            <h5 className="page_text_h5">
              <span className="page_text_number">0{technology.id}</span>{" "}
              {technology.textSmallTitle}
            </h5>
            <div className="d-flex flex-wrap justify-content-between text-white">
              <div className="w-50 d-flex technology_text_block pt-5 order-lg-1 order-md-1 order-sm-1 order-2">
                <div>
                  {technology.number_menu.map((num) => {
                    if (num.id === 1) {
                      return (
                        <NavLink
                          key={num.id}
                          exact
                          activeClassName="active4"
                          className="menu"
                          to={`/technology`}
                          onClick={(e)=>smallMenu(e, `Text${num.id}`, `Img${num.id}`, "active4", "techText", "techImage")}
                        >
                          <p className="m-0">{num.id}</p>
                        </NavLink>
                      );
                    } else {
                      return (
                        <NavLink
                          key={num.id}
                          exact
                          activeClassName=""
                          className="menu"
                          to={`/technology`}
                          onClick={(e)=>smallMenu(e, `Text${num.id}`, `Img${num.id}`, "active4", "techText", "techImage")}
                        >
                          <p className="m-0">{num.id}</p>
                        </NavLink>
                      );
                    }
                  })}
                </div>
                <div className="tech_block_text">
                  {technology.number_menu.map((num) => (
                    <div className={`techText Text${num.id}`}>
                      <h5>THE TERMINOLOGY…</h5>
                      <h2>{num.title}</h2>
                      <p>{num.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-50 d-flex justify-content-end order-lg-2 order-md-2 order-sm-2 order-1 technology_image_block">
                {technology.number_menu.map((num) => (
                  <img src={`${num.image}`}  alt={`${num.title}`} className={`techImage Img${num.id}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  });
}

export default Technology;
