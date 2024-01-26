(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.querySelector('.grid');
    const gridItems = [];
    for (let i = 0; i < 2000; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridContainer.appendChild(gridItem);
      gridItems.push(gridItem);
    }
    document.addEventListener('mousemove', handleMouseMove);
    function handleMouseMove(event) {
      gridItems.forEach((gridItem) => {
        const isMouseOver = isMouseOverElement(event, gridItem);

        if (isMouseOver) {
          const randomColor = getColor();
          gridItem.style.backgroundColor = randomColor;
        }
      });
    }

    function isMouseOverElement(event, element) {
      const rect = element.getBoundingClientRect();
      return (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
      );
    }
  });

  function getColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
})();
