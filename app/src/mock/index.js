import Mock from 'mockjs'

Mock.setup({timeout:'200-400'});

let cfgArr = [];

const files = import.meta.globEager('../mock/basic/*.js');

Object.keys(files).forEach(key=>{
  if(key == './index.js') return ;
  cfgArr = cfgArr.concat(files[key].default);
})

cfgArr.forEach(item=>{
  for(let [path,target] of Object.entries(item)){
    const protocol = path.split('|');
    Mock.mock(new RegExp("^"+protocol[1]),protocol[0],target);
  }
})