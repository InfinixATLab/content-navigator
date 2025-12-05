import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useUsers } from "@/src/context/useUsers";
import { SafeAreaView } from "react-native-safe-area-context";

const UserDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { users } = useUsers();
  const userInfo = users[Number(id)];

  console.log(userInfo.name.first);

  return (
    <SafeAreaView>
      <Text>UserDetails</Text>
    </SafeAreaView>
  );
};

export default UserDetails;
