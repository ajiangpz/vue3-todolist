import  Mock  from "mockjs"
const Random = Mock.Random;
const todoList = Mock.mock({
  'list|1-10':[{
    'id|+1':1,
    "name":"@title",
    'done':"@boolean"
  }]
})
export default {
  'post|todolist':()=>todoList
}