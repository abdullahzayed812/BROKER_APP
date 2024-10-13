import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { Appbar } from "react-native-paper";
import FilterBar from "../../features/marketplace/components/FilterBar";
import CategoryTabs from "../../features/marketplace/components/CategoryTabs";
import RequestsSummary from "../../features/marketplace/components/RequestsSummary";
import RequestList from "../../features/marketplace/components/RequestsList";
import SaveButton from "../../features/marketplace/components/SaveButton";

const RequestsScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <Appbar.Header>
        <Appbar.Content title="Requests" />
        <Appbar.Action icon="bell" onPress={() => {}} />
      </Appbar.Header>

      <ScrollView className="flex-1">
        <FilterBar />
        <CategoryTabs />
        <RequestsSummary count={3488} />
        <RequestList />
      </ScrollView>

      <SaveButton />
    </SafeAreaView>
  );
};

export default RequestsScreen;
