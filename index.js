// Module import
import { Navigation } from "react-native-navigation";
// Static import
import { NAV_MAIN_LIST_VIEW, NAV_MAIN_RANDOM_VIEW, NAV_MAIN_FAVORITE_VIEW, NAV_MAIN_ADD_GAME_VIEW } from './src/value';
import { inactive_tab_color, selected_tab_color } from './src/managers/LayoutManager';
import { wording } from './src/managers/TranslateManager';
// Views import
import MainListView from './src/views/MainListView';
import MainRandomView from './src/views/MainRandomView';
import MainFavoriteView from './src/views/MainFavoriteView';
import MainAddGameView from './src/views/MainAddGameView';

Navigation.registerComponent(NAV_MAIN_LIST_VIEW, () => MainListView);
Navigation.registerComponent(NAV_MAIN_RANDOM_VIEW, () => MainRandomView);
Navigation.registerComponent(NAV_MAIN_FAVORITE_VIEW, () => MainFavoriteView);
Navigation.registerComponent(NAV_MAIN_ADD_GAME_VIEW, () => MainAddGameView);

Navigation.setRoot({
  root: {
    bottomTabs: {
      children: [
        {
          component: {
            name: NAV_MAIN_LIST_VIEW,
            options: {
              bottomTab: {
                text: wording('tab_list'),
                icon: require('./src/assets/icon_list/list.png'),
                testID: 'SECOND_TAB_BAR_BUTTON',
                iconColor: inactive_tab_color,
                selectedIconColor: selected_tab_color,
                textColor: inactive_tab_color,
                selectedTextColor: selected_tab_color,
              }
            }
          }
        },
        {
          component: {
            name: NAV_MAIN_FAVORITE_VIEW,
            options: {
              bottomTab: {
                text: wording('tab_mygames'),
                icon: require('./src/assets/icon_favorite/favorite.png'),
                testID: 'SECOND_TAB_BAR_BUTTON',
                iconColor: inactive_tab_color,
                selectedIconColor: selected_tab_color,
                textColor: inactive_tab_color,
                selectedTextColor: selected_tab_color,
              }
            }
          }
        },
        {
          component: {
            name: NAV_MAIN_RANDOM_VIEW,
            options: {
              bottomTab: {
                text: wording('tab_random'),
                icon: require('./src/assets/icon_random/random.png'),
                testID: 'SECOND_TAB_BAR_BUTTON',
                iconColor: inactive_tab_color,
                selectedIconColor: selected_tab_color,
                textColor: inactive_tab_color,
                selectedTextColor: selected_tab_color,
              }
            }
          }
        },/*
        {
          component: {
            name: NAV_MAIN_ADD_GAME_VIEW,
            options: {
              bottomTab: {
                text: 'Add Game',
                icon: require('./src/assets/icon_add/add.png'),
                testID: 'SECOND_TAB_BAR_BUTTON',
                iconColor: inactive_tab_color,
                selectedIconColor: selected_tab_color,
                textColor: inactive_tab_color,
                selectedTextColor: selected_tab_color,
              }
            }
          }
        },*/
      ],
      options: {
        bottomTabs: {
          titleDisplayMode: 'showWhenActive',
        },
      },
    }
  }
});
