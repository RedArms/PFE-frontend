import React from 'react';
import {ScrollView } from 'react-native';
import CrecheLine from '../CrecheLine/CrecheLine';
import { Client } from '../../models/Client';

interface Props {
    creches: Client[];
    onHandleIndicateToDelivered: () => void;

}

const CrecheComponent: React.FC<Props> = ({creches, onHandleIndicateToDelivered}) => {
   
    return (
        <ScrollView style={styles.creche}>
            {creches.map((creche, index) => (
                <CrecheLine creche={creche}  onHandleIndicateToDelivered={onHandleIndicateToDelivered} key={index} />
            ))}
        </ScrollView>
    );
};

const styles = {
    creche: {
      padding: 20,
    },
  };
export default CrecheComponent;
