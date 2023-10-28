import { FlatList } from "react-native";
import React, { useEffect, useRef } from "react";
import SemanasList from "../components/Semana/SemanasList";
import { semanas } from "../assets/semanas";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";

const SemanasScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const flatListRef = useRef(null);
  const isFocused = useIsFocused();

  const renderSemana = ({ item }) => {
    return <SemanasList navigation={navigation} semana={item} />;
  };

  useEffect(() => {
    if (isFocused) {
      const scrollTimer = setTimeout(() => {
        if (user.logeado === true) {
          flatListRef.current.scrollToIndex({
            index: user.semana - 1,
            animated: true,
          });
        }
      }, 1000);

      // Clear the timer when the component unmounts to avoid memory leaks
      return () => clearTimeout(scrollTimer);
    }
  }, [isFocused]);

  return (
    <>
      <FlatList ref={flatListRef} data={semanas} renderItem={renderSemana} />
    </>
  );
};

export default SemanasScreen;
