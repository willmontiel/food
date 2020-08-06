import React, { Children, cloneElement } from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import { mainStyles, colors } from '../../constants/styles';

export const Header = (props) => {
  return (
    <View>
      <View style={styles.header}>
        {props.children}
      </View>
      <Divider style={styles.divider} />
    </View>
  )
}

export const Body = (props) => {
  const { image, imagePosition, subBody } = props;
  return (
    <View style={styles.body}>
      <View style={styles.bodyContent}>
        {
          (image && imagePosition === "left")
          &&
          <View>
            {image}
          </View>
        }

        <View style={{
          flex: 1,
          marginRight: (image && imagePosition === "right" ? 10 : 0),
          marginLeft: (image && imagePosition === "left" ? 10 : 0)
        }}
        >
          {props.children}
        </View>

        {
          (image && imagePosition === "right")
          &&
          <View>
            {image}
          </View>
        }
      </View>
      {
        subBody
        &&
        <View style={styles.subBody}>
          {subBody}
        </View>
      }
    </View>
  )
}

export const Footer = (props) => {
  return (
    <View>
      <Divider style={styles.divider} />

      <View style={styles.footer}>
        {props.children}
      </View>
    </View>
  )
}

const Card = (props) => {
  let header;
  let body;
  let footer;

  if (Array.isArray(props.children)) {
    header = props.children.filter(child => child.type === Header);
    body = props.children.filter(child => child.type === Body);
    footer = props.children.filter(child => child.type === Footer);
  } else if (props.children.type === Body) {
    body = props.children;
  } else {
    throw 'No body';
  }

  const bodyWithProps = Children.map(body, child => {
    return cloneElement(child, { mainProps: props })
  });

  return (
    <View style={styles.card}>
      {header && header}
      {bodyWithProps && bodyWithProps}
      {footer && footer}
    </View>
  )
}

const styles = StyleSheet.create({
  ...mainStyles,
  header: {
    padding: 10,
  },
  body: {
    flexDirection: "column", padding: 10
  },
  bodyContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  subBody: {
    paddingTop: 5
  },
  footer: {
    padding: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: colors.orange,
    borderRadius: 5,
    marginVertical: 10
  }
});

export default Card;