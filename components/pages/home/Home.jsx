
import * as React from 'react';
import { View } from 'react-native';
import ExpensesChart from './ExpensesChart'


function Home() {

    return (
        <>
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <h2>pendientes</h2>
         <ul>
             <li>Elemento 1</li>
             <li>Elemento 2</li>
             <li>Elemento 3</li>
        </ul>
        <ExpensesChart/>
         </View>
        
        </>
    );
}

export default Home;
