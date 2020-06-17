import { AnyAction } from 'redux'
import { UsersForm } from '../models/user'
import { REGISTER_ACTIONS } from "../epics/register/action";
  
  export interface UsersFormListState {
    items: UsersForm[]
  }
  
  const initState: UsersFormListState = {
    items: [],
  }

const reducer = (state: UsersFormListState = initState, action: AnyAction): UsersFormListState => {
    switch (action.type) {
      case REGISTER_ACTIONS.REGISTER_USER_SUCCESS:
        return {...initState}
      case REGISTER_ACTIONS.REGISTER_USER_FAILURE:
        return state
      default:
        return state
    }
  }
  
  export default reducer