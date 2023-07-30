import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import OrderItem from '../../app/components/OrderItem.js';

const CompletedOrdersScreen = ({ completedOrders, markOrderAsComplete }) => {
    return (
        <View style={styles.container}>
            {completedOrders.length === 0 ? (
                <Text style={styles.emptyText}>No completed orders yet.</Text>
            ) : (
                <FlatList
                    data={completedOrders}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <OrderItem
                            order={item}
                            onMarkComplete={markOrderAsComplete}
                            onDelete={() => { }}
                            showDeleteButton={false}
                        />
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    emptyText: {
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop: 50,
    },
});

export default CompletedOrdersScreen;
