import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList1124507Navigator from '../features/NotificationList1124507/navigator';
import BlankScreen0124506Navigator from '../features/BlankScreen0124506/navigator';
import ArticleList124489Navigator from '../features/ArticleList124489/navigator';
import ArticleList124488Navigator from '../features/ArticleList124488/navigator';
import ArticleList124487Navigator from '../features/ArticleList124487/navigator';
import ArticleList124470Navigator from '../features/ArticleList124470/navigator';
import ArticleList124469Navigator from '../features/ArticleList124469/navigator';
import ArticleList124468Navigator from '../features/ArticleList124468/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList1124507: { screen: NotificationList1124507Navigator },
BlankScreen0124506: { screen: BlankScreen0124506Navigator },
ArticleList124489: { screen: ArticleList124489Navigator },
ArticleList124488: { screen: ArticleList124488Navigator },
ArticleList124487: { screen: ArticleList124487Navigator },
ArticleList124470: { screen: ArticleList124470Navigator },
ArticleList124469: { screen: ArticleList124469Navigator },
ArticleList124468: { screen: ArticleList124468Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
