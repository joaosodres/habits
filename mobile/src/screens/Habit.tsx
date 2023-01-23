import { useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';
import { ScrollView, Text, View } from 'react-native';
import { BackButton } from '../components/BackButton';
import { Checkbox } from '../components/Checkbox';
import { ProgressBar } from '../components/ProgressBar';

interface HabitProps {
  date: string;
}

export function Habit() {
  const route = useRoute();
  const { date } = route.params as HabitProps;

  const parsedDate = dayjs(date);
  const dayOfWeek = parsedDate.format('dddd');
  const dayAndMonth = parsedDate.format('DD/MM');

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <BackButton />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayOfWeek}
        </Text>
        <Text className=" text-white font-extrabold text-3xl lowercase">
          {dayAndMonth}
        </Text>

        <ProgressBar progress={50} />

        <View className="mt-6">
          <Checkbox
            title="Beber 2 litros de água"
            checked={false}
          />
          <Checkbox
            title="Caminhar"
            checked={true}
          />
        </View>

      </ScrollView>

    </View>
  );
}
