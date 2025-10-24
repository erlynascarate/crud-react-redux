import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
  {
    id: 1,
    name: 'Yana Foster',
    email: 'yana.foster@example.com',
    github: 'yanafoster',
  },
    {
    id: 2,
    name: 'Liam Johnson',
    email: 'liam.johnson@example.com',
    github: 'liamjohnson',
  },
    {
    id: 3,
    name: 'Olivia Brown',
    email: 'olivia.brown@example.com',
    github: 'oliviabrown',
  },
  {
    id: 4,
    name: 'James Smith',
    email: 'james.smith@example.com',
    github: 'jamessmith',
  },
    {
    id: 5,
    name: 'Sophia Wilson',
    email: 'sophia.wilson@example.com',
    github: 'erlynascarate',
  },
];

export interface User {
    name: string;
    email: string;
    github: string;
}

export interface UsersWithId extends User {
    id: UserId;
}

export type UserId = string

const initialState: UsersWithId[] = (()=>{
  const persistedState = localStorage.getItem('appState');
  if (persistedState) {
    return JSON.parse(persistedState).users
  }

  return DEFAULT_STATE; 
})();

export const usersSlice = createSlice({
  name: 'usersManagement',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID()
      return [
        ...state,
        { id, ...action.payload }
      ];
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      return state.filter(user => user.id !== action.payload);
    }
  },
});

export default usersSlice.reducer;

export const { addNewUser, deleteUserById } = usersSlice.actions;