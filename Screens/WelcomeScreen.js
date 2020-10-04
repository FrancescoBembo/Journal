import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import { Formik } from "formik";

import colors from "../config/colors.js";
import SubmitButton from "../components/SubmitButton.js";
import SecondaryButton from "../components/SecondaryButton.js";
import AppTextInput from "../components/AppTextInput.js";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/welcomeLogo.png")}
        />
        <Text style={styles.tagline}>Tell me how you feel...</Text>
      </View>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <View style={styles.buttonsContainer}>
              <AppTextInput
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="Email"
                icon="ios-mail"
              />
              {touched.email && <Text>{errors.email}</Text>}
              <AppTextInput
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
                secureTextEntry={true}
                textContentType="password"
                autoCapitalize="none"
                placeholder="Password"
                icon="ios-lock"
              />
              {touched.password && <Text>{errors.password}</Text>}
              <SubmitButton title="Login" />
              <SecondaryButton
                title="Register"
                onPress={() => console.log("Register")}
              />
            </View>
          </>
        )}
      </Formik>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 150,
    alignItems: "center",
  },
  logo: {},
  tagline: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 20,
  },
  inputContainer: {
    position: "absolute",
    top: 350,
    width: "90%",
    alignItems: "center",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 80,
    width: "90%",
    alignItems: "center",
  },
});

export default WelcomeScreen;
