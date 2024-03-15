import { View } from "react-native";
import { TextHeaderProps } from "../../screens/home/types";
import { MainText, SmallText } from "../../screens/home/styles";

export const TextHeaderNumber: React.FC<TextHeaderProps> = ({ fSize, children }) => {
    const [main, decimal] = children.split(',');

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <MainText fSize={fSize}>{main},</MainText>
            <SmallText>{decimal}</SmallText>
        </View>
    );
};