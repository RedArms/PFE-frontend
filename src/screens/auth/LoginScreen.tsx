import React, { useState , useContext} from 'react';
import { View , Text, TextInput, Button , StyleSheet } from 'react-native';

import { UserContext } from '../../contexts/UserContext';
import { User } from '../../models/user';

import { login as  loginApi} from '../../services/authService';


const LoginScreen: React.FC<{navigation : any}> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(UserContext);

  const handleLogin = async () => {


    const user = await loginApi(email, password);
    console.log({user});
    
    // login(user);

    
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Connectez-vous</Text>
      <TextInput
        style={styles.input}
        placeholder='Email'
        onChangeText={(value) => setEmail(value)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder='Mot de passe'
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
        value={password}
      />
      <Button title='Se connecter' onPress={handleLogin} />
        <Text>Vous n'avez pas de compte ? Cliquez ici 
            <Text style={{color: 'blue'}} onPress={() => navigation.navigate('Register')}> S'inscrire</Text>
        </Text>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;