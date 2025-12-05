import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useUsers } from "@/src/context/useUsers";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "lucide-react-native";
import UserFieldsDetails from "./components/UserFieldsDetails";

const UserDetails = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { users } = useUsers();
  const userInfo = users[Number(id)];

  return (
    <SafeAreaView className="flex-1 items-center py-8 relative">
      <TouchableOpacity
        className="absolute top-10 left-7"
        onPress={() => router.back()}
      >
        <ArrowLeft />
      </TouchableOpacity>
      <ScrollView>
        <View className="items-center gap-4">
          <Image
            source={{ uri: userInfo.picture.large }}
            width={100}
            height={100}
            resizeMode="contain"
            className="rounded-full"
          />
          <View className="gap-2 items-center">
            <Text className="text-[#03001f] font-bold text-3xl">
              {userInfo.name.first + " " + userInfo.name.last}
            </Text>
            <Text className="text-[#a7a7a7] font-bold text-xl">
              {userInfo.cell}
            </Text>
          </View>
        </View>
        <UserFieldsDetails userInfo={userInfo} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserDetails;
