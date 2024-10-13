import React from "react";
import { View } from "react-native";
import { Chip } from "react-native-paper";

const CategoryTabs: React.FC = () => {
  return (
    <View className="flex-row p-4">
      <Chip mode="outlined" className="mr-2">
        Show: All
      </Chip>
      <Chip className="mr-2">For you</Chip>
      <Chip className="mr-2">Urgent</Chip>
      <Chip>Resale</Chip>
    </View>
  );
};

export default CategoryTabs;
