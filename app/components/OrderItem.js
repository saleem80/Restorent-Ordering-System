import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OrderItem = ({ order, onMarkComplete, onDelete }) => {

    const { id, customer, tableId, dishes, completed } = order;

    return (
        <View style={[styles.container, completed && styles.completed]}>
            <TouchableOpacity style={styles.completeButton} onPress={() => onMarkComplete(id)}>
                {completed && <Text style={styles.completedText}>✓</Text>}
            </TouchableOpacity>
            <View style={styles.orderDetails}>
                <Text style={styles.customerText}>{customer.name}</Text>
                <Text>Table: {tableId}</Text>
                <Text>Dishes: {dishes.join(', ')}</Text>
            </View>
            {!completed && (
                <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(id)}>
                    <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    completed: {
        backgroundColor: '#d3ffd3',
    },
    completeButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#000',
        marginRight: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    completedText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    orderDetails: {
        flex: 1,
    },
    customerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 8,
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default OrderItem;
