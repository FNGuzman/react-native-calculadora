import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/style/global-styles';
import * as Haptics from 'expo-haptics';
import { Pressable, Text } from 'react-native';


interface Props {
    label: string,
    color?: string,
    blackText?: boolean,
    onPress: () => void,
    dobleSize?: boolean,
}
const CalculatorButton = ({ label, color = Colors.darkGray, blackText = false, onPress, dobleSize = false }: Props) => {
    return (
        <Pressable
            style={({ pressed }) => ({
                ...globalStyles.button,
                backgroundColor: color,
                opacity: pressed ? 0.8 : 1,
                width: dobleSize ? 180 : 80
            })}
            onPress={() => {
                Haptics.selectionAsync();
                onPress();
            }}
        >
            <Text
                style={
                    {
                        ...globalStyles.buttonText,
                        color: blackText ? 'black' : 'white'
                    }
                }
            >{label}</Text>
        </Pressable>
    )
}

export default CalculatorButton