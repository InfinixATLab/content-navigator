import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useUsers } from "@/src/context/useUsers";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "@/src/components/CustomInput";
import { Mail, MapPinned, Phone, User } from "lucide-react-native";

const UserDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { users } = useUsers();
  const userInfo = users[Number(id)];

  return (
    <SafeAreaView className="flex-1 items-center py-8">
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
        <View className="min-w-[285px] mt-8 gap-4">
          <CustomInput
            label="Username"
            text={userInfo.login.username}
            Icon={() => <User size={12} color="#494949" />}
          />
          <CustomInput
            label="Email"
            text={userInfo.email}
            Icon={() => <Mail size={12} color="#494949" />}
          />
          <CustomInput
            label="Phone"
            text={userInfo.phone}
            Icon={() => <Phone size={12} color="#494949" />}
          />
          <CustomInput
            label="Country"
            text={userInfo.location.country}
            Icon={() => <MapPinned size={12} color="#494949" />}
          />
          <CustomInput
            label="State"
            text={userInfo.location.state}
            Icon={() => <MapPinned size={12} color="#494949" />}
          />
          <CustomInput
            label="City"
            text={userInfo.location.city}
            Icon={() => <MapPinned size={12} color="#494949" />}
          />
          <CustomInput
            label="Street"
            text={
              userInfo.location.street.name +
              ", " +
              userInfo.location.street.number
            }
            Icon={() => <MapPinned size={12} color="#494949" />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserDetails;
