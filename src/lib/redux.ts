import { createSlice, configureStore } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {User} from './types'

const initialState: User = {
  firstName: '',
  lastName: '',
  role:'',
}
const userSlice = createSlice({
  name: 'User',
  initialState,
   reducers: {
    createUser: (
      state,
      action: PayloadAction<User>
    ) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.role=action.payload.role
    },
  },
})

export const { createUser  } = userSlice.actions

export const store = configureStore({
  reducer:{
    user:userSlice.reducer
  }
})

store.subscribe(() => console.log(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store