import React from "react";
import { Chip } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface PropertyItemProps {
  saleType: string;
  propertyType: string;
  location: string;
  time: string;
  views: string;
  comments: string;
  price: string;
  priceType: string;
}

export const PropertyItem: React.FC<PropertyItemProps> = ({
  saleType,
  propertyType,
  location,
  time,
  views,
  comments,
  price,
  priceType,
}) => (
  <View className="bg-white p-4 mb-2 rounded-lg">
    <View className="flex-row justify-between mb-2">
      <View className="flex-row">
        <Chip mode="outlined" textStyle={{ color: "orange" }} className="mr-2">
          Inventory
        </Chip>
        <Chip mode="outlined" textStyle={{ color: "purple" }}>
          {saleType}
        </Chip>
      </View>
      <Text className="text-gray-500">{time}</Text>
    </View>
    <View className="mb-2">
      <View className="flex-row items-center">
        <FontAwesome name="home" size={16} color="gray" />
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
  </View>
);
