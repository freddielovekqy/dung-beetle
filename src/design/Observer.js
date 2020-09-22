class Observer {
  name
  constructor (name) {
    this.name = name
  }
  update() {
    const notice = document.createElement('div')
    notice.innerHTML = `${this.name}观察者被通知了`;
    document.querySelector('#result').appendChild(notice)
  }
}
class Subject {
  observerList = []
  addObserver(observer) {
    this.observerList.push(observer);
    const observerEle = document.createElement('div')
    observerEle.innerHTML = `添加了一个观察者：${observer.name}`
    document.querySelector('#result').appendChild(observerEle)
  }
  notice() {
    this.observerList.forEach(observer => {
      observer.update()
    })
  }
}

const subj = new Subject();

function addObserver() {
  subj.addObserver(new Observer('observer' + (subj.observerList.length + 1)))
}

function notice() {
  subj.notice()
}
