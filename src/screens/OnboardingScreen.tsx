import React, { useRef, FC } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import Swiper from "react-native-swiper";
import { Colors } from "../utils/Colors";
import OnboardItem from "../components/global/OnboardItem";
import { navigate } from "../utils/NavigationUtil";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const OnBoardingScreen: FC = () => {
  const swiperRef = useRef<Swiper>(null);

  const goToNextSlide = () => {
    swiperRef?.current?.scrollBy(1);
  };

  const navigation = async (path: string) => {
    navigate(path);
  };

  return (
    <Swiper
      ref={swiperRef}
      loop={false}
      showsPagination={true}
      showsButtons={false}
      paginationStyle={styles.paginationStyle}
      activeDotColor={Colors.primary}
      activeDotStyle={{
        width: 0,
        height: 0,
      }}
      dotColor="#D9D9D9"
      scrollEnabled={true}
    >
      <View style={styles.slide}>
        <OnboardItem
          imageSource={require("../assets/images/onboard1.png")}
          title="Pegue todos os eventos agora com suas próprias mãos"
          subtitle="Fácil de encontrar eventos próximos com base em seus interesses."
          onPressFirst={goToNextSlide}
          buttonTitleFirst="Próximo"
        />
      </View>

      <View style={styles.slide}>
        <OnboardItem
          imageSource={require("../assets/images/onboard2.png")}
          title="Pagamento fácil e ingresso rápido para eventos"
          subtitle="Obtenha ofertas e descontos incríveis em seus ingressos para eventos."
          onPressFirst={goToNextSlide}
          buttonTitleFirst="Próximo"
        />
      </View>

      <View style={styles.slide}>
        <OnboardItem
          imageSource={require("../assets/images/onboard3.png")}
          title="Vamos para o seu evento favorito agora"
          subtitle="Crie sua conta e explore a comunidade de eventos e organizadores."
          onPressFirst={() => navigation("LoginScreen")}
          onPressSecond={() => navigation("RegisterScreen")}
          buttonTitleFirst="Entrar"
          buttonTitleSecond="Inscrever-se"
        />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: "white",
  },
  paginationStyle: {
    marginRight: w * 0.64,
    marginBottom: h * 0.009,
    bottom: -100,
  },
});

export default OnBoardingScreen;
