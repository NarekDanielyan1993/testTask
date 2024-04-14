'use client';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {
    Hydrate,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Fallback } from 'components/error/error-boundary-fallback';
import Helmet from 'components/helmet';
import { QUERY_DEFAULT_PARAMS } from 'constant';
import { SnackbarProvider } from 'notistack';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { StyledMaterialDesignContent } from 'styles/notification';
import { createEmotionCache, logError } from 'utils';
import '../styles/globals.css';
import theme from '../styles/theme';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;

    const [queryClient] = useState(() => new QueryClient(QUERY_DEFAULT_PARAMS));

    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <SnackbarProvider
                    Components={{
                        success: StyledMaterialDesignContent,
                    }}
                >
                    <Helmet />
                    <ErrorBoundary
                        FallbackComponent={Fallback}
                        onError={logError}
                    >
                        <QueryClientProvider
                            client={queryClient}
                            initialIsOpen={false}
                        >
                            <Hydrate state={pageProps.dehydratedState}>
                                <Component {...pageProps} />
                            </Hydrate>
                            <ReactQueryDevtools initialIsOpen={false} />
                        </QueryClientProvider>
                    </ErrorBoundary>
                </SnackbarProvider>
            </ThemeProvider>
        </CacheProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default MyApp;
