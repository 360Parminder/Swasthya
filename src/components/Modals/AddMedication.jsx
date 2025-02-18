import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableOpacity,
    TextInput,
    Image,
    Alert,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalColor from '../../Styles/GlobalColor';
import userData from '../../services/userData';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddMedication = ({ isVisible, onClose, onMedicationAdded }) => {
    const [currentScreen, setCurrentScreen] = useState(0);
    const [medicationData, setMedicationData] = useState({
        medicine_name: '',
        forms: '',
        strength: '',
        unit: '',
        dose: '1',
        time: new Date(),
        start_date: new Date(),
        description: ''
    });
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const resetForm = () => {
        setCurrentScreen(0);
        setMedicationData({
            medicine_name: '',
            forms: '',
            strength: '',
            unit: '',
            dose: '1',
            time: new Date(),
            start_date: new Date(),
            description: '',
        });
    };

    const handleAddMedication = async () => {
        try {
            if (!medicationData.medicine_name || !medicationData.forms || 
                !medicationData.strength || !medicationData.unit) {
                Alert.alert('Error', 'Please fill all required fields');
                return;
            }

            const response = await userData.addMedication(medicationData);
            
            if (response.success) {
                Alert.alert('Success', 'Medication added successfully');
                onMedicationAdded && onMedicationAdded();
                resetForm();
                onClose();
            } else {
                Alert.alert('Error', response.message || 'Failed to add medication');
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to add medication');
            console.error('Error adding medication:', error);
        }
    };

    const updateMedicationData = (field, value) => {
        setMedicationData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
            updateMedicationData('start_date', selectedDate);
        }
    };

    const handleTimeChange = (event, selectedTime) => {
        setShowTimePicker(false);
        if (selectedTime) {
            updateMedicationData('time', selectedTime);
        }
    };

    const medicationForms = [
        'Tablet', 'Capsule', 'Liquid', 'Topical', 'Cream', 'Device', 
        'Drops', 'Foam', 'Gel', 'Inhaler', 'Injection', 'Lotion', 
        'Ointment', 'Patch', 'Powder', 'Spray', 'Suppository'
    ];

    const screens = [
        // Screen 1: Medication Name
        <View key="screen1" style={styles.screenContent}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onClose}>
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
            </View>
            <Image 
                style={styles.image} 
                source={require('../../assets/images/health-report.gif')} 
                resizeMode='contain'
            />
            <Text style={styles.title}>Medication Name</Text>
            <TextInput 
                placeholder='Enter medication name'
                style={styles.input}
                placeholderTextColor={GlobalColor.textColor}
                value={medicationData.medicine_name}
                onChangeText={(text) => updateMedicationData('medicine_name', text)}
            />
            <TextInput 
                placeholder='Description (optional)'
                style={styles.input}
                placeholderTextColor={GlobalColor.textColor}
                value={medicationData.description}
                onChangeText={(text) => updateMedicationData('description', text)}
                multiline
            />
            <TouchableOpacity 
                style={[styles.button, !medicationData.medicine_name && styles.buttonDisabled]}
                onPress={() => medicationData.medicine_name && setCurrentScreen(1)}
                disabled={!medicationData.medicine_name}
            >
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>,

        // Screen 2: Medication Form
        <View key="screen2" style={styles.screenContent}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => setCurrentScreen(0)}>
                    <Icon name="chevron-back-outline" size={24} color={GlobalColor.mainColor} />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{medicationData.medicine_name}</Text>
                <TouchableOpacity onPress={onClose}>
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
            </View>
            <Image 
                style={styles.image} 
                source={require('../../assets/images/drugsbottle.gif')} 
                resizeMode='contain'
            />
            <Text style={styles.title}>Medication Form</Text>
            <View style={styles.optionsGrid}>
                {medicationForms.map((form) => (
                    <TouchableOpacity
                        key={form}
                        style={[
                            styles.optionButton,
                            medicationData.forms === form.toLowerCase() && styles.optionButtonSelected
                        ]}
                        onPress={() => updateMedicationData('forms', form.toLowerCase())}
                    >
                        <Text style={[
                            styles.optionText,
                            medicationData.forms === form.toLowerCase() && styles.optionTextSelected
                        ]}>{form}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity 
                style={[styles.button, !medicationData.forms && styles.buttonDisabled]}
                onPress={() => medicationData.forms && setCurrentScreen(2)}
                disabled={!medicationData.forms}
            >
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>,

        // Screen 3: Medication Strength
        <View key="screen3" style={styles.screenContent}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => setCurrentScreen(1)}>
                    <Icon name="chevron-back-outline" size={24} color={GlobalColor.mainColor} />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{medicationData.medicine_name}</Text>
                <TouchableOpacity onPress={onClose}>
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
            </View>
            <Image 
                style={styles.image} 
                source={require('../../assets/images/vaccine.gif')} 
                resizeMode='contain'
            />
            <Text style={styles.title}>Medication Strength</Text>
            <View style={styles.strengthContainer}>
                <TextInput
                    style={styles.strengthInput}
                    placeholder="Enter strength"
                    placeholderTextColor={GlobalColor.textColor}
                    value={medicationData.strength}
                    onChangeText={(text) => updateMedicationData('strength', text)}
                    keyboardType="numeric"
                />
                <View style={styles.unitsGrid}>
                    {['mg', 'mcg', 'g', 'ml', '%'].map((unit) => (
                        <TouchableOpacity
                            key={unit}
                            style={[
                                styles.unitButton,
                                medicationData.unit === unit && styles.unitButtonSelected
                            ]}
                            onPress={() => updateMedicationData('unit', unit)}
                        >
                            <Text style={[
                                styles.unitText,
                                medicationData.unit === unit && styles.unitTextSelected
                            ]}>{unit}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <TouchableOpacity 
                style={[styles.button, (!medicationData.strength || !medicationData.unit) && styles.buttonDisabled]}
                onPress={() => (medicationData.strength && medicationData.unit) && setCurrentScreen(3)}
                disabled={!medicationData.strength || !medicationData.unit}
            >
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>,

        // Screen 4: Frequency
        <View key="screen4" style={styles.screenContent}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => setCurrentScreen(2)}>
                    <Icon name="chevron-back-outline" size={24} color={GlobalColor.mainColor} />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{medicationData.medicine_name}</Text>
                <TouchableOpacity onPress={onClose}>
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
            </View>
            <Image 
                style={styles.image} 
                source={require('../../assets/images/vaccine.gif')} 
                resizeMode='contain'
            />
            <Text style={styles.title}>When do you take this?</Text>

            <TouchableOpacity 
                style={styles.dateButton}
                onPress={() => setShowTimePicker(true)}
            >
                <Icon name="time-outline" size={24} color={GlobalColor.mainColor} />
                <Text style={styles.dateText}>
                    {medicationData.time 
                        ? medicationData.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                        : 'Select Time'}
                </Text>
            </TouchableOpacity>

            {showTimePicker && (
                <DateTimePicker
                    value={medicationData.time || new Date()}
                    mode="time"
                    display="default"
                    onChange={handleTimeChange}
                />
            )}

            <TouchableOpacity 
                style={styles.dateButton}
                onPress={() => setShowDatePicker(true)}
            >
                <Icon name="calendar-outline" size={24} color={GlobalColor.mainColor} />
                <Text style={styles.dateText}>
                    {medicationData.start_date 
                        ? medicationData.start_date.toLocaleDateString()
                        : 'Select Start Date'}
                </Text>
            </TouchableOpacity>

            {showDatePicker && (
                <DateTimePicker
                    value={medicationData.start_date || new Date()}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                    minimumDate={new Date()}
                />
            )}

            <TouchableOpacity 
                style={[styles.button, (!medicationData.start_date || !medicationData.time) && styles.buttonDisabled]}
                onPress={handleAddMedication}
                disabled={!medicationData.start_date || !medicationData.time}
            >
                <Text style={styles.buttonText}>Add Medication</Text>
            </TouchableOpacity>
        </View>
    ];

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <ScrollView contentContainerStyle={styles.scrollContent}>
                        {screens[currentScreen]}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: GlobalColor.primaryColor,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '85%',
        padding: 20,
    },
    scrollContent: {
        flexGrow: 1,
    },
    screenContent: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: GlobalColor.textColor,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backText: {
        color: GlobalColor.mainColor,
        fontSize: 16,
        marginLeft: 5,
    },
    cancelText: {
        color: GlobalColor.mainColor,
        fontSize: 16,
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: GlobalColor.textColor,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        backgroundColor: GlobalColor.secondaryColor,
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
        color: GlobalColor.textColor,
        marginBottom: 20,
    },
    optionsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    optionButton: {
        width: '48%',
        backgroundColor: GlobalColor.secondaryColor,
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    optionButtonSelected: {
        backgroundColor: GlobalColor.mainColor,
    },
    optionText: {
        color: GlobalColor.textColor,
        fontSize: 16,
    },
    optionTextSelected: {
        color: GlobalColor.buttonTextColor,
    },
    strengthContainer: {
        marginBottom: 20,
    },
    strengthInput: {
        backgroundColor: GlobalColor.secondaryColor,
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
        color: GlobalColor.textColor,
        marginBottom: 10,
    },
    unitsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    unitButton: {
        width: '18%',
        backgroundColor: GlobalColor.secondaryColor,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    unitButtonSelected: {
        backgroundColor: GlobalColor.mainColor,
    },
    unitText: {
        color: GlobalColor.textColor,
        fontSize: 14,
    },
    unitTextSelected: {
        color: GlobalColor.buttonTextColor,
    },
    frequencyContainer: {
        marginBottom: 20,
    },
    frequencyLabel: {
        fontSize: 16,
        color: GlobalColor.textColor,
        marginBottom: 10,
    },
    frequencyOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    frequencyButton: {
        width: '32%',
        backgroundColor: GlobalColor.secondaryColor,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    frequencyButtonSelected: {
        backgroundColor: GlobalColor.mainColor,
    },
    frequencyText: {
        color: GlobalColor.textColor,
        fontSize: 16,
    },
    frequencyTextSelected: {
        color: GlobalColor.buttonTextColor,
    },
    button: {
        backgroundColor: GlobalColor.mainColor,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 'auto',
    },
    buttonDisabled: {
        opacity: 0.5,
    },
    buttonText: {
        color: GlobalColor.buttonTextColor,
        fontSize: 18,
        fontWeight: 'bold',
    },
    dateButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: GlobalColor.secondaryColor,
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    dateText: {
        fontSize: 16,
        color: GlobalColor.textColor,
        marginLeft: 10,
    },
    timeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: GlobalColor.secondaryColor,
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    timeText: {
        fontSize: 16,
        color: GlobalColor.textColor,
        marginLeft: 10,
    }
});

export default AddMedication;
