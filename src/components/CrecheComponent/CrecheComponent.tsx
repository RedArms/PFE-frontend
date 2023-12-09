import React from 'react';
import { View } from 'react-native';
import CrecheLine from '../CrecheLine/CrecheLine';

interface Props {

}

const CrecheComponent: React.FC<Props> = () => {
    let creches=[
        {
            creche : "Creche 1",
            article : [{name:"article 1",quantity:1},{name:"article 2",quantity:2},{name:"article 3",quantity:3}]
        },
        {
            creche: "Creche 2",
            article : [{name:"article 1",quantity:1},{name:"article 2",quantity:2},{name:"article 3",quantity:3}]
        },
        {
            creche: "Creche 3",
            article : [{name:"article 1",quantity:1},{name:"article 2",quantity:2},{name:"article 3",quantity:3}]
        }
    ]
    return (
        <View>
            {creches.map((creche, index) => (
                <CrecheLine creche={creche.creche} article={creche.article}  key={index} />
            ))}
        </View>
    );
};

export default CrecheComponent;
