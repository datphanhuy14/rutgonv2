module.exports = {
    app : {
        port : process.env.PORT || 9999, //port is a number
    },
    db : {
        host: 'localhost',
        dbname: 'rutgonbiz',
        username: 'thangnv',
        password: 'khaiminh',
        dialect : 'postgres'
    }
}