import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface ExpandableViewProps {
    title: string;
    children: React.ReactNode;
}

const ExpandableView: React.FC<ExpandableViewProps> = ({ title, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <View>
            <TouchableOpacity onPress={toggleExpand}>
                <Text>{title}</Text>
            </TouchableOpacity>
            {isExpanded && <View>{children}</View>}
        </View>
    );
};

export default ExpandableView;
