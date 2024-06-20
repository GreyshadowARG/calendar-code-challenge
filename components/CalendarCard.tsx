import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font'
import { MapPinIcon } from "react-native-heroicons/solid";
import {getMonthName, getDayName, getDateIcon, getDayNumber, getBgColor} from "../app/helpers/functions.jsx"

export const CalendarCard = ({ calendarData, customerData }) => {
    useEffect(() => {
        loadFonts();
    }, []);

    const loadFonts = async () => {
        await Font.loadAsync({
            'Lato-Black': require('../assets/fonts/Lato-Black.ttf'),
            'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
            'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
        });
    };

    return (
        <View style={styles.mainContainer}>
            {(calendarData || []).map((item, index) => (
                <View key={index}>
                    <Text style={styles.titleCard}>{getMonthName(item.month) + " " + item.year}</Text>
                    <View style={styles.cardMainContainer}>
                        <>
                            {item.actions.length > 0 ?
                                <>
                                    {(item.actions || []).map((action, actionIndex) => (
                                        <View key={actionIndex} style={styles.cardContainer}>
                                            <View style={styles.cardDate}>
                                                {action.status !== "Unscheduled" &&
                                                    <>
                                                        <Text style={styles.cardTxtDayName}>{getDayName(action.scheduledDate)}</Text>
                                                        <Text style={styles.cardTxtDayNum}>{getDayNumber(action.scheduledDate)}</Text>
                                                    </>
                                                }
                                                {getDateIcon(action.status)}
                                            </View>
                                            <View style={[styles.cardContent, { backgroundColor: getBgColor(action.status) }]}>
                                                <View style={styles.cardTxtBlock}>
                                                    <Text style={styles.cardTxtName}>{action.name}</Text>
                                                    {action.status !== "Unscheduled" &&
                                                        <>
                                                            <Text style={styles.cardTxtRegular}>{action.vendor && action.vendor.vendorName}</Text>
                                                            <Text style={[styles.cardTxtRegular, { fontWeight: "bold" }]}>{action.vendor && action.vendor.phoneNumber}</Text>
                                                        </>
                                                    }
                                                </View>
                                                <View style={styles.cardTxtName}>
                                                    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
                                                        <MapPinIcon width={15} height={15} color="#FFFFFF" />
                                                        <Text style={styles.cardTxtRegular}>{customerData.street}</Text>
                                                    </View>
                                                    {action.status !== "Unscheduled" ?
                                                        <>
                                                            <Text style={styles.cardTxtRegular}>{action.status}</Text>
                                                        </>
                                                        :
                                                        <Text style={styles.cardTxtRegular}>Schedule date & time TBD</Text>

                                                    }
                                                </View>
                                            </View>
                                        </View>
                                    ))}
                                </>
                                :
                                <View style={styles.cardContainer}>
                                    <View style={styles.cardDate} />
                                    <View style={[styles.cardContent, { backgroundColor: "#848FA5" }]}>
                                        <Text style={styles.cardTxtName}>No Maintenance Scheduled</Text>
                                    </View>
                                </View>
                            }
                        </>
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    titleMain: {
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "center",
        paddingVertical: 5,
    },
    mainContainer: {
        paddingHorizontal: 15,
        paddingBottom: 70,
    },
    cardMainContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: 4,
    },
    cardContainer: {
        flexDirection: "row",
        gap: 6,
    },
    titleCard: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        marginVertical: 20,
        alignSelf: "flex-start",
        paddingVertical: 5,
    },
    cardDate: {
        flexDirection: "column",
        alignItems: "center",
        width: 30,
        gap: 5,
    },
    cardTxtDayName: {
        fontFamily: 'Lato-Black',
        fontSize: 11,
        opacity: 0.6,
    },
    cardTxtDayNum: {
        fontFamily: 'Lato-Black',
        fontSize: 20,
    },
    cardContent: {
        flex: 1,
        padding: 15,
        borderRadius: 5,
        gap: 7,
    },
    cardTxtBlock: {
        flexDirection: "column",
        gap: 2
    },
    cardTxtName: {
        color: "#FFFFFF",
        fontFamily: 'Lato-Bold',
        paddingBottom: 3,
        fontSize: 16,
    },
    cardTxtRegular: {
        color: "#FFFFFF",
        fontFamily: 'Lato-Regular',
        fontSize: 12,
    },
    line: {
        width: '80%',
        height: 1,
        backgroundColor: '#DCDCDC',
    },
    button: {
        padding: 5,
        borderWidth: 1,
    },
});