import React from "react";
import Login from "./../components/pages/login/Login"
import Home from "./../components/pages/home/Home"
/* import { Routes, Route } from "react-router-dom"; */
/* 
import Expense from "./../components/pages/expense/Expense"
import Income from "./../components//pages/income/Income"
import Transfer from "./../components/pages/transfer/Transfer"
import routePaths from "./routePaths"
import NotFound from "./NotFound" */

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()


function AppRoutes() {
    return (
        <>
           {/*  <Routes>
                <Route path={routePaths.login} element={<Login />} />
                <Route path={routePaths.home} element={<Home />} />
                <Route path={routePaths.expense} element={<Expense />} />
                <Route path={routePaths.income} element={<Income />} />
                <Route path={routePaths.transfer} element={<Transfer />} />
                <Route path="*" element={<NotFound />} />
            </Routes> */}
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login}  />
                <Stack.Screen name='Home' component={Home}  />
            </Stack.Navigator>

        </>);
}

export default AppRoutes;