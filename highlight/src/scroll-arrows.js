let leftPaddle;
let rightPaddle;
let menuContainer;
let menuFullSize;
let menuItemWidth;
// get some relevant size for the paddle triggering point
const paddleMargin = 40;

function handlePaddleButtons() {
  const menuContainerSize = menuContainer.getBoundingClientRect().width;
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

function padRightHandler() {
  menuContainer.scrollTo({
    left: menuContainer.scrollLeft + menuItemWidth,
    behavior: 'smooth',
  });
}

function padLeftHandler() {
  menuContainer.scrollTo({
    left: menuContainer.scrollLeft - menuItemWidth,
    behavior: 'smooth',
  });
}

function setupListeners() {
  window.addEventListener('resize', handlePaddleButtons);
  menuContainer.addEventListener('scroll', handlePaddleButtons);
  rightPaddle.addEventListener('click', padRightHandler);
  leftPaddle.addEventListener('click', padLeftHandler);
}

export function setupScrollArrows( leftId, rightId, containerId) {
  leftPaddle = document.getElementById(leftId);
  rightPaddle = document.getElementById(rightId);
  menuContainer = document.getElementById(containerId);
  menuFullSize = menuContainer.scrollWidth;
  menuItemWidth = menuFullSize / menuContainer.childElementCount;

  setupListeners();
  handlePaddleButtons();
}

export function teardownScrollArrows() {
  window.removeEventListener('resize', handlePaddleButtons);
  menuContainer.removeEventListener('scroll', handlePaddleButtons);
  rightPaddle.removeEventListener('click', padRightHandler);
  leftPaddle.removeEventListener('click', padLeftHandler);
}
