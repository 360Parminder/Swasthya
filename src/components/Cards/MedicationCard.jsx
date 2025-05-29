import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Modal,
} from 'react-native';

import GlobalColor from '../../Styles/GlobalColor';
import { Icon } from 'react-native-elements';

const MedicationCard = ({ medication }) => {
    const [showDetails, setShowDetails] = useState(false);

    // Format time to readable format
    const formatTime = (timeString) => {
        const time = new Date(timeString);
        return time.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        }).toUpperCase();
    };

    // Format date to readable format
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };
    // Map medication forms to corresponding Font Awesome 5 icons
    const getIconForForm = (form) => {
        const iconMap = {
            'tablet': 'tablets',
            'capsule': 'capsules',
            'liquid': 'prescription-bottle',
            'topical': 'pump-medical',
            'cream': 'pump-medical',
            'device': 'stethoscope',
            'drops': 'eye-dropper',
            'foam': 'pump-soap',
            'gel': 'prescription-bottle',
            'inhaler': 'lungs',
            'injection': 'syringe',
            'lotion': 'pump-medical',
            'ointment': 'prescription-bottle-alt',
            'patch': 'band-aid',
            'powder': 'prescription-bottle',
            'spray': 'spray-can',
            'suppository': 'capsules'
        };
        return iconMap[form.toLowerCase()] || 'pills';
    };

    const medicationIcon = getIconForForm(medication.forms);

    return (
        <>
            <TouchableOpacity 
                style={styles.medicationCard}
                onPress={() => setShowDetails(true)}
            >
                <View style={styles.medicationImageContainer}>
                    <Icon name={medicationIcon} size={28} type='font-awesome-5' color={GlobalColor.mainColor} />
                </View>
                <View style={styles.medicationInfo}>
                    <Text style={styles.medicationName}>{medication.medicine_name}</Text>
                    <View style={styles.timingsList}>
                        {medication.times.map((time, index) => (
                            <Text key={time._id || index} style={styles.timeText}>
                                {formatTime(time.time)}
                            </Text>
                        ))}
                    </View>
                </View>
                <Icon name="chevron-forward" size={20} type="ionicon" color={GlobalColor.mainColor} />
            </TouchableOpacity>

            <Modal
                visible={showDetails}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setShowDetails(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <TouchableOpacity 
                                style={styles.closeButton}
                                onPress={() => setShowDetails(false)}
                            >
                                <Icon name="chevron-down" size={24} type="ionicon" color={GlobalColor.textColor} />
                            </TouchableOpacity>
                            <View style={styles.headerContent}>
                                <View style={styles.medicationImageContainerLarge}>
                                   <Icon name={medicationIcon} size={40} type='font-awesome-5' color={GlobalColor.mainColor} />
                                </View>
                                <Text style={styles.modalTitle}>{medication.medicine_name}</Text>
                                <Text style={styles.modalSubtitle}>
                                    {medication.forms.charAt(0).toUpperCase() + medication.forms.slice(1)}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.modalBody}>
                            <View style={styles.infoSection}>
                                <View style={styles.infoCard}>
                                    <Icon name="fitness-outline" size={20} type="ionicon" color={GlobalColor.mainColor} />
                                    <Text style={styles.infoLabel}>Strength</Text>
                                    <Text style={styles.infoValue}>{medication.strength} {medication.unit}</Text>
                                </View>
                                <View style={styles.infoCard}>
                                    <Icon name="repeat-outline" size={20} type="ionicon" color={GlobalColor.mainColor} />
                                    <Text style={styles.infoLabel}>Frequency</Text>
                                    <Text style={styles.infoValue}>{medication.frequency.type}</Text>
                                </View>
                            </View>

                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>
                                    <Icon name="time-outline" size={18} type="ionicon" color={GlobalColor.mainColor} /> Timings
                                </Text>
                                <View style={styles.timingsGrid}>
                                    {medication.times.map((time, index) => (
                                        <View key={time._id || index} style={styles.timeCard}>
                                            <Text style={styles.timeValue}>{formatTime(time.time)}</Text>
                                            <Text style={styles.doseValue}>{time.dose} dose</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>

                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>
                                    <Icon name="calendar-outline" size={18} type="ionicon" color={GlobalColor.mainColor} /> Schedule
                                </Text>
                                <View style={styles.scheduleCard}>
                                    <Text style={styles.scheduleLabel}>Start Date</Text>
                                    <Text style={styles.scheduleValue}>{formatDate(medication.start_date)}</Text>
                                </View>
                            </View>

                            {medication.description && (
                                <View style={styles.sectionContainer}>
                                    <Text style={styles.sectionTitle}>
                                        <Icon name="information-circle-outline" type="ionicon" size={18} color={GlobalColor.mainColor} /> Notes
                                    </Text>
                                    <View style={styles.descriptionCard}>
                                        <Text style={styles.descriptionText}>{medication.description}</Text>
                                    </View>
                                </View>
                            )}
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    medicationCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: GlobalColor.secondaryColor,
        borderRadius: 12,
        padding: 12,
        marginBottom: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    medicationImageContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: GlobalColor.mainColor + '20',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    medicationImage: {
        width: 24,
        height: 24,
    },
    medicationInfo: {
        flex: 1,
    },
    medicationName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalColor.textColor,
        marginBottom: 4,
    },
    timingsList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    timeText: {
        fontSize: 12,
        color: GlobalColor.mainColor,
        backgroundColor: GlobalColor.mainColor + '10',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: GlobalColor.primaryColor,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: '85%',
        padding: 20,
    },
    modalHeader: {
        alignItems: 'center',
        marginBottom: 24,
    },
    closeButton: {
        alignSelf: 'flex-end',
        padding: 8,
    },
    headerContent: {
        alignItems: 'center',
        width: '100%',
    },
    medicationImageContainerLarge: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: GlobalColor.mainColor + '20',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    medicationImageLarge: {
        width: 40,
        height: 40,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: GlobalColor.textColor,
        textAlign: 'center',
    },
    modalSubtitle: {
        fontSize: 16,
        color: GlobalColor.mainColor,
        marginTop: 4,
    },
    modalBody: {
        flex: 1,
    },
    infoSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
        gap: 12,
    },
    infoCard: {
        flex: 1,
        backgroundColor: GlobalColor.secondaryColor,
        borderRadius: 15,
        padding: 16,
        alignItems: 'center',
    },
    infoLabel: {
        fontSize: 12,
        color: GlobalColor.textColor + '80',
        marginTop: 8,
        marginBottom: 4,
    },
    infoValue: {
        fontSize: 16,
        color: GlobalColor.textColor,
        fontWeight: '600',
    },
    sectionContainer: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: GlobalColor.textColor,
        marginBottom: 12,
    },
    timingsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    timeCard: {
        backgroundColor: GlobalColor.secondaryColor,
        borderRadius: 12,
        padding: 12,
        alignItems: 'center',
        minWidth: 100,
    },
    timeValue: {
        fontSize: 16,
        fontWeight: '600',
        color: GlobalColor.textColor,
    },
    doseValue: {
        fontSize: 12,
        color: GlobalColor.textColor + '80',
        marginTop: 4,
    },
    scheduleCard: {
        backgroundColor: GlobalColor.secondaryColor,
        borderRadius: 15,
        padding: 16,
    },
    scheduleLabel: {
        fontSize: 12,
        color: GlobalColor.textColor + '80',
        marginBottom: 4,
    },
    scheduleValue: {
        fontSize: 16,
        color: GlobalColor.textColor,
        fontWeight: '500',
    },
    descriptionCard: {
        backgroundColor: GlobalColor.secondaryColor,
        borderRadius: 15,
        padding: 16,
    },
    descriptionText: {
        fontSize: 14,
        color: GlobalColor.textColor,
        lineHeight: 20,
    },
});

export default MedicationCard;
