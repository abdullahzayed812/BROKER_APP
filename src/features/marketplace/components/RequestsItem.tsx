import React from "react";
import { View, Text } from "react-native";
import { Chip } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

export interface RequestItemProps {
  type: "Buy" | "Rent";
  category: string;
  propertyType: string;
  location: string;
  time: string;
  views: number;
  comments: number;
  price: string;
  priceType: string;
}

const RequestItem: React.FC<RequestItemProps> = ({
  type,
  category,
  propertyType,
  location,
  time,
  views,
  comments,
  price,
  priceType,
}) => {
  return (
    <View className="bg-white p-4 mb-4 rounded-lg">
      <View className="flex-row justify-between mb-2">
        <View className="flex-row">
          <Chip mode="outlined" textStyle={{ color: "blue" }} className="mr-2">
            Request
          </Chip>
          <Chip mode="outlined" textStyle={{ color: type === "Buy" ? "purple" : "orange" }}>
            {type}
          </Chip>
          <Chip mode="outlined" textStyle={{ color: "pink" }} className="ml-2">
            {category}
          </Chip>
        </View>
        <Text className="text-gray-500">{time}</Text>
      </View>
      <View className="mb-2">
        <View className="flex-row items-center">
          <FontAwesome name="building" size={16} color="gray" />
          <Text className="ml-2">{propertyType}</Text>
        </View>
        <View className="flex-row items-center mt-1">
          <FontAwesome name="map-marker" size={16} color="gray" />
          <Text className="ml-2">{location}</Text>
        </View>
      </View>
      <View className="flex-row justify-between items-center">
        <View className="flex-row">
          <FontAwesome name="eye" size={16} color="gray" />
          <Text className="ml-1 mr-3">{views}</Text>
          <FontAwesome name="comment" size={16} color="gray" />
          <Text className="ml-1">{comments}</Text>
        </View>
        <Text className="font-bold">
          {price} <Text className="font-normal text-gray-500">{priceType}</Text>
        </Text>
      </View>
      <View className="absolute top-2 right-2 flex-row">
        <FontAwesome name="star-o" size={20} color="gray" className="mr-2" />
        <FontAwesome name="share-alt" size={20} color="gray" />
      </View>
    </View>
  );
};

export default RequestItem;
