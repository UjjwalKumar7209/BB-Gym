export const fadeIn = () => {
  return {
    hidden: {
      y: 50, // Start slightly below
      opacity: 0, // Fully transparent initially
    },
    show: {
      y: 0, // Ends at its original position
      opacity: 1, // Fully visible
      transition: {
        type: "spring", // Adds a bouncy, natural animation
        stiffness: 100, // Controls the springiness
        damping: 15, // Reduces oscillation
        duration: 1, // Lasts 1 second
      },
    },
  };
};
