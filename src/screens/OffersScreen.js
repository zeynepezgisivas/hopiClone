import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import { useTranslation } from "react-i18next";

const Images = [
  {
    id: 1,
    source: require("../assets/CategoriesScreen/akaryakıtveotomotiv.png"),
    title: "fuelandautomotive",
  },
  {
    id: 2,
    source: require("../assets/CategoriesScreen/aksesuar.png"),
    title: "accessory",
  },
  {
    id: 3,
    source: require("../assets/CategoriesScreen/ayakkabı.png"),
    title: "shoe",
  },
  {
    id: 4,
    source: require("../assets/CategoriesScreen/bankacılıkvesigorta.png"),
    title: "bankingandinsurance",
  },
  {
    id: 5,
    source: require("../assets/CategoriesScreen/bebekveçocuk.png"),
    title: "babyandkid",
  },
  {
    id: 6,
    source: require("../assets/CategoriesScreen/çanta.png"),
    title: "bag",
  },
  {
    id: 7,
    source: require("../assets/CategoriesScreen/eğlenceveetkinlik.png"),
    title: "entertainmentandactivity",
  },
  {
    id: 8,
    source: require("../assets/CategoriesScreen/elektronik.png"),
    title: "electronic",
  },
  {
    id: 9,
    source: require("../assets/CategoriesScreen/evvedekorasyon.png"),
    title: "homeanddecoration",
  },
  {
    id: 10,
    source: require("../assets/CategoriesScreen/giyim.png"),
    title: "clothes",
  },
  {
    id: 11,
    source: require("../assets/CategoriesScreen/hizmet.png"),
    title: "service",
  },
  {
    id: 12,
    source: require("../assets/CategoriesScreen/kitap.png"),
    title: "book",
  },
  {
    id: 13,
    source: require("../assets/CategoriesScreen/kozmetik.png"),
    title: "cosmetic",
  },
  {
    id: 14,
    source: require("../assets/CategoriesScreen/seyahat.png"),
    title: "trip",
  },
  {
    id: 15,
    source: require("../assets/CategoriesScreen/spor.png"),
    title: "sport",
  },
  {
    id: 16,
    source: require("../assets/CategoriesScreen/yemeveiçme.png"),
    title: "eatinganddrinking",
  },
];

const ImageContainer = ({ imageSource, imageTitle }) => {
  const { t } = useTranslation();
  return (
    <View style={styles.categoryImageContainer}>
      <Image
        source={imageSource}
        style={{ width: "100%", height: "100%", borderRadius: 10 }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          position: "absolute",
          bottom: 10,
          left: 10,
          color: "#484848",
        }}
      >
        {t(`categories.${imageTitle}`)}
      </Text>
    </View>
  );
};

const OffersScreen = () => {
  const { t } = useTranslation();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.header}>
        <View style={styles.detail}>
          <AntDesign name="tago" size={30} color="black" />
          <Text style={styles.allOffersText}>
            {t("categories.showAllOffers")}
          </Text>
        </View>
        <AntDesign name="right" size={24} color="black" />
      </View>
      <View>
        <View style={styles.categoriesContainer}>
          <FlatList
            data={Images}
            numColumns={2}
            renderItem={({ item }) => (
              <ImageContainer
                imageSource={item.source}
                imageTitle={item.title}
              />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default OffersScreen;

const styles = StyleSheet.create({
  header: {
    width: "95%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    marginTop: 10,
    alignSelf: "center",
  },
  detail: {
    flexDirection: "row",
    gap: 10,
  },
  allOffersText: {
    fontSize: 20,
  },
  categoriesContainer: {
    width: "95%",
    alignSelf: "center",
    marginVertical: 10,
    marginBottom: 80,
  },
  categoryImageContainer: {
    backgroundColor: "white",
    width: "44%",
    height: 170,
    margin: 10,
    borderRadius: 10,
  },
});
