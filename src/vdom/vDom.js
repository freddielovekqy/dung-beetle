/**
 *
 * @param { VElement } ele 虚拟节点
 * @param { Element } container 需要添加节点的父节点
 */
const render = (ele, container= window.document.body) => {
  container.append(ele.render());
}

const ele = new VElement(
  'div',
  { class: 'test-div', value: '123', style: { color: '#ff0000' } },
  [
    new VElement('span', {}, ['span1']),
    new VElement('span', {}, ['span2']),
    new VElement('span', {}, ['span3']),
    new VElement('span', {}, ['span4'])
  ]
)
render(ele, document.querySelector('#app'))
