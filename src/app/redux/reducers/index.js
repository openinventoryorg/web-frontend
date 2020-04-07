import { combineReducers } from 'redux';

import { authReducer } from './AuthReducer';
import { adminRegistrationReducer } from './AdminRegistrationReducer';
import { adminAdministrationReducer } from './AdminAdministrationReducer';
import { adminItemManagementReducer } from './AdminItemManagementReducer';
import { adminLabManagementReducer } from './AdminLabManagementReducer';
import { socketReducer } from './SocketReducer';

export default combineReducers({
  auth: authReducer,
  adminRegistration: adminRegistrationReducer,
  adminAdministration: adminAdministrationReducer,
  adminLabManagement: adminLabManagementReducer,
  adminItemManagement: adminItemManagementReducer,
  socket: socketReducer
});
