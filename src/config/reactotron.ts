import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';

declare global {
  interface Console {
    tron: typeof Reactotron | { log: () => null };
  }
}

const reactotron = __DEV__
  ? Reactotron.setAsyncStorageHandler!(AsyncStorage)
      .configure()
      .useReactNative({})
      .use(reactotronRedux())
      .connect()
  : {
      log: () => null,
      clear: () => null,
      createEnhancer: undefined,
      createSagaMonitor: () => undefined,
    };

reactotron.clear!();

console.tron = reactotron;

export default reactotron;
