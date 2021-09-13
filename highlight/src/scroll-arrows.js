let leftPaddle;
let rightPaddle;
let menuContainer;
// get some relevant size for the paddle triggering point
const paddleMargin = 40;

function handlePaddleButtons(menuFullSize, menuContainerSize) {
  const menuInvisibleSize = menuFullSize - menuContainerSize;
  const menuPosition = menuContainer.scrollLeft;
  const menuStartOffset = paddleMargin;
  const menuEndOffset = menuInvisibleSize - paddleMargin;

  if (menuPosition <= menuStartOffset) {
    leftPaddle.classList.add('hidden');
  } else {
    leftPaddle.classList.remove('hidden');
  }

  if (menuPosition < menuEndOffset) {
    rightPaddle.classList.remove('hidden');
  } else {
    rightPaddle.classList.add('hidden');
  }
}

function setupListeners(menuFullSize) {
  window.addEventListener('resize', () => {
    handlePaddleButtons(
      menuFullSize,
      menuContainer.getBoundingClientRect().width
    );
  });

  menuContainer.addEventListener('scroll', () => {
    handlePaddleButtons(
      menuFullSize,
      menuContainer.getBoundingClientRect().width
    );
  });

  rightPaddle.addEventListener('click', function () {
    menuContainer.scrollTo({
      left: menuFullSize,
      behavior: 'smooth',
    });
  });

  leftPaddle.addEventListener('click', function () {
    menuContainer.scrollTo({
      left: 0,
      behavior: 'smooth',
    });
  });
}

export default function setupScrollArrows() {
  leftPaddle = document.querySelector('.left-paddle');
  rightPaddle = document.querySelector('.right-paddle');
  menuContainer = document.querySelector('.highlights-container');
  const menuFullSize = menuContainer.scrollWidth;

  setupListeners(menuFullSize);

  handlePaddleButtons(
    menuFullSize,
    menuContainer.getBoundingClientRect().width
  );
}
