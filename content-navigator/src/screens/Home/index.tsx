import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-black items-center justify-center">
      <Text className="text-white text-2xl font-bold">Home</Text>
    </SafeAreaView>
  );
};

export default Home;
