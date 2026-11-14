
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';

// FOOTER COMPONENT
const Footer = () => {
  const tabs = [
    { icon: '⌂', label: 'Home' },
    { icon: '☀', label: 'Forecast' },
    { icon: '⌕', label: 'Search' },
    { icon: '⚙', label: 'Settings' },
  ];

  return (
    <View style={styles.footerNav}>
      {tabs.map((item, index) => (
        <View key={item.label} style={styles.navItem}>
          <View
            style={
              index === 0 ? styles.activeIcon : styles.navIcon
            }
          >
            <Text style={styles.navIconText}>{item.icon}</Text>
          </View>

          <Text
            style={
              index === 0 ? styles.activeLabel : styles.navLabel
            }
          >
            {item.label}
          </Text>
        </View>
      ))}
    </View>
  );
};

// MAIN APP
export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar
        backgroundColor="#101B38"
        barStyle="light-content"
      />

      <View style={styles.mainContainer}>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          {/* HEADER */}
          <View style={styles.header}>
            <View>
              <Text style={styles.locationLabel}>
                YOUR LOCATION
              </Text>
              <Text style={styles.location}>
                📍 Kolkata, India
              </Text>
            </View>

            <View style={styles.menu}>
              <Text style={styles.menuText}>•••</Text>
            </View>
          </View>

          {/* WEATHER HERO */}
          <View style={styles.hero}>
            <View style={styles.heroGlow} />

            <Text style={styles.greeting}>
              Good Morning!
            </Text>

            <Text style={styles.date}>
              Friday, November 14
            </Text>

            <Text style={styles.weatherIcon}>☀️</Text>

            <Text style={styles.temperature}>29°</Text>

            <Text style={styles.condition}>Sunny Day</Text>

            <Text style={styles.description}>
              Perfect weather to enjoy your day!
            </Text>

            <View style={styles.highLow}>
              <Text style={styles.highLowText}>
                ↑ 32° High
              </Text>

              <View style={styles.separator} />

              <Text style={styles.highLowText}>
                ↓ 24° Low
              </Text>
            </View>
          </View>

          {/* HOURLY FORECAST */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                Hourly Forecast
              </Text>
              <Text style={styles.seeAll}>Today</Text>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {[
                ['Now', '☀️', '29°'],
                ['11 AM', '🌤️', '30°'],
                ['12 PM', '☀️', '32°'],
                ['1 PM', '🌤️', '31°'],
                ['2 PM', '⛅', '30°'],
              ].map((item, index) => (
                <View
                  key={item[0]}
                  style={[
                    styles.hourCard,
                    index === 0 && styles.activeHour,
                  ]}
                >
                  <Text style={styles.hourTime}>
                    {item[0]}
                  </Text>

                  <Text style={styles.hourIcon}>
                    {item[1]}
                  </Text>

                  <Text style={styles.hourTemp}>
                    {item[2]}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* WEATHER DETAILS */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Today's Highlights
            </Text>

            <View style={styles.detailsGrid}>
              {[
                ['💧', 'Humidity', '65%', 'Normal'],
                ['💨', 'Wind Speed', '12 km/h', 'Light breeze'],
                ['🌡️', 'Feels Like', '32°', 'A little warm'],
                ['☀️', 'UV Index', '6', 'High'],
              ].map((item) => (
                <View key={item[1]} style={styles.detailCard}>
                  <View style={styles.detailTop}>
                    <Text style={styles.detailIcon}>
                      {item[0]}
                    </Text>
                    <Text style={styles.detailTitle}>
                      {item[1]}
                    </Text>
                  </View>

                  <Text style={styles.detailValue}>
                    {item[2]}
                  </Text>

                  <Text style={styles.detailSub}>
                    {item[3]}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* 5 DAY FORECAST */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              5-Day Forecast
            </Text>

            <View style={styles.forecastCard}>
              {[
                ['Today', '☀️', '24°', '32°'],
                ['Saturday', '🌤️', '23°', '31°'],
                ['Sunday', '🌧️', '22°', '29°'],
                ['Monday', '⛅', '24°', '30°'],
                ['Tuesday', '☀️', '25°', '33°'],
              ].map((item, index) => (
                <View key={item[0]}>
                  <View style={styles.forecastRow}>
                    <Text style={styles.forecastDay}>
                      {item[0]}
                    </Text>

                    <Text style={styles.forecastIcon}>
                      {item[1]}
                    </Text>

                    <Text style={styles.forecastTemp}>
                      {item[2]}
                    </Text>

                    <View style={styles.tempLine}>
                      <View style={styles.tempLineInner} />
                    </View>

                    <Text style={styles.forecastHigh}>
                      {item[3]}
                    </Text>
                  </View>

                  {index !== 4 && (
                    <View style={styles.divider} />
                  )}
                </View>
              ))}
            </View>
          </View>

          {/* FOOTER SPACE */}
          <View style={{ height: 20 }} />
        </ScrollView>

        {/* BOTTOM FOOTER */}
        <Footer />
      </View>
    </SafeAreaView>
  );
}

// STYLES
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#101B38',
  },

  mainContainer: {
    flex: 1,
    backgroundColor: '#101B38',
  },

  container: {
    flex: 1,
  },

  header: {
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  locationLabel: {
    color: '#91A5CB',
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: '700',
  },

  location: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 6,
  },

  menu: {
    height: 42,
    width: 42,
    borderRadius: 15,
    backgroundColor: '#253659',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuText: {
    color: '#FFFFFF',
    fontSize: 22,
  },

  hero: {
    marginHorizontal: 18,
    marginTop: 15,
    borderRadius: 30,
    paddingVertical: 25,
    alignItems: 'center',
    backgroundColor: '#2864D9',
    overflow: 'hidden',
  },

  heroGlow: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#5A91FF',
    opacity: 0.35,
    top: -100,
    right: -60,
  },

  greeting: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
  },

  date: {
    color: '#D7E5FF',
    fontSize: 13,
    marginTop: 7,
  },

  weatherIcon: {
    fontSize: 85,
    marginTop: 12,
  },

  temperature: {
    fontSize: 76,
    color: '#FFFFFF',
    fontWeight: '800',
    lineHeight: 88,
  },

  condition: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '700',
  },

  description: {
    color: '#DCE9FF',
    fontSize: 12,
    marginTop: 7,
  },

  highLow: {
    marginTop: 23,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF22',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
  },

  highLowText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },

  separator: {
    height: 18,
    width: 1,
    backgroundColor: '#FFFFFF66',
    marginHorizontal: 20,
  },

  section: {
    marginTop: 27,
    paddingHorizontal: 20,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 15,
  },

  seeAll: {
    color: '#76ABFF',
    fontSize: 13,
    fontWeight: '600',
  },

  hourCard: {
    width: 72,
    paddingVertical: 15,
    marginRight: 11,
    alignItems: 'center',
    borderRadius: 19,
    backgroundColor: '#1B2A4B',
    borderWidth: 1,
    borderColor: '#34466A',
  },

  activeHour: {
    backgroundColor: '#2864D9',
    borderColor: '#659BFF',
  },

  hourTime: {
    color: '#C4D1EA',
    fontSize: 11,
    fontWeight: '600',
  },

  hourIcon: {
    fontSize: 27,
    marginVertical: 13,
  },

  hourTemp: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  detailCard: {
    width: '48%',
    backgroundColor: '#1B2A4B',
    borderRadius: 19,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#34466A',
  },

  detailTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  detailIcon: {
    fontSize: 20,
    marginRight: 8,
  },

  detailTitle: {
    color: '#A8B8D7',
    fontSize: 12,
    fontWeight: '600',
  },

  detailValue: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: '800',
    marginTop: 15,
  },

  detailSub: {
    color: '#75A6FF',
    fontSize: 11,
    marginTop: 5,
  },

  forecastCard: {
    backgroundColor: '#1B2A4B',
    borderRadius: 22,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#34466A',
  },

  forecastRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },

  forecastDay: {
    color: '#FFFFFF',
    width: 77,
    fontSize: 12,
    fontWeight: '600',
  },

  forecastIcon: {
    fontSize: 22,
  },

  forecastTemp: {
    color: '#91A5CB',
    fontSize: 13,
  },

  forecastHigh: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },

  tempLine: {
    width: 55,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#344B74',
    overflow: 'hidden',
  },

  tempLineInner: {
    width: '65%',
    height: 5,
    borderRadius: 5,
    backgroundColor: '#70A5FF',
  },

  divider: {
    height: 1,
    backgroundColor: '#34466A',
  },

  // FOOTER STYLES
  footerNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1B2A4B',
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 10,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#34466A',
  },

  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  navIcon: {
    width: 42,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeIcon: {
    width: 48,
    height: 36,
    borderRadius: 14,
    backgroundColor: '#2864D9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navIconText: {
    fontSize: 23,
    color: '#FFFFFF',
  },

  navLabel: {
    color: '#91A5CB',
    fontSize: 10,
    marginTop: 5,
  },

  activeLabel: {
    color: '#70A5FF',
    fontSize: 10,
    fontWeight: '800',
    marginTop: 5,
  },
});
