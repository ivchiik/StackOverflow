import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import QuestionListItem from "../src/components/QuestionListItem";
import { useQuery } from "urql";
import { questionsQuery } from "../src/graphql/queries";

export default function Page() {
  const [response] = useQuery({
    query: questionsQuery,
    variables: { sort: "votes" },
  });

  if (response.fetching) {
    return (
      <SafeAreaView>
        <ActivityIndicator style={{ paddingTop: "75%" }} />
      </SafeAreaView>
    );
  }
  if (response.error) {
    return (
      <SafeAreaView>
        <Text>Error: {response.error.message}</Text>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={response.data.questions.items}
        renderItem={({ item }) => <QuestionListItem question={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
