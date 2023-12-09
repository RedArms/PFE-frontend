import React, { useState } from 'react';
import { ScrollView, View, Text,TouchableWithoutFeedback } from 'react-native';
import styles from './CrecheLineStyle';

interface Props {
  creche: string;
  article: {
    name: string;
    quantity: number;
  }[];
}

const CrecheLine: React.FC<Props> = ({ creche, article }) => {
    const [isArticleVisible, setisArticleVisible] = useState(false);
    const toggleArticleVisible = () => {
      setisArticleVisible(!isArticleVisible);
    };

  return (
    
    <ScrollView>
    <View style={styles.toursChooseLine}>
      <TouchableWithoutFeedback onPress={toggleArticleVisible}>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>{creche}</Text>
        </View>
      </TouchableWithoutFeedback>

      {isArticleVisible && (
        <ScrollView style={{ ...styles.crecheContainer}}>
          {article.map((articleLine, index) => (
            <Text style={styles.crecheLine} key={index}>
              {articleLine.name} : {articleLine.quantity}
            </Text>
          ))}
        </ScrollView>
      )}
    </View>
  </ScrollView>
  );
};

export default CrecheLine;
