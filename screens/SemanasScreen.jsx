import { View, Text, FlatList } from "react-native";
import React from "react";
import SemanasList from "../components/SemanasList";
import SemanaOnly from "../components/SemanaOnly";
import { semanas } from "../assets/semanas";

const SemanasScreen = () => {
  const renderSemana = ({ item }) => {
    return <SemanasList semana={item} />;
  };

  return <FlatList data={semanas} renderItem={renderSemana} />;
};

export default SemanasScreen;
