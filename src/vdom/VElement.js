export default class VElement {
  constructor (tagName, attrs = [], child) {
    this.tagName = tagName
    this.attrs = attrs
    this.child = child
  }

  render() {
    const tag = window.document.createElement(this.tagName)
    for (const attrKey in this.attrs) {
      // 对一些独特的属性名进行一定的转化，如class
      let attrName = attrKey
      const attrKayConvert = { className: 'class' };
      attrName = attrKayConvert[attrName]
    }
    this.attrs.forEach(attr => {
      // 对一些独特的属性名进行一定的转化，如class

    })
  }
}
