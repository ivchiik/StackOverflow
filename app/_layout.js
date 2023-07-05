import { Link, Stack } from "expo-router";
import client from "../src/graphql/client";
import { Provider } from "urql";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "react-native";

const RootLayout = () => {
  return (
    <Provider value={client}>
      <StatusBar barStyle="dark-content"/>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
            headerRight: () => (
              <Link href="/search">
                <AntDesign name="search1" size={20} color="dimgray" />
              </Link>
            ),
          }}
        />
        <Stack.Screen name="[id]" options={{ title: "Question" }} />
      </Stack>
    </Provider>
  );
};

export default RootLayout;
