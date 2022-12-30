import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Transition from "../../transitions";


export default function formLayout({ children }) {
  // const router = useRouter()
  
  return (
    <Transition>
      <div className="sp_bg">
          
              <div>{children}</div>
    
      </div>
    </Transition>
  );
}
