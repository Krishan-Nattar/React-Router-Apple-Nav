import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";

function SubNav(props) {
  const id = props.match.params.id;

  let list = [];

  props.list.forEach(item => {
    if (item.id == id) {
      list = item;
    }
  });
  return (
    <div className="subItems">
      <div className="subItems2">
        {list.list.map(item => {
          return (
            <CSSTransition
              key={item} 
              in={true}
              appear={true}
              enter={true}
              timeout={10000}
              classNames="slide"
            >
              <div className="icon-group">
                <img className="svg" src={`./images/${item}.svg`} key={item} />
                {item}
              </div>
            </CSSTransition>
          );
        })}
      </div>
    </div>
  );
}

export default SubNav;