// state for our cart badge in the navbar
// we check the size of our cart in localstorage and set/clear the number with this store to allow the badge to dynamically render the cart size

//ACTION TYPES:

const ADD_NODE = 'ADD_NODE'


//INITIALSTATE:
// list of objects of dropdown?
const listDiagram = [
  {name: 'd+2', port: '+12'},
  {name: '2', port: '10'}
]

//ACTION CREATORS:

export const addNode = (item) => ({type: ADD_NODE, item})

// REDUCER:

export default function(state = listDiagram, action) {
  switch (action.type) {
    case ADD_NODE:
      return [...state, action.item]
    default:
      return state
  }
}
