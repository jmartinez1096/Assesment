import {createStackNavigator} from '@react-navigation/stack';
import {ProductsDetail, Home, AddProduct} from '../screens';
type AppNavigationParams = {
  Products: undefined;
  ProductsDetail: {
    id?: string;
  };
  AddProduct: {
    id?: string;
    edit: boolean;
  };
};

export const ProductsStack = createStackNavigator<AppNavigationParams>();

export const ProductsStackNavigator = () => {
  return (
    <ProductsStack.Navigator
      initialRouteName="Products"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerBackTitleVisible: false,
        title: '',
      }}>
      <ProductsStack.Screen
        name="Products"
        options={{headerShown: false}}
        component={Home}
      />

      <ProductsStack.Screen
        name="ProductsDetail"
        options={{headerShown: false}}
        component={ProductsDetail}
      />

      <ProductsStack.Screen
        name="AddProduct"
        options={{headerShown: false}}
        component={AddProduct}
      />
    </ProductsStack.Navigator>
  );
};
