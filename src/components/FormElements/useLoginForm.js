export const useLoginForm = () => ({
    userName : {
        label: "User name",
        name: "username",
        rules: [{ required: true, message: 'Please input your username!' }]
    },
    password: {
        label: "Password",
        name: "password",
        rules: [{ required: true, message: 'Please input your password!' }]
    }
})