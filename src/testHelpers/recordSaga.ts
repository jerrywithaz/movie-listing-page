import { runSaga } from 'redux-saga';

async function recordSaga(saga: any, initialAction: any) {

    const dispatched: any[] = [];
  
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      saga,
      initialAction
    );
  
    return dispatched;
  
  }

export default recordSaga;