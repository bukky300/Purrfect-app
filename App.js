import { useCallback, useEffect, useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Font from "expo-font";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";

import AllPets from "./screens/AllPets";
import Favourites from "./screens/Favourites";

import CatsContextProvider from "./store/cats-context";
import FavoritesContextProvider from "./store/favorites-context";

const BottomTabs = createBottomTabNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          Inter_400Regular,
          Inter_500Medium,
          Inter_600SemiBold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayout = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <CatsContextProvider>
        <FavoritesContextProvider>
          <NavigationContainer onReady={onLayout}>
            <BottomTabs.Navigator
              screenOptions={{
                tabBarStyle: {
                  backgroundColor: "#ffffff",
                  paddingHorizontal: 32,
                  height: 100,
                },
                tabBarLabelPosition: "below-icon",
                tabBarLabelStyle: {
                  fontFamily: "Inter_600SemiBold",
                  marginBottom: 24,
                },
                tabBarIconStyle: { marginTop: 16 },
                tabBarActiveTintColor: "#212227",
                headerStyle: { height: 80 },
                headerTitleAlign: "left",
                headerTitleStyle: {
                  fontFamily: "Inter_600SemiBold",
                  paddingLeft: 8,
                },
              }}
            >
              <BottomTabs.Screen
                name="AllPets"
                component={AllPets}
                options={{
                  tabBarLabel: "All cats",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                      name="cat"
                      color={color}
                      size={32}
                    />
                  ),
                  headerTitle: "All Cats",
                }}
              />
              <BottomTabs.Screen
                name="Favourites"
                component={Favourites}
                options={{
                  tabBarLabel: "Cats I like",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                      name="cards-heart"
                      color={color}
                      size={32}
                    />
                  ),
                  headerTitle: "Cats I Like",
                }}
              />
            </BottomTabs.Navigator>
          </NavigationContainer>
        </FavoritesContextProvider>
      </CatsContextProvider>
    </>
  );
}
