import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

const SaveButton: React.FC = () => {
  return (
    <View className="absolute bottom-16 right-4">
      <Button mode="contained" icon="heart-outline" className="bg-white">
        Save
      </Button>
    </View>
  );
};

export default SaveButton;
