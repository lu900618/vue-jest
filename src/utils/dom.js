export const removeNode = node => {
  node.parentNode.removeChild(node);
};

export const appendNode = (ele, container) => {
  container.appendChild(ele);
};

export const insertBefore = (newEle, oldEle) => {
  oldEle.parentNode.insertBefore(newEle, oldEle);
};
