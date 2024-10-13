declare module "react-native" {
  import * as RN from "react-native";

  // Export all components from React Native
  export const View: typeof RN.View;
  export const Text: typeof RN.Text;
  export const StyleSheet: typeof RN.StyleSheet;
  export const SafeAreaView: typeof RN.SafeAreaView;
  export const ScrollView: typeof RN.ScrollView;

  // Add className prop to existing props
  interface ViewProps {
    className?: string;
  }

  interface TextProps {
    className?: string;
    style?: any; // Optional: Adjust type as needed
  }

  // You can extend the existing props for other components as needed
  // For example:
  interface SafeAreaViewProps {
    className?: string;
  }
}
