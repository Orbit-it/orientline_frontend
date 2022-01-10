import React, {useState} from "react";
import { View, TextInput, StyleSheet,TouchableOpacity, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Feather from 'react-native-vector-icons/Feather';

import defaultStyles from "../config/styles";
import colors from "../config/colors";

const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');

function AppTextInput({ icon, width = "100%", showPass, showOrHidePasswd, ...otherProps }) {

	const [data, setData] = React.useState({
        secureTextEntry: true,
    });

	showOrHidePasswd = data.secureTextEntry ? true : false


	const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
	
	return (
		<View style={[styles.container, { width }]}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					size={20}
					color={defaultStyles.colors.medium}
					style={styles.icon}
				/>
			)}
			<TextInput
				placeholderTextColor={defaultStyles.colors.medium}
				style={styles.test}
				secureTextEntry={showOrHidePasswd}
				{...otherProps}
			/>
			{showPass && ( <TouchableOpacity
					style={styles.showPass}
                    onPress={updateSecureTextEntry}
                >
                {data.secureTextEntry ? 
                <Feather
                name="eye-off"
                color="grey"
                size={24}
            />
            :
                <Feather
                    name="eye"
                    color="grey"
                    size={24}
                />
                }
                </TouchableOpacity>)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.light,
		borderRadius: 10,
		borderWidth:1,
		borderColor:'#00B0F0',
		flexDirection: "row",
		padding: width*0.009,
		marginVertical: 5,
	},
	icon: {
		margin: 10,
	},
	test:{
		width:'80%'
	},
	showPass:{
		justifyContent:'flex-end',
		position:"absolute",
		right:10,
		top:10

	}
});

export default AppTextInput;
