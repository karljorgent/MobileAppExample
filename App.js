import React, { useEffect } from 'react';
import {SafeAreaView} from 'react-native';
import Signup from './src/screens/auth/Signup';
//import AuthHeader from './src/components/AuthHeader';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const App = () => {
    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            webClientId: '606623206800-tlmuvn2mq4u103pb0blq28dpn1immr78.apps.googleusercontent.com',
            offlineAccess: true
        });
    }, [])
    return (
        <SafeAreaView>
        <Signup />
        </SafeAreaView>
    );
};

export default App;