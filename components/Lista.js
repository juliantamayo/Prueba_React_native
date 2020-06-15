import React from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './Estilos/Style.js';

class Box extends React.Component{
  render(){
    return(
        <View style={styles.cell}>
          <Image 
            style={styles.imageView} 
            source={{uri: this.props.cellItem.image[2]['#text']}}/>
          <View style={styles.contentView}>
            <Text style={[styles.whiteText, styles.boldText]}>{this.props.cellItem.name}</Text>
            <Text style={styles.whiteText}>{this.props.cellItem.artist.name}</Text>
          </View>
          <View style={styles.accessoryView}>
          <Text style={[styles.textCenter, styles.RedText]}>></Text>
          </View>
        </View>
    )
  }
}

export default class list extends React.Component {
  fetchTopTracks(){
    const apiKey = "829751643419a7128b7ada50de590067"
    const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=${apiKey}&format=json`
    return fetch(url)
    .then(response => response.json())
  }

  constructor(props){
    super(props)

    this.state = { tracks:[] }

    //fetch api data
    this.fetchTopTracks()
    .then(json => { this.setState({tracks: json.tracks.track}) 
    })
  }
  render() {

    return ( 
    <View style = {styles.container}>

        <View style={styles.header}>
              <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
                onPress={() => this.props.navigation.openDrawer()}>
                       <Text style={styles.text2}>Menu</Text>
              </TouchableOpacity>
        </View>
        <View style={styles.vBody2}>
              <FlatList 
                data={this.state.tracks}
                renderItem={({item}) => (
                  <Box cellItem={item}/>
                )}
                keyExtractor={(_, index) => index}
              />
        </View>
    </View>
    );
  }
}
