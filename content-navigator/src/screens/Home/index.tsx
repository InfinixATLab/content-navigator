import { ActivityIndicator, FlatList, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UserCard from "@/src/components/UserCard";
import { useUsers } from "@/src/context/useUsers";

const Home = () => {
  const { users, loading } = useUsers();

  return (
    <SafeAreaView className="flex-1 items-center bg-[#f0f0f0]">
      <Text className="text-2xl font-bold text-[#1C1c1c] my-8">User List</Text>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={users}
          renderItem={({ item, index }) => (
            <UserCard info={item} index={index} />
          )}
          keyExtractor={(item, index) => item.name.first + index}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
