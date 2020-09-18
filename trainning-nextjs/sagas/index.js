import { call, put, take, takeEvery } from 'redux-saga/effects';
import ApiList from '../apis/ListTest'
function* rootSaga() {
  yield* addHobby()
}
function* addHobby(){
  //yield take('ADD_HOBBY') // Lắng nge dispatch 1 action
  const data= yield call(ApiList)
   //yield put({type:"ADD_HOBBY",payload:data})
  console.log(data)
}


export default rootSaga;

  