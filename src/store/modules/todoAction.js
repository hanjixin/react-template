/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'


/*
 * action 创建函数
 */

export function addTodo(data) {
  return { type: ADD_TODO, data}
}

export function toggleTodo(data) {
  return { type: TOGGLE_TODO, data }
}
