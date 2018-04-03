import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../user_actions';
import * as APIUtil from '../../util/user_api_util';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let testUsers = {
  1: {
    id: 1,
    username: 'Sneezy',
    img_url: 'https://www.imgur.com/1234.jpg'
  }
};

describe('actions', () => {
  test('receiveUsers should create an action to receive users', () => {
    const expectedAction = {
      type: actions.RECEIVE_USERS,
      users: testUsers
    };

    expect(actions.receiveUsers(testUsers)).toEqual(expectedAction);
  });
});
