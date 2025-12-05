import { View } from "react-native";
import React from "react";
import { User } from "@/src/types/user";
import { Mail, MapPinned, Phone, User as UserIcon } from "lucide-react-native";
import CustomField from "@/src/components/CustomField";

interface Props {
  userInfo: User;
}

const UserFieldsDetails = ({ userInfo }: Props) => {
  return (
    <View className="min-w-[285px] mt-8 gap-4">
      <CustomField
        label="Username"
        text={userInfo.login.username}
        Icon={UserIcon}
      />
      <CustomField label="Email" text={userInfo.email} Icon={Mail} />
      <CustomField label="Phone" text={userInfo.phone} Icon={Phone} />
      <CustomField
        label="Country"
        text={userInfo.location.country}
        Icon={MapPinned}
      />
      <CustomField
        label="State"
        text={userInfo.location.state}
        Icon={MapPinned}
      />
      <CustomField
        label="City"
        text={userInfo.location.city}
        Icon={MapPinned}
      />
      <CustomField
        label="Street"
        text={
          userInfo.location.street.name + ", " + userInfo.location.street.number
        }
        Icon={MapPinned}
      />
    </View>
  );
};

export default UserFieldsDetails;
