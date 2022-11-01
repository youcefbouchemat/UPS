import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import colors from '../../assets/colors';

const TabBarButton = (props: {
  item: any;
  index: any;
  onPress: any;
  accessibilityState: any;
}) => {
  const {item, onPress, index, accessibilityState} = props;
  const focused = accessibilityState.selected;

  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  const animatableViewDimension = 50;

  const animate1 = {
    0: {scale: 0.5, translateY: 7},
    0.92: {translateY: -34},
    1: {scale: 1.2, translateY: -24},
  };
  const animate2 = {
    0: {scale: 1.2, translateY: -24},
    1: {scale: 1, translateY: 7},
  };

  const circle1 = {
    0: {scale: 0},
    0.3: {scale: 0.9},
    0.5: {scale: 0.2},
    0.8: {scale: 0.7},
    1: {scale: 1},
  };
  const circle2 = {0: {scale: 1}, 1: {scale: 0}};

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({scale: 1});
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({scale: 0});
    }
  }, [focused]);

  return (
    <View
      key={index}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Animatable.View
        ref={viewRef}
        duration={300}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            width: animatableViewDimension,
            height: animatableViewDimension,
            borderRadius: animatableViewDimension / 2,
            borderWidth: 4,
            borderColor: 'white',
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Animatable.View
            ref={circleRef}
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: colors.primary,
              borderRadius: animatableViewDimension / 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
          <Icon
            onPress={onPress}
            name={item.icon}
            type={item.type}
            color={focused ? 'white' : colors.primary}
          />
        </View>

        <Animatable.Text
          ref={textRef}
          style={{fontSize: 10, textAlign: 'center', color: colors.primary}}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </View>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({});
