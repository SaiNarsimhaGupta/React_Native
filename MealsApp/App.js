import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator} from "@react-navigation/drawer"
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator>
    <Drawer.Screen name="Categories" component={CategoriesScreen}/>
    <Drawer.Screen name="Favorites" component={FavoritesScreen}/>
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCatergories"
            component={DrawerNavigator}
            options={{
              //title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            /*  //One Way of dynamically passing the parms as the names of Routing Pages
            // Another Way - useLayoutEffect hook as shown in MealsOverviewScreen
            options={({route,navigation}) => {
              const catId = route.params.categoryId;
              return {
                title: catId,
              };
            }} */
          />
          <Stack.Screen
            name="MealsDetails"
            component={MealsDetailsScreen}
            /* options={{
             // headerRight: () => {
                /* We can add text or Buttons to the header using OnPress()
                This Way can be used Only when we dont need interactions with the component 

                For Interactions - useLayoutEffect hook as shown in MealsOverviewScreen
                 */
               // return <Text>In Header</Text>;
             // }
           // }} */
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
