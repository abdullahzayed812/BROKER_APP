import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

interface RequestsSummaryProps {
  count: number;
}

const RequestsSummary: React.FC<RequestsSummaryProps> = ({ count }) => {
  return (
    <View className="flex-row justify-between items-center p-4">
      <Text className="text-lg font-bold">{count} Requests</Text>
      <Button icon="heart-outline">Saved Searches</Button>
      <Button icon="sort-variant">Sort</Button>
    </View>
  );
};

export default RequestsSummary;
