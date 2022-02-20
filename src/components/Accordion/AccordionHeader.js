import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";
import "./AccordionStyles.css";

function AccordionHeader({ children, ...restProps }) {
  const [AccordionShow, setAccordionShow] = useContext(AccordionContext);

  function handleClick() {
    setAccordionShow(!AccordionShow);
  }

  return (
    <div className="accordion-header" onClick={handleClick} {...restProps}>
      {children}
      {AccordionShow ? (
        <div className="accordion-image" >
          x
        </div>
      ) : (
        <div className="accordion-image" >
        +
      </div>
      )}
    </div>
  );
}

export default AccordionHeader;
