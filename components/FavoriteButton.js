import { TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export default function FavoriteButton({icon, color, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Ionicons name={icon} size={24} color={color} />
        </TouchableOpacity>
    )
}