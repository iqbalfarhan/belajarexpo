import { Text, TextProps } from 'react-native';
import React, { FC } from 'react';
import styles from '../styles/global';

type Props = TextProps;

const Paragraf: FC<Props> = (props) => {
  return <Text style={styles.paragraf}>{props.children}</Text>;
};

export default Paragraf;
