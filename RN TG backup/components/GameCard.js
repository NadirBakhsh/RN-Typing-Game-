import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import {View,Text} from 'react-native'

const MyComponent = (props) => (
  <Card style={{width:'90%',}}>
    <Card.Content>
      <Title style={{marginTop:10 ,marginLeft: 40}}>{props.word}</Title>
      <Paragraph style={{marginLeft: 40}}>{props.Paragraph}</Paragraph>
    </Card.Content>
    
    <View style={{display:'flex',alignItems:'center',marginTop:10}}>
    {props.component}
    {props.Input}
    </View>
    
    <Card.Actions style={{marginTop:10 ,marginLeft: 40,padding: 10,display:'flex',flexDirection:'row-reverse'}}>
        {props.Button}
    </Card.Actions>
  
  </Card>
);

export default MyComponent;