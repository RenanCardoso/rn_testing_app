import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomSafeAreaViewScroll from "../components/global/CustomSafeAreaViewScroll";
import CustomHeading from "../components/global/CustomHeading";
import Input from "../components/ui/Input";
import CustomButton from "../components/ui/CustomButton";
import FooterTextTouchable from "../components/ui/FooterTextTouchable";
import { useDispatch } from "react-redux";

import { navigate } from "../utils/NavigationUtil";
import { AppDispatch } from "../redux/store";
import { registerUser } from "../redux/reducers/userSlice";

interface InputErrors {
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  password?: string | null;
  [key: string]: string | null | undefined;
}

const RegisterScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [inputs, setInputs] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  const [errors, setErrors] = useState<InputErrors>({});

  const handleOnChange = (text: string, input: string) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (errorMessage: string | null, input: string) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  const validateInputs = () => {
    const newErrors: InputErrors = {};

    if (!inputs.first_name.trim()) {
      newErrors.first_name = "Por favor insira seu primeiro nome";
    } else {
      newErrors.first_name = null;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inputs.email.trim()) {
      newErrors.email = "Por favor insira seu e-mail";
    } else if (!emailRegex.test(inputs.email.trim())) {
      newErrors.email = "Por favor insira um e-mail válido";
    } else {
      newErrors.email = null;
    }

    if (!inputs.last_name.trim()) {
      newErrors.last_name = "Digite seu sobrenome";
    } else {
      newErrors.last_name = null;
    }

    if (!inputs.password.trim()) {
      newErrors.password = "Digite sua senha";
    } else {
      newErrors.password = null;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).every((key) => !newErrors[key]);
  };

  const SignUpHandler = async () => {
    const isValid = validateInputs();
    if (isValid) {
      dispatch(registerUser(inputs)).then(() => {
        navigate("HomeScreen");
      });
    }
  };

  return (
    <CustomSafeAreaViewScroll>
      <CustomHeading title="Inscrever-se" />
      <View style={styles.inputContainer}>
        <Input
          testID="first_name"
          value={inputs.first_name}
          onChangeText={(text) => handleOnChange(text, "first_name")}
          onFocus={() => handleError(null, "first_name")}
          placeholder="Primeiro nome"
          placeholderTextColor="#FFF"
          error={errors.first_name}
        />
        <Input
          testID="last_name"
          value={inputs.last_name}
          onChangeText={(text) => handleOnChange(text, "last_name")}
          onFocus={() => handleError(null, "last_name")}
          placeholder="Último nome"
          placeholderTextColor="#FFF"
          error={errors.last_name}
        />
        <Input
          testID="email"
          value={inputs.email}
          onChangeText={(text) => handleOnChange(text, "email")}
          onFocus={() => handleError(null, "email")}
          placeholder="E-mail"
          placeholderTextColor="#FFF"
          error={errors.email}
        />
        <Input
          testID="password"
          value={inputs.password}
          onChangeText={(text) => handleOnChange(text, "password")}
          onFocus={() => handleError(null, "password")}
          placeholder="Senha"
          placeholderTextColor="#FFF"
          error={errors.password}
          secureTextEntry
        />
        <CustomButton title="Inscrever-se" testID="Register" onPress={SignUpHandler} />
      </View>
      <FooterTextTouchable
        text="Já tem uma conta? Entrar"
        onPress={() => navigate("LoginScreen")}
      />
    </CustomSafeAreaViewScroll>
  );
};

const styles = StyleSheet.create({
  inputContainer: { marginTop: 20 },
});

export default RegisterScreen;
