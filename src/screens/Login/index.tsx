import React, { useState, useEffect } from "react";
import { View, Text, KeyboardAvoidingView, TextInput } from "react-native";
import { ButtonComp } from "../../components"
import { LoginTypes } from "../../types/Screen.types";
import styles from "./styles";

export default function Login({ navigation }: LoginTypes) {

    function handleLogin() {
        // navigation.navigate("Tab")
        console.log('login')
    }

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
                    <ButtonComp title="Login" type="login" onPress={handleLogin} />
                </View>
            </KeyboardAvoidingView>
        </View>
    )

}