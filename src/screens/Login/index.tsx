import React, { useState, useEffect } from "react";
import { View, Text, KeyboardAvoidingView, TextInput } from "react-native";
import { ButtonComp } from "../../components"

export default function Login() {

    function handleLogin() {
        console.log("Login")
    }

    return (
        <View>
            <KeyboardAvoidingView>
                <Text>LOGIN</Text>
                <View>
                    <TextInput
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
                <View>
                    <TextInput
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