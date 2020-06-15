import {StyleSheet} from 'react-native';

export default StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
      flex:0.1,
      height :'100%',
      width : '100%',
      justifyContent: 'flex-end',
      backgroundColor: "red"
     },   
  vBody: {
      flex:0.9,
      alignItems: 'center',
       justifyContent: 'center',
      height :'100%',
      width : '100%',
      backgroundColor: "black"
     },
  vBody2: {
    flex:0.9,
    paddingTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "row",
    backgroundColor: '#000'
     },
  text:{
    fontSize :30,
    color: 'white',
    fontWeight: 'bold',
  }, 
  text2:{
    fontSize :20,
    color: 'white',
    fontWeight: 'bold',
  }, 
  imageContainer: {
       margin: 10,
     },
  cell: {
    flexDirection: 'row',
    height: 75,
    marginBottom: 5,
  },
  imageView:{
    width: 75,
    height: 75,
    borderRadius: 10,
    marginRight: 10,
  },
  contentView:{
    flex: 1,
  },
  accessoryView:{
    width: 40,
    justifyContent: 'center'
  },  
  textCenter: {
    textAlign: 'center'
  },
  whiteText:{
    color: 'white',
  },
  RedText:{
    color: 'red',
  },
  boldText:{
    fontWeight: 'bold'
  }
});

