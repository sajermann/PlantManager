import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import colors from '../styles/colors';
import user from '../assets/BrunoSajermann.png'
import fonts from '../styles/fonts';

export function Header(){
	const [username, setUsername] = useState<string>();

	useEffect(()=>{
		async function getName() {
			const user = await AsyncStorage.getItem('@plantmanager:name');
			setUsername(user || '');
		}
		getName();
	},[])
	return(
		<View style={styles.container}>
			<View>
				<Text style={ styles.greeting }>Olá,</Text>
				<Text style={ styles.userName }>{username}</Text>
			</View>
			<Image source={user}  style={ styles.image } />
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		// paddingVertical: 20,
		marginTop: getStatusBarHeight(),
	},
	greeting:{
		fontSize: 32,
		color: colors.heading,
		fontFamily: fonts.text
	},
	userName:{
		fontSize: 32,
		fontFamily: fonts.heading,
		color: colors.heading,
		lineHeight: 40
	},
	image:{
		width: 70,
		height: 70,
		borderRadius: 35
	}
})