import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import OrderItem from '../../app/components/OrderItem.js';
import AddOrderModal from '../../app/components/AddOrderModal.js';

const OrdersScreen = ({ orders, addOrder, deleteOrder, markOrderAsComplete, isModalVisible, setModalVisible }) => {

    const [pending, setPending] = useState([]);
    useEffect(() => {
        const porder = orders.filter((order) => !order.completed);
        setPending(porder)
    }, [orders]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pending Orders</Text>
            <FlatList
                data={pending}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <OrderItem
                        order={item}
                        onMarkComplete={markOrderAsComplete}
                        onDelete={deleteOrder}
                    />
                )}
            />
            {!isModalVisible && (
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.addButtonText}>Add Order</Text>
                </TouchableOpacity>
            )}
            <AddOrderModal visible={isModalVisible} onClose={() => setModalVisible(false)} onSubmit={addOrder} />
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
    addButton: {
        backgroundColor: 'blue',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default OrdersScreen;
