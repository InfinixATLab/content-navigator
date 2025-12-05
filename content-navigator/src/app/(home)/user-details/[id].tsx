import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useUsers } from "@/src/context/useUsers";

const UserDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { users } = useUsers();
  const userInfo = users[Number(id)];

  return (
    <View>
      <Text>UserDetailsScreen</Text>
    </View>
  );
};

export default UserDetailsScreen;
