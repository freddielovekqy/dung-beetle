class Publisher {
  list = {}
  subscribe(key, fn) {
    if (!key) {
      return
    }
    const fns = this.list[key] || []
    fns.push(fn)
    this.list[key] = fns
    const subscribeEle = document.createElement('div')
    subscribeEle.innerHTML = `订阅了${key}事件`;
    document.querySelector('#subscribeResult').appendChild(subscribeEle)
  }

  publish(key) {
    const publishEle = document.createElement('div')
    publishEle.innerHTML = `发布事件${key}`
    document.querySelector('#subscribeResult').appendChild(publishEle)
    const fns = this.list[key]
    if (fns && fns.length > 0) {
      fns.forEach(fn => {
        fn()
      })
    }
  }
}

const publisher = new Publisher()

function addSubscribe() {
  const subscribeType = document.querySelector('#subscribeType').value
  publisher.subscribe(subscribeType, () => {
    const subscribeEle = document.createElement('div')
    subscribeEle.innerHTML = `接收到事件${subscribeType}`
    document.querySelector('#subscribeResult').appendChild(subscribeEle)
  })
}

function publish() {
  publisher.publish(document.querySelector('#publishType').value)
}
