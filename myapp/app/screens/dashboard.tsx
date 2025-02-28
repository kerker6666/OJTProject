import { View, Text, StyleSheet, Pressable } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from "../index";
import { SafeAreaView } from 'react-native-safe-area-context';


type DashboardProps = StackScreenProps<RootStackParamList, "Dashboard">;


export default function Dashboard({ navigation} : DashboardProps){
return(
    <SafeAreaView>
        <View style={stlyes.header}>
            <Text style={stlyes.homeText}>Home</Text>
        </View>
    </SafeAreaView>
)
}

const stlyes = StyleSheet.create({
header:{
    backgroundColor: "#70907C",
    height:313,
    width:393,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    padding: 30,
},
homeText:{
    color: 'white',
    fontSize: 24,
}
})