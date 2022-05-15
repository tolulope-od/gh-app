import { UserState, UserAction } from '../../interfaces/user.interface'
import { Constants as type } from '../actions/constants/User.action'

export const InitialState: UserState = {
  loadRequest: false,
  user: {
    id: '1',
    name: 'Cardon',
    lastName: 'Embash',
    fuel: '2030044 lt',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque amet, tempore id sunt nam maxime saepe vitae tenetur odio quos blanditiis impedit laborum, quidem nulla accusamus esse dolor officia sequi.',
    distance: '90,00000.32',
    countries: '3000',
    avatar:
      'https://w7.pngwing.com/pngs/613/636/png-transparent-computer-icons-user-profile-male-avatar-avatar-heroes-logo-black-thumbnail.png',
  },
}

const UserReducer = (
  state: UserState = InitialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case type.FETCHING_USER:
      return {
        ...state,
        loadRequest: true,
      }
    case type.FETCH_USER:
    default:
      return state
  }
}

export default UserReducer
