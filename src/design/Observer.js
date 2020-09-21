class Observer {
  name
  constructor (name) {
    this.name = name
  }
  update() {
    console.log(this.name + ' update');
  }
}
class Subject {
  observerList = []
  addObserver(observer) {
    this.observerList.push(observer);
  }
  notice() {
    this.observerList.forEach(observer => {
      observer.update()
    })
  }
}

const subj = new Subject();
subj.addObserver(new Observer('observer1'))
subj.addObserver(new Observer('observer2'))
subj.addObserver(new Observer('observer3'))
subj.notice()
