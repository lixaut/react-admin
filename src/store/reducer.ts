
const defaultState: StateType = {
  num: 2
}

let reducer = (state = defaultState, action: ActionType) => {
  let newState: StateType = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case 'add1':
      newState.num += action.val;
      break;
    case 'add5':
      newState.num += action.val;
      break;
    default:
      break;
  }
  return newState
}

export default reducer