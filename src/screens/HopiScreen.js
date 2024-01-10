import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Fontisto } from "@expo/vector-icons";

import { useTranslation } from "react-i18next";
import Carousel from "react-native-reanimated-carousel";

const images = [
  require("../assets/HopiScreen/Offers/teklif1.jpg"),
  require("../assets/HopiScreen/Offers/teklif2.png"),
  require("../assets/HopiScreen/Offers/teklif3.png"),
  require("../assets/HopiScreen/Offers/teklif4.png"),
  require("../assets/HopiScreen/Offers/teklif5.jpg"),
];

const HopiScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();
  const width = Dimensions.get("window").width;
  return (
    <ScrollView>
      <View style={styles.headContainer}>
        <View style={styles.helloContainer}>
          <Fontisto name="sun" size={24} color="orange" />
          <Text>{t("dolly.hello")}</Text>
          <Text>Keksk</Text>
        </View>
        <View style={styles.moneyContainer}>
          <Text style={styles.paracikText}>
            201.50 {t("dolly.paracikAmount")}
          </Text>
          <Text>
            1 {t("dolly.paracik")} = 1 {t("dolly.paracikDescription")}
          </Text>
          <TouchableOpacity>
            <Text style={{ textDecorationLine: "underline" }}>
              {t("dolly.paracikNavigationButtonTitle")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.carouselHead}>
        <Text style={styles.carouselHeadText}>{t("dolly.carouselTitle")}</Text>
        <View style={styles.carouselIndicator}>
          <Text style={styles.carouselIndicatorText}>
            {currentIndex + 1}/{images.length}
          </Text>
        </View>
      </View>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={images}
        scrollAnimationDuration={2000}
        onSnapToItem={(index) => setCurrentIndex(index)}
        defaultIndex={0}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: width - 20,
                height: width / 2,
                justifyContent: "center",
                marginHorizontal: 10,
                borderRadius: 15,
                elevation: 2,
              }}
            >
              <Image
                source={item}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 15,
                }}
              />
            </View>
          );
        }}
      />
      <Image
        source={require("../assets/HopiScreen/Ads/hepBirlikteAd.png")}
        style={{
          width: "95%",
          alignSelf: "center",
          borderRadius: 10,
          marginVertical: 10,
          height: 100,
        }}
      />
      <Image
        source={require("../assets/HopiScreen/Ads/axessAd.png")}
        style={{
          width: "95%",
          alignSelf: "center",
          borderRadius: 10,
          marginVertical: 10,
          resizeMode: "contain",
        }}
      />
      <View style={styles.suggestionsContainer}>
        <View>
          <Text style={styles.suggestionContainerTitle}>
            {t("dolly.suggestionContainerTitle")}
          </Text>
          <View style={styles.suggestionLeft}>
            <Image
              source={require("../assets/CategoriesScreen/giyim.png")}
              style={{ width: 215, height: 210, borderRadius: 5 }}
            />
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                position: "absolute",
                bottom: 10,
                left: 10,
                color: "#484848",
              }}
            >
              {t("categories.clothes")}
            </Text>
          </View>
        </View>
        <View style={styles.suggestionRight}>
          <View style={styles.suggestionRightTop}>
            <Image
              source={require("../assets/CategoriesScreen/ayakkabı.png")}
              style={{ width: 130, height: 100, borderRadius: 5 }}
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                position: "absolute",
                bottom: 10,
                left: 10,
                color: "#484848",
              }}
            >
              {t("categories.shoe")}
            </Text>
          </View>
          <View style={styles.suggestionRightBottom}>
            <Image
              source={require("../assets/CategoriesScreen/spor.png")}
              style={{ width: 130, height: 100, borderRadius: 5 }}
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                position: "absolute",
                bottom: 10,
                left: 10,
                color: "#484848",
              }}
            >
              {t("categories.sport")}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HopiScreen;

const styles = StyleSheet.create({
  headContainer: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
  },
  helloContainer: {
    flex: 1,
    width: 50,
    height: 100,
    borderRadius: 10,
    paddingLeft: 10,
    justifyContent: "center",
    backgroundColor: "white",
    elevation: 2,
  },
  moneyContainer: {
    flex: 4,
    width: 100,
    height: 100,
    borderRadius: 10,
    paddingLeft: 10,
    justifyContent: "space-around",
    backgroundColor: "white",
    elevation: 2,
  },
  paracikText: {
    color: "orange",
    fontWeight: "bold",
  },
  carouselHead: {
    width: "93%",
    alignSelf: "center",
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  carouselHeadText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#414141",
  },
  carouselIndicator: {
    backgroundColor: "#E0E0E0",
    paddingHorizontal: 13,
    paddingVertical: 3,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  carouselIndicatorText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#414141",
  },
  suggestionsContainer: {
    width: "93%",
    height: 270,
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    alignItems: "flex-end",
    elevation: 2,
  },
  suggestionContainerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#414141",
    marginBottom: 10,
  },
  suggestionLeft: {
    width: 215,
    height: 210,
    borderRadius: 10,
  },
  suggestionRight: {
    gap: 10,
  },
  suggestionRightTop: {
    width: 130,
    height: 100,
    borderRadius: 10,
  },
  suggestionRightBottom: {
    width: 130,
    height: 100,
    borderRadius: 10,
  },
});
