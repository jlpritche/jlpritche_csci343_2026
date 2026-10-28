import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export default function BookmarkButton(props) {
    if (props.pressed) {
        return (
            <Pressable onPress={props.onPress}>
                <Ionicons name="bookmark" size={30} color='red' />
            </Pressable>
        );
    } else {
        return (
            <Pressable onPress={props.onPress}>
                <Ionicons name="bookmark-outline" size={30} color='white' />
            </Pressable>
        );
    }
}