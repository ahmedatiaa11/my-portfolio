

export const FadeLeft = (delay = 0) => ({
  initial: {
    opacity: 0,
    x: -40,
  },

  animate: {
    opacity: 1,
    x: 0,
  },

  transition: {
    duration: 0.6,
    delay,
    // ease: "easeOut",
  },
});