// RegistrationForm.js
import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import SimpleButton from "../buttons/SimpleButton";
import { isPasswordSecure } from "../logics/passwordPolicy";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordWarning, setPasswordWarning] = useState("");
  const passwordCriteria = [
    "PASSWORD Rules",
    "At least 8 characters long",
    "Includes at least one lowercase letter (a-z)",
    "Includes at least one uppercase letter (A-Z)",
    "Includes at least one digit (0-9)",
    "Includes at least one special character from -@$!%*?&",
  ];

  const handleRegistration = () => {
    // Implement your registration logic here
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    // Check password criteria
    const warning = isPasswordSecure(password);
    if (warning) {
      setPasswordWarning(warning);
      return; // Stop registration if password is insecure
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        Registration Form
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <View style={styles.infoContainer}>
        {passwordCriteria.map((criterion, index) => (
          <Text style={styles.info} key={index}>
            {criterion}
          </Text>
        ))}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <SimpleButton
          onPress={handleRegistration}
          title="Register"
          position={{ top: 10 }}
        />
        <SimpleButton
        onPress={() => {
          setUsername("");
          setPassword("");
          setConfirmPassword("");
          setPasswordWarning("");
        }}
        title="Clear"
        position={{ top: 10 }}
      />
      </View>
      {passwordWarning ? (
        <Text style={styles.warning}>{passwordWarning}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "green",
    borderWidth: 3,
    margin: 10,
    padding: 10,
    width: 300,
    color: "white",
  },
  warning: {
    color: "red",
    marginTop: 10,
  },
  info: {
    color: "orange",
    marginTop: 10,
    fontSize: 10,
  },
  infoContainer: {
    borderColor: "blue",
    borderWidth: 3,
    borderRadius: 20,
    padding: 10,
  },
});

export default RegistrationForm;
