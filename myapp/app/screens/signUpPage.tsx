import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Alert } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../index"; // Import the RootStackParamList type
import { useState } from "react";

// ✅ Define screen props correctly
type SignUpProps = StackScreenProps<RootStackParamList, "SignUp">;

export default function SignUp({ navigation }: SignUpProps) {

 
  const [fisrtName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.background}>
          <Text style={styles.title}>Banana Highland Corp. E-Leave App</Text>
          <Image style={styles.image} source={require("../../assets/images/banana.png")} />
          
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Sign Up</Text>
            
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="#fff"
              keyboardType="default"
              autoCapitalize="none"
              value={fisrtName}
              onChangeText={setFirstName}
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              keyboardType="default"
              placeholderTextColor="#fff"
              value={lastName}
              onChangeText={setLastName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor="#fff"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#fff"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#fff"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
    
            {/* Sign-In Button */}
            <TouchableOpacity style={styles.signInButton}>
              <Text style={styles.signInButtonText} onPress={() => console.log("Signed In")}>Create Account</Text>
            </TouchableOpacity>
    
            {/* Navigation to Sign Up */}
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.signUpText}> Already have an account? <Text style={styles.signUpLink}>Sign In</Text>
            </Text>
            </TouchableOpacity>
          </View>
        </View>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#70907C",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 80,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 40
  },
  image: {
    height: 120,
    width: 120,
    marginBottom: 20,
  },
  formContainer: {
    alignItems: 'center',
    height:408,
    width: 282,
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 20,
  },
  formTitle:{
    fontSize: 40,
    color: '#91CB89',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10
    
  },
  input: {
    width: 242,
    height: 48,
    backgroundColor: "#70907C",
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "white",
    marginBottom: 5,
    fontSize: 15,
    fontWeight: 'bold'
    
  },
  signInButton: {
    backgroundColor: "#3FD68F",
    borderRadius: 15,
    alignItems: "center",
    width: 122,
    height: 35,
    paddingTop: 5,
    marginTop:5
  },
  signInButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    paddingTop:6
  },
  signUpText: {
    color: "black",
    textAlign: "center",
   paddingTop: 8
  },
  signUpLink:{
    color: "#3FD68F", 
    fontWeight: "500"
  }
});
