let target;
let anchors;

function dragHandler() {
  if (!target.dragging) {
    return;
  }
  target.scrollLeft -= (target.xDiff ?? 0) * 4;
  target.xDiff = 0;
  requestAnimationFrame(dragHandler);
}

function mouseUpHandler() {
  target.mouseDown = false;
  // preventing the anchor default depends on dragging state,
  // but mouseup is fired before click, so wait 1 render frame
  // before setting it back to false
  requestAnimationFrame(() => {
    target.movedInX = 0;
    target.dragging = false;
  });
}

function mouseDownHandler(ev) {
  ev.preventDefault();
  target.oldMousePosX = ev.clientX;
  target.mouseDown = true;
}

function mouseMoveHandler(ev) {
  if (target.mouseDown && !target.dragging) {
    target.movedInX = 0;
    target.dragging = true;
    dragHandler();
  }
  if (!target.dragging) {
    return;
  }
  const xDiff = ev.clientX - target.oldMousePosX;
  // Keep track of how much has been moved in X direction
  target.movedInX += Math.abs(xDiff);
  target.xDiff = xDiff;
  target.oldMousePosX = ev.clientX;
}

function preventAnchorClickDuringDrag(ev) {
  // If user was consciously dragging, prevent anchor visit
  // The 5 here is the threshold for what is considered a conscious user "drag" interaction,
  // the accumulated amount of pixels the user dragged to either side.
  // If users complain about "click" not working, increase this threshold
  // If users complain about "drag" accidentally visiting the anchor, lower it
  if (target.dragging && target.movedInX > 5) {
    ev.preventDefault();
  }
}

export function setupDragHandling() {
  target = document.querySelector('.highlights-container');
  target.addEventListener('mousedown', mouseDownHandler);
  target.addEventListener('mousemove', mouseMoveHandler);
  target.addEventListener('mouseup', mouseUpHandler);
  anchors = Array.from(target.querySelectorAll('a'));
  anchors.forEach((anchor) => {
    anchor.addEventListener('click', preventAnchorClickDuringDrag);
  });
}

export function teardownDragHandling() {
  target.removeEventListener('mousedown', mouseDownHandler);
  target.addEventListener('mousemove', mouseMoveHandler);
  target.removeEventListener('mouseup', mouseUpHandler);
  anchors.forEach((anchor) => {
    anchor.removeEventListener('click', preventAnchorClickDuringDrag);
  });
}
