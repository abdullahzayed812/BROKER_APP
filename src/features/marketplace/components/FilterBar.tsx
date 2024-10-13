import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

const FilterBar: React.FC = () => {
  return (
    <View className="flex-row justify-between p-4">
      <Button mode="contained" icon="chevron-down" className="bg-blue-500">
        Requests
      </Button>
      <Button mode="outlined">Rent</Button>
      <Button mode="outlined">Location</Button>
      <Button mode="outlined" icon="filter-variant">
        Filter
      </Button>
    </View>
  );
};

export default FilterBar;
