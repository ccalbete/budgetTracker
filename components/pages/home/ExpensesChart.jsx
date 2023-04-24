import React from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const ExpensesChart = () => {

  const data = {
    labels: ['Comida', 'Transporte', 'Entretenimiento', 'Otros'],
    datasets: [
      {
        data: [200, 100, 150, 80],
        barColors: ['#B10BFA', '#B10BFA', '#B10BFA', '#B10BFA'],
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#1E1E1E',
    backgroundGradientFrom: '#1E1E1E',
    backgroundGradientTo: '#1E1E1E',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    barPercentage: 0.6,
    useShadowColorFromDataset: false,
  };

  return (
    <View>
      <BarChart data={data} width={350} height={220} chartConfig={chartConfig} />
    </View>
  );
};

export default ExpensesChart;
