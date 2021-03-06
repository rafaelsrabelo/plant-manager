import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { Button } from "../components/Button";

export function UserIdentification() {
const [isFocused, setIsFocused] = useState(false);
const [isFilled, setIsFilled] = useState(false);
const [name, setName] = useState<string>();

const navigation = useNavigation();

    function handleInputBlut() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }



    function handleSubmit() {
        navigation.navigate('Confirmation');
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <View style={styles.header}>
                                <Text style={styles.title}>
                                    Como podemos {'\n'}
                                    chamar você?
                                </Text>
                            </View>

                            <TextInput
                                style={[
                                    styles.input,
                                    (isFocused || isFilled ) && 
                                    { borderColor: colors.green }
                                ]}
                                placeholder={'Digite seu nome'}
                                onBlur={handleInputBlut}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />
                            <View style={styles.footer}>
                                <Button 
                                    title="Confirmar"
                                    onPress={handleSubmit}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    content: {
        flex: 1,
        width: '100%'
    },

    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },

    emoji: {
        fontSize: 44,
        color: colors.heading
    },

    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },

    title: {
        textAlign: 'center',
        fontSize: 24,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 32
    },

    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20
    },

    header: {

    }
})