import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const BreakFast = () => {
    const router = useRouter();

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Ваш идеальный завтрак</Text>
            <Image 
                source={require('../../../assets/images/breakfast.png')} // Загрузка локального изображения
                style={styles.image} 
            />
            <View style={styles.descriptionBox}>
                <Text style={styles.heading}>Полезно и вкусно</Text>
                <Text style={styles.description}>
                    Начните свой день с питательного завтрака! Попробуйте омлет с тостом из авокадо, свежие фрукты и чашку кофе или чая. 
                    Это идеальный способ зарядиться энергией и начать утро с хорошим настроением.
                </Text>
            </View>
            <View style={styles.tipBox}>
                <Text style={styles.tipHeading}>Советы для вкусного завтрака:</Text>
                <Text style={styles.tip}>• Включите источник белка (например, яйца, йогурт).</Text>
                <Text style={styles.tip}>• Добавьте свежие фрукты или овощи.</Text>
                <Text style={styles.tip}>• Пейте воду или чай, чтобы оставаться гидратированным.</Text>
            </View>
        </ScrollView>
    );
};

export default BreakFast;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        marginBottom: 16,
    },
    descriptionBox: {
        backgroundColor: '#FFF',
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 3,
        marginBottom: 16,
    },
    heading: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 8,
        color: '#444',
    },
    description: {
        fontSize: 16,
        color: '#666',
        lineHeight: 22,
    },
    tipBox: {
        backgroundColor: '#EAF7E6',
        padding: 16,
        borderRadius: 12,
    },
    tipHeading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
        color: '#2A7F2A',
    },
    tip: {
        fontSize: 16,
        color: '#2A7F2A',
        lineHeight: 22,
    },
});
