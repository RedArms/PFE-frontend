import React , {useContext}from 'react';
import { View, Text, Button } from 'react-native';
import { UserContext } from '../../contexts/UserContext';

const AdminScreen: React.FC = () => {

    const { logout } = useContext(UserContext);
    return (
        <View>
            <Text>Welcome to Admin Page</Text>
            <Button title="Logout" onPress={logout} />
            
        </View>
    );
};

export default AdminScreen;
