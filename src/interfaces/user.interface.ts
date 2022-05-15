export interface Iuser {
  id: string
  name: string
  lastName: string
  countries: string
  fuel: string
  carType?: string
  about?: string
  distance: string
  avatar: string
}

export type UserState = {
  loadRequest: boolean
  user: Iuser
}

export type UserAction = {
  type: string
  payload: Iuser
}
