const defaultState = {
  // MyHeader的key
  key: 1
}
interface IAction {
  type: string
  value?: any
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action: IAction) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'changeKey':
      newState++
      break
    default:
      break
  }
  return newState
}
