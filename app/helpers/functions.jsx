import { Text, StyleSheet } from 'react-native';

import { CheckCircleIcon, ClockIcon } from "react-native-heroicons/solid";

export const getMonthName = (monthNum) => {
    switch (monthNum) {
        case 0:
            return "January"
        case 1:
            return "February"
        case 2:
            return "March"
        case 3:
            return "April"
        case 4:
            return "May"
        case 5:
            return "June"
        case 6:
            return "July"
        case 7:
            return "August"
        case 8:
            return "September"
        case 9:
            return "October"
        case 10:
            return "November"
        case 11:
            return "December"
    }
}

export const getDayName = (dateString) => {
    const date = new Date(dateString);
    const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return dayNames[date.getDay()];
};

export const getDayNumber = (dateString) => {
    const date = new Date(dateString);
    return date.getDay();
};

export const getDateIcon = (status) => {
    switch (status) {
        case "Scheduled":
            return <ClockIcon width={24} height={24} color="green" />
        case "Completed":
            return <CheckCircleIcon width={24} height={24} color="green" />
        case "Unscheduled":
            return <Text style={styles.cardTxtDayName}>TBD</Text>
    }
}

export const getBgColor = (status) => {
    switch (status) {
        case "Scheduled":
            return "#006A4B"
        case "Completed":
            return "#00B47D"
        case "Unscheduled":
            return "#011638"
    }
}

const styles = StyleSheet.create({
    cardTxtDayName: {
        fontFamily: 'Lato-Black',
        fontSize: 11,
        opacity: 0.6,
    },
});