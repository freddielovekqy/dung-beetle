const PATCH_TYPE = {
  REPLACE: 'REPLACE',
  REMOVE: 'REMOVE',
  INSERT: 'INSERT',
}

/**
 * 将虚拟DOM插入到真实DOM中
 * @param { VElement } ele 虚拟节点
 * @param { Element } container 需要添加节点的父节点
 */
const render = (ele, container= window.document.body) => {
  container.append(ele.render());
}

/**
 * 比对新老vDOM的变化，生成patches
 * @param { VElement } oldNode 老的vDOM树
 * @param { VElement } newNode 新的vDOM树
 */
const diff = (oldNode, newNode) => {

}

/**
 * 进行同层比较
 * @param { VElement } oldNode 老的vDOM节点
 * @param { VElement } newNode 新的vDOM节点
 * @param { Array } patches 所有的patches
 * @param { Number } index 遍历index
 */
const walk = (oldNode, newNode, patches, index) => {
  if (oldNode === newNode) {
    return
  }
  let patch = patches[index] || []
  if (!oldNode) {
    patch.push({
      type: PATCH_TYPE.INSERT,
      vNode: oldNode
    })
  } else if (!newNode) {
    patch.push({
      type: PATCH_TYPE.REMOVE,
      vNode: null
    })
  } else if (oldNode instanceof VElement && newNode instanceof VElement) {
    // 同类型节点的比对
    if (oldNode.key === newNode.key && oldNode.tagName === newNode.tagName) {
      // TODO 属性比对
      // TODO 子节点比对
    } else {
      patch = [{
        type: PATCH_TYPE.REPLACE,
        vNode: newNode
      }]
    }
  }
  if (patch && patch.length > 0) {
    patches[index] = patch
  }
}

/**
 * 比对子节点
 * @param { VElement } oldNode 老的父节点
 * @param { VElement } newNode 新的父节点
 * @param { Array } patches 总的补丁
 * @param { Array } patch 当前节点（或者说是父节点）的补丁
 * @param { Number } index 全局index
 */
const diffChildren = (oldNode, newNode, patches, patch, index) => {
  const oldChildren = oldNode.children
  const newChildren = newNode.children
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
