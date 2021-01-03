import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0px 30px ${Platform.OS === 'ios' ? 40 : 150}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0px 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0px ${16 + getBottomSpace()}px;
`;

export const BackToSignInText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
