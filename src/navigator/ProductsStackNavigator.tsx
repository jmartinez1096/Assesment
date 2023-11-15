import {createStackNavigator} from '@react-navigation/stack';
import {ProductsDetail, Home, AddProduct} from '../screens';
import {TProducts} from '../types';
type AppNavigationParams = {
  Products: undefined;
  ProductsDetail: {
    id: string;
    productObject?: TProducts;
  };
  AddProduct: {
    id?: string;
    edit: boolean;
    productObject?: TProducts;
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
