function domClick (event) {
  const app = document.querySelector('#app');
  for (let i = 0; i < 10000; i++) {
    const ele = document.createElement('div')
    ele.innerHTML = `<a href="">测试地址</a><span>${i}</span><span>a${i}</span><span>b${i}</span><span>c${i}</span><span>d${i}</span>`;
    app.appendChild(ele);
  }
}
