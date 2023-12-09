import React from 'react';
import { View, Text } from 'react-native';

interface Props {
    creche: string;
    article: {
        name: string;
        quantity: number;
    }[];
}

const CrecheLine: React.FC<Props> = ({ creche }) => {
    return (
        <View>
            <Text>{creche}</Text>
        </View>
    );
};

export default CrecheLine;
