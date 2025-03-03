import { View, Text, StyleSheet, Pressable } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from "../index";
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';


type DashboardProps = StackScreenProps<RootStackParamList, "Dashboard">;


export default function Dashboard({ navigation} : DashboardProps){
return(
    <SafeAreaView>
        <View style={styles.header}>
            <Pressable style={styles.settingsIcon} onPress={() => console.log('Settings Pressed')}>
                <Ionicons name="settings-outline" size={28} color="white" />
            </Pressable>
            <Text style={styles.homeText}>Home</Text>
            <Text style={styles.welcomeText}>Welcome back!</Text>
        </View>

        <View style={styles.body} >
           <Text style={styles.bodyText}>You are not currently on leave.</Text>
           <Text style={styles.bodyText}>Click the Plus button to apply for leave.</Text>
        </View>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
header:{
    backgroundColor: "#70907C",
    height:313,
    width:393,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    padding: 28,
    flexDirection: 'column'
},
homeText:{
    color: 'white',
    fontSize: 24,   
}, 
settingsIcon: {
    position: 'absolute',
    height: 24,
    width: 24,
    top: 30,
    right: 25
},
welcomeText:{
    color: 'white',
    fontSize:30,
    fontWeight: 'bold',
    paddingTop: 110

},
body:{
alignItems: 'center',
},
bodyText:{
    fontSize: 30,
    fontWeight: '500',
    marginTop: 50,
    paddingTop: 50,
    textAlign: 'center'
}
})