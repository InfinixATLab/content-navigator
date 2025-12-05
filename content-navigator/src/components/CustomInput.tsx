import { View, Text } from "react-native";
import React from "react";
import { LucideIcon, LucideProps } from "lucide-react-native";

interface Props {
  label: string;
  text: string;
  Icon: LucideIcon;
  iconProps?: LucideProps;
}

const CustomInput = ({ label, text, Icon, iconProps }: Props) => {
  return (
    <View className="gap-1.5 w-full">
      <Text className="text-[#03001f] font-semibold">{label}</Text>
      <View className="flex-row justify-between items-center px-2 py-3 rounded-md bg-[#e0e0e0]">
        <Text className="text-[#494949] text-medium">{text}</Text>
        <Icon {...iconProps} />
      </View>
    </View>
  );
};

export default CustomInput;
