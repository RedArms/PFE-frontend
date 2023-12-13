import React from "react";
import { ScrollView , StyleSheet} from "react-native";
import CrecheLine from "../CrecheLine/CrecheLine";
import { Client } from "../../models/Client";

interface Props {
  creches: Client[];
  onHandleIndicateToDelivered: () => void;
  idTour: number;
  date: string;
}

const CrecheComponent: React.FC<Props> = ({
  creches,
  onHandleIndicateToDelivered,
  idTour,
  date,
}) => {
  return (
    <ScrollView style={styles.creche}>
      {creches.map((creche, index) => (
        <CrecheLine
          creche={creche}
          onHandleIndicateToDelivered={onHandleIndicateToDelivered}
          key={index}
          idTour={idTour}
          date={date}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create( {
  creche: {
    padding: 20,
  },
});
export default CrecheComponent;
