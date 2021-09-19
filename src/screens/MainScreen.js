import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Dimensions, 
    TouchableOpacity, SafeAreaView, StatusBar, ImageBackground, ActivityIndicator
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import  * as constants from '../constants/constant'
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { isArrayEmpty  } from '../utils/helper';
import EmptyView from '../components/EmptyView';
import YoutubeLogo from '../components/YoutubeLogo';
import VideoItem from '../components/VideoItem';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height; //for map
const LATITUDE = 39.9230; //initial location
const LONGITUDE = 32.8378; //initial location
const LATITUDE_DELTA = 0.0922; //for map view
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO; //for map view
var id = 0 //for marker
let count = 1 //page

const HelloWorldScreen = () =>{
    const latestvideos = useSelector((state) => state.youtube.latestvideos);//youtubevideos
    const nextToken = useSelector((state) => state.youtube.nextToken);//pagination
    const length = useSelector((state) => state.youtube.length);//lengthofvideos
    const [page, setPage] = useState(1);
    const [latitude, setLatitude] = useState(LATITUDE);
    const [longitude, setLongitude] = useState(LONGITUDE);
    const [imageloading, setImageLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(true);
    const [msg, setMsg] = useState("Select a location on map and find latest youtube videos");
    const [region, setRegion] = useState({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    });
    const [markers, setMarker] = useState({
          coordinate: {
            "latitude": LATITUDE,
            "longitude": LONGITUDE,
          },
          key: id++,
          color: 'red',
    });
    const dispatch = useDispatch();

    useEffect(() => {
        count = 1
        setPage(count)
        isArrayEmpty(latestvideos) ? setIsEmpty(true) : setIsEmpty(false)
    },[longitude, latitude]);

    const renderItem = ({ item }) =>  {
        return(
            <VideoItem 
                item={item}
                imageloading={imageloading}
                setImageLoading={()=>setImageLoading()}
            />
        )
    }

    const onMapPress = (e) => {
        setMarker({
            coordinate: e.nativeEvent.coordinate,
            key: id++,
            color: 'red',
        });
        setLatitude(e.nativeEvent.coordinate.latitude)
        setLongitude(e.nativeEvent.coordinate.longitude)
    }

    const getLatestVideos = async() =>{
        await dispatch({type: constants.GET_LATEST_VIDEOS_REQUESTED, lat: latitude, long: longitude, nextPageToken: nextToken, page:page})
        count++
        setPage(count)
        setIsEmpty(false)
    }

    const getMore = async() =>{
        if( count < Math.ceil(length/10)+1 ){
            await dispatch({type: constants.GET_LATEST_VIDEOS_REQUESTED, lat: latitude, long: longitude, nextPageToken: nextToken, page:page})
            count++
            setPage(count)
        }
        setIsEmpty(false)
    }

    return ( 
        <SafeAreaView testID={"Container"} style={{backgroundColor: 'white', marginTop: StatusBar.currentHeight}}>
            <View testID={"Map"} style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    initialRegion={region}
                    onPress={e => onMapPress(e)}
                >
                    <Marker
                        key={markers.key}
                        coordinate={markers.coordinate}
                        pinColor={markers.color}
                    />
                </MapView>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => getLatestVideos()}
                        style={styles.bubble}
                    >
                        <Text>Find</Text>
                    </TouchableOpacity>
                </View>
            </View>
                <YoutubeLogo marginTop={styles.container.height}/>
                { 
                isEmpty ? 
                    <EmptyView text={msg}/>
                :
                
                    <FlatList
                        data = {latestvideos}
                        renderItem = {renderItem}
                        numColumns={1}
                        style={{backgroundColor: 'white', height:height/2}}
                        contentContainerStyle={{flexGrow: 1}}
                        onEndReached={() => getMore()}
                        onEndReachedThreshold={0.5}
                    />
                }
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: height/2.5,
        width: width,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        backgroundColor: 'rgba(220,220,220,0.9)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
        width: width/3,
        alignItems:'center'
    },
    buttonContainer: {
        backgroundColor: 'transparent',
        marginVertical:20
    },
    buttonContainer2: {
        backgroundColor: 'transparent',
        marginVertical:20,
        alignItems:'center'
    },
});

export default HelloWorldScreen