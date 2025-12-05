import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { User } from "../types/user";
import { useRouter } from "expo-router";

interface Props {
  info: User;
  index: number;
}

const UserCard = ({ info, index }: Props) => {
  const router = useRouter();

  const fullName =
    info.name.title + " " + info.name.first + " " + info.name.last;

  function handlePressUser(id: string) {
    router.push(`/(home)/user-details/${id}`);
  }
  return (
    <TouchableOpacity
      className="min-w-[280px] min-h-[100px] bg-[#fff] mb-4 rounded-lg flex flex-row items-center gap-4"
      onPress={() => handlePressUser(index.toString())}
    >
      <Image
        source={{ uri: info.picture.large }}
        width={80}
        height={100}
        resizeMode="cover"
        className="rounded-tl-lg rounded-bl-lg"
      />
      <Text className="text-[#1c1c1c] font-medium text-lg">{fullName}</Text>
    </TouchableOpacity>
  );
};

export default UserCard;
