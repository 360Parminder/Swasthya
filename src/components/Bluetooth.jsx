import React, { useEffect, useState } from 'react';
import { Button, PermissionsAndroid, Text, View, StyleSheet } from 'react-native';
import BluetoothClassic from 'react-native-bluetooth-classic';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [connectedDevice, setConnectedDevice] = useState(null);
  const [sensorData, setSensorData] = useState('');
  const [connection, setConnection] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    (async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        {
          title: "Bluetooth Permission",
          message: "This app needs access to your Bluetooth connection.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const enabled = await BluetoothClassic.isBluetoothEnabled();
        setIsEnabled(enabled);
      } else {
        setErrorMessage("Bluetooth permission denied");
      }
    })();

    return () => {
      // Clean up the connection when the component unmounts
      if (connection) {
        connection.disconnect();
        setConnection(null);
      }
    };
  }, [connection]);

  const connectToDevice = async () => {
    try {
      if (!isEnabled) {
        setErrorMessage("Bluetooth is not enabled");
        return;
      }

      const devices = await BluetoothClassic.getBondedDevices();
      const hc05 = devices.find((device) => device.name === 'HC-05');

      if (hc05) {
        const conn = await BluetoothClassic.connectToDevice(hc05.id);
        // console.log("conn",conn);
        setConnectedDevice(hc05);
        setConnection(conn);
        readData(conn);
      } else {
        setErrorMessage("HC-05 not found");
      }
    } catch (error) {
        console.log(error);
        
      setErrorMessage("Error connecting to device: " + error.message);
    }
  };

  const readData = async (conn) => {
    try {
     
         while (true) {
            const data= await conn.read()
         console.log("data from hc-05",data);
         
         conn.onDataReceived((data) => {
             console.log("data from hc 05",data);
             //   setSensorData(data);
            });
        }
        
        // setSensorData(data);
      
    } catch (error) {
      setErrorMessage("Error reading data: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      {isEnabled ? (
        connectedDevice ? (
          <Text>Connected to {connectedDevice.name}</Text>
        ) : (
          <Button title="Connect to HC-05" onPress={connectToDevice} />
        )
      ) : (
        <Text>Please enable Bluetooth</Text>
      )}
      <Text>Sensor Data: {sensorData}</Text>
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
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default App;
