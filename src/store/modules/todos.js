
const data = [
  {
    key: "1",
    title: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    title: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    title: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  }
];
const todos = (state = data, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.data
      ]
    case 'DELETE_TODO':
        state.splice(action.data.index, 1)
      return [
        ...state
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos