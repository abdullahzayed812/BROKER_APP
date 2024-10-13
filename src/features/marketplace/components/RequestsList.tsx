import React from "react";
import { View } from "react-native";
import RequestItem, { RequestItemProps } from "./RequestsItem";

const requestData: RequestItemProps[] = [
  {
    type: "Buy",
    category: "Primary",
    propertyType: "Apartment, Duplex",
    location: "Zamalek, Cairo +2",
    time: "1h",
    views: 5,
    comments: 3,
    price: "15M EGP",
    priceType: "Installments",
  },
  {
    type: "Rent",
    category: "Long stays",
    propertyType: "Apartment",
    location: "New Cairo, Cairo +2",
    time: "4h",
    views: 3,
    comments: 1,
    price: "30K EGP",
    priceType: "Monthly",
  },
  {
    type: "Buy",
    category: "Resale",
    propertyType: "Apartment, Duplex",
    location: "Zamalek, Cairo +2",
    time: "1d",
    views: 4,
    comments: 3,
    price: "15M EGP",
    priceType: "Cash",
  },
  {
    type: "Rent",
    category: "Short stays",
    propertyType: "Studio",
    location: "Sheikh Zayed, Giza",
    time: "3d",
    views: 1,
    comments: 1,
    price: "3K EGP",
    priceType: "Daily",
  },
];

const RequestList: React.FC = () => {
  return (
    <View className="p-4">
      {requestData.map((request, index) => (
        <RequestItem key={index} {...request} />
      ))}
    </View>
  );
};

export default RequestList;
