import { View, Text } from "react-native";
import React from "react";
import { LucideIcon } from "lucide-react-native";

interface Props {
  label: string;
  text: string;
  Icon: LucideIcon;
}

const CustomField = ({ label, text, Icon }: Props) => {
  return (
    <View className="gap-1.5 w-full">
      <Text className="text-[#03001f] font-semibold">{label}</Text>
      <View className="flex-row justify-between items-center px-2 py-3 rounded-md bg-[#e0e0e0]">
        <Text className="text-[#494949] text-medium">{text}</Text>
        <Icon size={12} color="#494949" />
      </View>
    </View>
  );
};

export default CustomField;
