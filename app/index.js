
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrdersScreen from '../app/screens/OrdersScreen.js';
import CompletedOrdersScreen from '../app/screens/CompletedOrdersScreen.js'
import { SafeAreaView } from 'react-native';

const App = () => {
    const Tab = createBottomTabNavigator();

    const [orders, setOrders] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [completedOrders, setCompletedOrders] = useState([]);

    const addOrder = (order) => {
        setOrders([...orders, order]);
        setModalVisible(false);
    };
    const deleteOrder = (orderId) => {
        setOrders(orders.filter((order) => order.id !== orderId));
    };
    const markOrderAsComplete = (orderId) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === orderId ? { ...order, completed: !order.completed } : order
            )
        );
    };

    useEffect(() => {
        const completed = orders.filter((order) => order.completed);
        const pending = orders.filter((order) => !order.completed);
        setCompletedOrders(completed);
    }, [orders]);

    return (
        <SafeAreaView style={styles.container}>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                }}
            >
                <Tab.Screen name="Restorent Ordering">
                    {() => <OrdersScreen orders={orders} addOrder={addOrder} deleteOrder={deleteOrder} markOrderAsComplete={markOrderAsComplete} isModalVisible={isModalVisible} setModalVisible={setModalVisible} />}
                </Tab.Screen>
                <Tab.Screen name="Completed Orders">
                    {() => <CompletedOrdersScreen completedOrders={completedOrders} markOrderAsComplete={markOrderAsComplete} />}
                </Tab.Screen>
            </Tab.Navigator>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;