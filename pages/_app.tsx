
import '../styles/global.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "@inrupt/solid-ui-react";
import Header from "../src/components/Header";
import AuthenticationProvider from "../src/context/authenticationContext";
import {StoreProvider} from "../src/context/storeContext";
// import store from '../src/store/index'

let store: any
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <StoreProvider solidLogicSingleton={undefined} >
        <SessionProvider sessionId="solidbutterfly" restorePreviousSession >
            <AuthenticationProvider>
                <Header />
                <Component {...pageProps} />
            </AuthenticationProvider>
        </SessionProvider>
    </StoreProvider>

  );
}

export default MyApp
