import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Controller } from 'react-hook-form';
import { StyleSheet } from 'react-native';

const TextInputWithController = ({ name, control, label, placeholder, multiline }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{label}</Text>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        mode="outlined"
                        placeholder={placeholder}
                        value={value}
                        onChangeText={onChange}
                        style={styles.input}
                        multiline={multiline}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        marginVertical: moderateScale(16)
    },
    sectionTitle: {
        fontSize: textScale(16),
        fontWeight: '600',
        marginBottom: moderateScale(12),
        color: Colors.black
    },
    input: {
        backgroundColor: Colors.white
    },
});

export default TextInputWithController;
