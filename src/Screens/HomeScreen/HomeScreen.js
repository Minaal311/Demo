import {View, Text, FlatList, Image,ImageBackground,ScrollView,TextInput} from 'react-native';
import React, {useRef, useState, useCallback, useEffect} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import styles from './styles';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import { EVENTDATA, EVENTDATA_HORIZONTAL, PAGINATION_HORIZONTAL } from '../../constants/constants';
import CardVerticalHomeList from '../../Components/CardVerticalHomeList';
import CardHorizontalHomeList from '../../Components/CardHorizontalHomeList';

import { moderateScale, textScale } from '../../styles/responsiveSize';
import PaginationCard from '../../Components/PaginationCard';
import TextInputWithLabel from '../../Components/TextInputWithLabel';


const HomeScreen = ({navigation}) => {

    useEffect(()=>{
        updateState({mainList:EVENTDATA, horizontalData:EVENTDATA_HORIZONTAL, paginationData:PAGINATION_HORIZONTAL})
    },[])
// const paginationData;
    const [state, setState] = useState({
        mainList:[],
        horizontalData:[],
         paginationData:[]
    });
    const {mainList,horizontalData,paginationData} = state;
    const updateState = data => setState(state => ({...state, ...data}));


    const renderVerticalList = useCallback(({item, index}) => {
        return <CardVerticalHomeList key={index} item={item} index={index}/>;
      }, []);

const horizontalRenderList = useCallback(({item, index}) => {
    return <CardHorizontalHomeList key={index} item={item} index={index}/>;
  }, []);

  const paginationView = useCallback(({item, index}) => {
    return <PaginationCard key={index} item={item} index={index}/>;
  }, []);


  return(
      <WrapperContainer statusBarColor={colors.black}>
          <View style={styles.entireView}>
     

<FlatList
data={mainList}
renderItem={renderVerticalList}
ListHeaderComponent={() => (
    <>
<View style={styles.nameNotificationView}>
<Text style={styles.nameText}>{strings.HI_BERND}</Text>
<Image source={imagePath.notificationIcon}/>
</View>
<View style={styles.dateMapView}>
    <View style={styles.locationDateView}>
    <Text style={styles.dateText}>Tuesday, 3 May</Text>
    <Text style={styles.locationText}>{strings.LOCATION_PLACE}</Text>
    </View>
    <Image source={imagePath.mapLocation}/>
</View>

<TextInputWithLabel
placeholder={strings.PLACEHOLDAR}
/>

<View style={styles.headerView}>
    <Text style={styles.eventsTextPopular}>{strings.TODAY_EVENT}</Text>
</View>
    <FlatList
    data={paginationData}
    renderItem={paginationView}
// contentContainerStyle={{justifyContent:"space-around"}}
    horizontal
    // snapToAlignment={"start"} 
    //   snapToInterval={200}
    // decelerationRate={"fast"}
    // pagingEnabled
/>

{/* <View>
<ScrollView 
horizontal
pagingEnabled
// onMomentumScrollEnd
>
{paginationData.map(ob=>(
      <ImageBackground
        source={{uri: ob.imageData}}
        style={{height:moderateScale(160),resizeMode:"cover",flex:1}}
      >
</ImageBackground>)
      )}   
</ScrollView>
</View> */}

<View style={styles.headerView}>
    <Text style={styles.eventsTextPopular}>{strings.POPULAR_EVENTS}</Text>
    <Text style={styles.seeAllText}>{strings.SEE_ALL}</Text>
</View>
    <FlatList
    data={horizontalData}
    horizontal
    renderItem={horizontalRenderList}
    />
    <View style={styles.headerView}>
    <Text style={styles.eventsTextPopular}>Popular Events</Text>
    <Text style={styles.seeAllText}>{strings.SEE_ALL}</Text>
</View>
    </>
)}
/>
          </View>
    </WrapperContainer>
  );
};

export default HomeScreen;


