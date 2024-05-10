import React, { useContext, useEffect, useState } from 'react';
import { MainRoutes } from './routes';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { DataContext } from './context';
import { Box } from './components/styled';

function App() {
    const { fetchData } = useContext(DataContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAppData = async () => {
            setLoading(true);

            // Fetch independent apis
            const independentApis = await Promise.all([
                fetchData()
            ]);
            
            // Fetch dependent apis
            // await Promise.all([
            // ]);

            setLoading(false);
        };

        fetchAppData();
    }, []);

    const appRender = (
        <Box>
            <Header />
            <MainRoutes />
            <Footer />
        </Box>
    )

    const loadingRender = (
        <Box>
            Loading...
        </Box>
    );

    const renderApp = loading ? loadingRender : appRender;

    return (
        <Box>
            {renderApp}
        </Box>
    );
};

export default App;