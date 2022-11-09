import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";

import styles from "./styles";
import { ButtonComp } from "../../components";

const QrCode = () => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status == "granted");
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
        setScanned(true);
        alert(data);
    };

    if (hasPermission == null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission == false) {
        return <Text>No acess to camera</Text>;
    }

    return (
        <>
            <View style={styles.centraliza}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={styles.scanner}
                />
            </View>
            {scanned && (
                <ButtonComp
                    type="padrao"
                    title="Pressione para escanear novamente"
                    onPress={() => setScanned(false)}
                />
            )}
        </>
    );
};

export default QrCode;