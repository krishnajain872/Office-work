export const TIMEOUT = 200
export const fadeIn = {
    entering: {
      position: `absolute`,
      opacity: 0,
      // transform: `translateX(50px)`,
    },
    entered:{
      transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
      opacity: 1,
      // transform: `translateX(0px)`,
    },
    exiting: {
      transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
      opacity: 0,
      // transform: `translateX(-50px)`,
    },
  }