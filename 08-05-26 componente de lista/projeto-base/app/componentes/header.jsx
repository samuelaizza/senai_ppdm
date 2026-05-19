import {View, Text, StyleSheet} from 'react-native';

export default function Header({titulo}) {
    return (
        <View style={estilos.container}>
            <Text style={estilos.titulos}>{titulo}</Text>
            <Text style={estilos.subtitulo}>Organize seus estudos</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    container:{
        backgroundColor: '#6200EE',
        paddingVertical: 20,
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    titulo:{
        fontSize: 25,
        fontWeight: 700,
        color: '#FFFFFF',
    },
    subtitulo:{
        fontSize: 14,
        color: '#e75e03',
        marginTop: 4,
    }
});