import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button, Icon, Text, Header } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const [newValues, setNewValues] = useState({
        username: '',
        password: '',
    });
    const [showErrorEmptyFields, setShowErrorEmptyFields] = useState(false);
    const [showErrorLoginFails, setShowErrorLoginFails] = useState(false);

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const handleChangeUsername = (e) => {
        setNewValues({ ...newValues, 'username': e });
        setShowErrorEmptyFields(false);
    }

    const handleChangePassword = (e) => {
        setNewValues({ ...newValues, 'password': e });
        setShowErrorEmptyFields(false);
    }
  
    const attemptLogin = async () => {
        if (!newValues.username || !newValues.password) {
            setShowErrorEmptyFields(true);
            return
        }
        // submit
        fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": newValues.username,
                "password": newValues.password,
            })
        }).then(function (response) {
            return response.json();
        }).then(async function (response) {
            if (response.success) {
                await AsyncStorage.setItem("token", response.token);
                await AsyncStorage.setItem("userId", response.userId);
                navigation.navigate('Home')
            } else {
                setShowErrorLoginFails(true);
                return;
            }
        }).catch(error => { throw new Error(error); });

        // reset form
        setNewValues({
            username: '',
            password: '',
        });
    }
    return (
        
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Header centerComponent={{text: 'Budget Tracker', style: {color: "#fff"}}}/>
        <Input
          id='username'
          placeholder='username*'
          leftIcon={{  name: 'person-outline' }}
          onChangeText={handleChangeUsername}
          value={username}
        />
        <Input
         id='password'
          placeholder='password*'
          leftIcon={{type:'ionicon',  name: 'lock-closed-outline' }}
          onChangeText={handleChangePassword}
          value={password}
          secureTextEntry={!showPassword}
          rightIcon={
            <Icon
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            type='ionicon'
            onPress={handlePasswordVisibility}
            ></Icon>
          }
        />
        <Button buttonStyle={{backgroundColor: '#B10BFA'}} title="Login" onPress={attemptLogin} />
        {showErrorEmptyFields && <Text> All fields are required </Text>}
        {showErrorLoginFails && <Text> Wrong username or password </Text>}
      </View>
    );
  }

export default Login