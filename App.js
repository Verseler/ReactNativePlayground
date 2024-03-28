import React from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import WelcomeScreen from "./components/WelcomeScreen";
import TestExpoFeat from "./components/TestExpoFeat";
import TestNavigation from "./components/TestNavigation";
import TestBottonNavigation from "./components/TestBottomNavigation";
import { NavigationContainer } from "@react-navigation/native";
import TempApp from "./components/reactnativeelements/TempApp";
import DataVisualization from "./components/reactnativeelements/DataVisualization";

import {
  PaperProvider,
  Appbar,
  BottomNavigation,
  Text,
  Button,
  Chip,
  Dialog,
  Portal,
  FAB,
} from "react-native-paper";

export default function App() {
  const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";
  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const [routes] = React.useState([
    {
      key: "music",
      title: "Favorites",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
    { key: "albums", title: "Albums", focusedIcon: "album" },
    { key: "recents", title: "Recents", focusedIcon: "history" },
    {
      key: "notifications",
      title: "Notifications",
      focusedIcon: "bell",
      unfocusedIcon: "bell-outline",
    },
  ]);
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <PaperProvider>
      <View style={{ flex: 1 }}>
        <Appbar.Header>
          <Appbar.Content title="Title" />
          <Appbar.Action icon="magnify" onPress={() => {}} />
          <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
        </Appbar.Header>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Press me
        </Button>
        <Chip icon="information" onPress={() => console.log("Pressed")}>
          Example Chip
        </Chip>
        <View>
          <Button onPress={showDialog}>Show Dialog</Button>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Alert</Dialog.Title>
              <Dialog.Content>
                <Text variant="bodyMedium">This is simple dialog</Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Done</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>

          <Portal>
          <FAB.Group
          
            open={open}
            visible
            icon={open ? "calendar-today" : "plus"}
            actions={[
              { icon: "plus", onPress: () => console.log("Pressed add") },
              {
                icon: "star",
                label: "Star",
                onPress: () => console.log("Pressed star"),
              },
              {
                icon: "email",
                label: "Email",
                onPress: () => console.log("Pressed email"),
              },
              {
                icon: "bell",
                label: "Remind",
                onPress: () => console.log("Pressed notifications"),
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
        </View>



        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </View>
    </PaperProvider>
  );
}

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;
