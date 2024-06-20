import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CalendarCard } from '../../components/CalendarCard'


export default function Calendar() {
  const [ calendarData, setCalendarData ] = useState([])
  const [ customerData, setCustomerData ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge");
        const data = await response.json();
        setCalendarData(data.calendar || []);
        setCustomerData(data.customer || [])
      } catch (err) {
        console.log(err);
      }
    }
    
    fetchData();
  }, [])

  return (
    <SafeAreaView style={styles.safeView}>
      <View>
        <Text style={styles.titleMain}>Calendar</Text>
        <View style={styles.line} />
      </View>
      <View>
        <ScrollView>
          <CalendarCard calendarData={calendarData} customerData={customerData} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    marginVertical: 20,
  },
  titleMain: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    paddingVertical: 5,
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