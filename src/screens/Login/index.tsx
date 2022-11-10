import React, { useState, useEffect } from "react";
import { View, Text, KeyboardAvoidingView, TextInput } from "react-native";
import { ButtonComp } from "../../components"
import styles from "./styles";
import { useAuth } from "../../hook/auth";
import { LoginTypes } from "../../types/Screen.types";
import { IAuthenticate, IUser } from "../../interfaces/User.interface";
import { AxiosError } from "axios";

export default function Login({ navigation }: LoginTypes) {
        const { signIn } = useAuth();
        const [data, setData] = useState<IAuthenticate>();
        const [isLoading, setIsLoading] = useState(true);
      
        async function handleSignIn(){
          try{
           setIsLoading(true);
           if (data?.email && data.password) {
            await signIn(data);
           }else{
      
            Alert.alert("Preencha todos os campos!!!");
            setIsLoading(false);
           }
          }catch (error){
            const err = error as AxiosError;
            const data = err.response?.data as IUser;
            let message = "";
              if (data.data) {
                for (const [key, value] of Object.entries(data.data)) {
                  message = `${message} ${value}`;
                }
              }
              Alert.alert(`${data.message} ${message}`);
              setIsLoading(false);
          }
        }
        useEffect(() => {
          setIsLoading(false);
      }, []);

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>LOGIN</Text>
                <View style={styles.input}>
                    <TextInput
                        style={{width: 280, padding: 5}}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        style={{width: 280, padding: 5}}
                        placeholder="Senha"
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                </View>
                <View>
                    <ButtonComp title="Login" type="login" onPress={handleSignIn} />
                </View>
            </KeyboardAvoidingView>
        </View>
    )

}