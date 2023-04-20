import myReducer from './../context/reducers/index';
const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: myReducer,
});

export default store;
