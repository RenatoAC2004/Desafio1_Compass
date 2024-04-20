document.addEventListener("DOMContentLoaded", function () {
  const games = document.querySelectorAll(".gameImage");

  games.forEach((game) => {
    game.addEventListener("mousemove", handleMouseMove);
    game.addEventListener("mouseenter", handleMouseEnter);
    game.addEventListener("mouseleave", handleMouseLeave);
  });

  function handleMouseMove(event) {
    const game = event.currentTarget;
    const boundingRect = game.getBoundingClientRect();
    const mouseX = event.clientX - boundingRect.left;
    const mouseY = event.clientY - boundingRect.top;
    const rotationX = (mouseY / boundingRect.height - 0.5) * 20;
    const rotationY = (mouseX / boundingRect.width - 0.5) * -20;
    game.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(1.1)`;
  }

  function handleMouseEnter(event) {
    const game = event.currentTarget;
    game.style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.3)";
  }

  function handleMouseLeave(event) {
    const game = event.currentTarget;
    game.style.transition = "transform 0.1s, box-shadow 0.1s";
    game.style.transform = "";
    game.style.boxShadow = "";
  }
});