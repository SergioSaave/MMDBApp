import { FlatList } from "react-native";
import React from "react";
import SemanasList from "../components/Semana/SemanasList";
import { semanas } from "../assets/semanas";

const SemanasScreen = ({navigation}) => {
  const renderSemana = ({ item }) => {
    return <SemanasList navigation={navigation} semana={item} />;
  };

  return <FlatList data={semanas} renderItem={renderSemana} />;
};

export default SemanasScreen;
