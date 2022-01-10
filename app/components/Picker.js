import React, { useState } from "react";
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Modal,
	Button,
	FlatList,
	Dimensions
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import Screen from "./Screen";
import Text from "./Text";
import PickerItem from "./PickerItem";

import defaultStyles from "../config/styles";
import colors from "../config/colors";

const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');

function AppPicker({
	icon,
	items,
	numberOfColumns = 1,
	onSelectItem,
	PickerItemComponent = PickerItem,
	placeholder,
	selectedItem,
	width = "100%",
}) {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={[styles.container, { width }]}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={defaultStyles.colors.medium}
							style={styles.icon}
						/>
					)}
					{selectedItem ? (
						<Text style={styles.text}>{selectedItem.label.toString()}</Text>
					) : (
						<Text style={styles.placeholder}>{placeholder}</Text>
					)}

					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={defaultStyles.colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>

			<Modal visible={modalVisible} animationType="slide" >
				{/* Wrap Button and FlatList in <Screen> in case of iPhone issues - 'Close' getting hidden behind notch */}
				{/* <Screen> */}
				<Button title="Nationalité" onPress={() => setModalVisible(false)} />
				<FlatList
					data={items}
					keyExtractor={(item) => item.value.toString()}
					numColumns={numberOfColumns}
					renderItem={({ item }) => (
						<PickerItemComponent
							item={item}
							label={item.label}
							onPress={() => {
								setModalVisible(false);
								onSelectItem(item);
							}}
						/>
					)}
				/>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.light,
		borderRadius: 10,
		flexDirection: "row",
		justifyContent:'center',
		alignItems:'center',
		padding: 10,
		height: 50,
		marginVertical: 5,
		borderWidth:1,
		borderColor: defaultStyles.colors.primary
	},
	icon: {
		marginRight: 10,
	},
	placeholder: {
		color: defaultStyles.colors.medium,
		flex: 1,
	},
	text: {
		flex: 1,
	},
	text_description:{
		alignSelf:'center',
		marginBottom:20,
		marginLeft:10,
		fontSize:20,
		position:'relative',
		bottom:400
	},
	text_name:{
		color:'#00b0f0',
		fontSize:20
		
	}
});

export default AppPicker;
