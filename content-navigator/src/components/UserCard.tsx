import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { User } from "../types/user";

interface Props {
  info: User;
}

const UserCard = ({ info }: Props) => {
  const fullName =
    info.name.title + " " + info.name.first + " " + info.name.last;
  return (
    <TouchableOpacity className="min-w-[280px] min-h-[100px] bg-[#fff] mb-4 rounded-lg flex flex-row items-center gap-4">
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
