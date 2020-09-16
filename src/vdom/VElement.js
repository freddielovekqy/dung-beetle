class VElement {
  key
  constructor (tagName, attrs = [], children) {
    this.tagName = tagName
    this.attrs = attrs
    this.children = children
  }

  render () {
    const ele = window.document.createElement(this.tagName)
    for (const attrKey in this.attrs) {
      this.setAttr(ele, attrKey, this.attrs[attrKey]);
    }
    this.children.map(child => {
      if (child instanceof VElement) {
        ele.append(child.render());
      } else if (child instanceof Element || typeof child === 'string') {
        ele.append(child);
      }
    });
    return ele;
  }

  /**
   * 给element设置属性
   * @param { Element } node element节点
   * @param { String } key 属性key值
   * @param { String|Object } value 属性value值
   */
  setAttr (node, key, value) {
    switch (key) {
      case 'value': // node是一个input或者textarea
        if(node.tagName.toUpperCase() === 'INPUT' || node.tagName.toUpperCase() === 'TEXTAREA') {
          node.value = value;
        } else { // 普通属性
          node.setAttribute(key, value);
        }
        break;
      case 'style':
        let cssStr = ''
        if (typeof value === 'object') {
          for (const key in value) {
            cssStr += `${key}:${value[key]};`;
          }
        } else if (typeof value === 'string') {
          cssStr = value;
        }
        node.style.cssText = cssStr;
        break;
      default:
        node.setAttribute(key, value);
        break;
    }
  }

}
