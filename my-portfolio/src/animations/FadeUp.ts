
export const fadeUp = (delay:number) => ({
    initial:{
        opacity:0 ,
        y :50
    },  
    whileInView:{
        opacity: 1 ,
        y:0
    } ,
    viewport:{
        once :false ,
        amount: 0.1,

    } ,
    transition:{
        duration: 0.6 ,
        //  ease: "easeOut",
        delay:delay ,
    }
})

export const fadeUpVariant = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      // ease: "easeOut",
    },
  },
}; 