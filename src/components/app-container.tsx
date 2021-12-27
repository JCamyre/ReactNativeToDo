import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import theme from '../theme'

type Props = {
    children: React.ReactNode;
}

// so the props passed in are type Props, meaning their children are React.ReactNode
export default function AppContainer(props: Props) {
    return (
        <NavigationContainer>
            <NativeBaseProvider theme={theme}>
                {props.children}
            </NativeBaseProvider>
        </NavigationContainer>
    )
}