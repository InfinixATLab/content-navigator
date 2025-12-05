import { ActivityIndicator, FlatList, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { GetUsersResponse, User } from "@/src/types/user";
import UserCard from "@/src/components/UserCard";

const Home = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [loading, setLoading] = React.useState(false);

  async function getUsers() {
    const url = process.env.EXPO_PUBLIC_API_URL || "";
    setLoading(true);
    try {
      const response = await axios.get(url + "?results=20");
      const data = (await response.data) as GetUsersResponse;
      setUsers(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center bg-[#f0f0f0]">
      <Text className="text-2xl font-bold text-[#1C1c1c] my-8">User List</Text>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={users}
          renderItem={({ item }) => <UserCard info={item} />}
          keyExtractor={(item, index) => item.id.value + index}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
