
export const floating = ( duration: number)=>({
      animate: {
    y: [0, -20, 0],
  },

  transition: {
    delay:2 ,
    duration: duration,
    repeat: Infinity,
    ease: "easeInOut",
  },
})