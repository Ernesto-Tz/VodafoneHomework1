import { Fragment } from "react";

import Input from "../../UI/Input";
import classes from "./Header.module.css";
import VFlogo from "../../Assets/vodafone_logo.svg";

const Header = () => {
  return (
    <Fragment>
      <header className={`row m-0 ${classes.header}`}>
        <div className="col-md-6">
          <img className={classes.logo} src={VFlogo} alt="vodafone_logo" />
        </div>
        <div className="col-md-6 mt-3">
          <Input
            input={{
              type: "text",
              name: "search",
              placeholder: "Search for contact",
            }}
          />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
