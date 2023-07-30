import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const AddOrderModal = ({ visible, onClose, onSubmit }) => {
    const [customerName, setCustomerName] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [tableId, setTableId] = useState('');
    const [dishes, setDishes] = useState('');

    const handleSubmit = () => {
        const order = {
            id: Date.now(),
            customer: { name: customerName, phone: customerPhone },
            tableId: parseInt(tableId),
            dishes: dishes.split(',').map((dish) => dish.trim()),
            completed: false,
        };
        onSubmit(order);
        setCustomerName('');
        setCustomerPhone('');
        setTableId('');
        setDishes('');
    };

    return (
        <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
            <View style={styles.container}>
                <Text style={styles.title}>Add Order</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Customer Name"
                    value={customerName}
                    onChangeText={setCustomerName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Customer Phone"
                    value={customerPhone}
                    onChangeText={setCustomerPhone}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Table ID"
                    keyboardType="numeric"
                    value={tableId}
                    onChangeText={setTableId}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Dishes (comma-separated)"
                    value={dishes}
                    onChangeText={setDishes}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
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
    cancelButton: {
        backgroundColor: 'gray',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
    },
    cancelButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default AddOrderModal;
