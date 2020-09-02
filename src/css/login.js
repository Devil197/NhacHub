import { StyleSheet } from 'react-native'
export const login = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',

    },
    header:
    {
        flex: 1,
    },
    footer: {
        flex: 2,
        padding: 20
    },
    imageBackGround: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    text1: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    text2: {
        color: 'yellow',
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        marginTop: 50,
    },
    action: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
    },
    textInput: {
        flex: 1,
        marginTop: 5,
        paddingBottom: 5,
        color: 'gray'
    },
    button_container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    animation: {
        backgroundColor: '#93278f',
        paddingVertical: 10,
        marginTop: 30,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        width : 200,
    },
    textLogin: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    signUp: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    gg:{
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        height: '30%'
    },
    view_icon:
    {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fb:
    {
        color: '#3B5998',
        marginRight: 15,
    },
    gg:
    {
        color: '#EA4335',
        marginLeft: 15,
    },
});
