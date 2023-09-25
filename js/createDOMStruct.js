// Создаем разметку для элемента на странице в дереве DOM

export function createElement(tagName, className, parent) {
    const element = document.createElement(tagName);
    element.className = className;
    parent.append(element);
    return element;
  }