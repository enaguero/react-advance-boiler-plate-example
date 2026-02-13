export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    userName: "Erwin",
    contacts: [
      {
        name: "Erwin",
        address: "Mi home",
        phone: "1234",
        email: "teacher@4geeks.com"
      },
      {
        name: "Erwin",
        address: "Mi home",
        phone: "1234",
        email: "teacher@4geeks.com"
      },
      {
        name: "Erwin",
        address: "Mi home",
        phone: "1234",
        email: "teacher@4geeks.com"
      }

    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'changeMessage':
      const { newMessage } = action.payload

      return {
        ...store, 
        message: newMessage
      }
    default:
      throw Error('Unknown action.');
  }

}
