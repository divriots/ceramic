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
    target.dragging = true;
    dragHandler();
  }
  if (!target.dragging) {
    return;
  }
  target.xDiff = ev.clientX - target.oldMousePosX;
  target.oldMousePosX = ev.clientX;
}

function preventAnchorClickDuringDrag(ev) {
  if (target.dragging) {
    ev.preventDefault();
  }
}

export function setupDragHandling() {
  target = document.querySelector('article');
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
