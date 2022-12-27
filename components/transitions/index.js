import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";
import React, { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import links from "../../app/utils/links.json"
import { TIMEOUT, fadeIn } from "./animations";


const Transition = ({ children }) => {
    const router = useRouter();
    
  
    return (
      <TransitionGroup style={{ position: "relative" }}>
        <ReactTransition
          key={router.pathname}
          timeout={{
            enter: TIMEOUT,
            exit: TIMEOUT,
          }}
        >
          {(status) => <div style={{ ...fadeIn[status] }}>{children}</div>}
        </ReactTransition>
      </TransitionGroup>
    );
  };
  
  export default Transition;
  