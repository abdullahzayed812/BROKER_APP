import { Stack } from "expo-router/stack";
import { PaperProvider, MD3LightTheme, useTheme } from "react-native-paper";

const theme = {
  ...MD3LightTheme,

  colors: {
    ...MD3LightTheme.colors,
    primary: "#0078FF",
    primary_50: "#E6F2FF",
    primary_300: "#54A5FF",
    secondary: "#FFC025",
    secondary_50: "#FFF9E9",
    accent_50: "#E6EAF2",
    white: "#FFFFFF",
    gray: "#F3F4F633",
  },
};

type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();

export default function Layout() {
  return (
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}
