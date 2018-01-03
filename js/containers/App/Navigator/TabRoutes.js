import {
  notFoundKey,
  Routes,
} from './routes';

const TabRoutes = {};
for (const key in Routes) {
  if (key !== notFoundKey) {
    TabRoutes[key] = Routes[key];
  }
}

export default TabRoutes;
