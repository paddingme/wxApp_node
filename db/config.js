/**
 * Created  on 10/3/2016.
 */
module.exports = {
    dev: {
        mongo: {
            wxApp_xuXuanHui:{
                host: "127.0.0.1",
                port: "27017",
                db: "wxApp_xuXuanHui",
                opts: {
                    user: "",
                    pass: "",
                    poolSize: 6
                }
            },
            wxApp_xuXuanHui_log:{
                host: "127.0.0.1",
                port: "27017",
                db: "wxApp_xuXuanHui",
                opts: {
                    user: "",
                    pass: ""
                }
            }



        },
        redis: {
            host: '127.0.0.1',
            port: '6379',
            password:""
        },
        //打印日志输出
        log: "stdout"
    },
    proc: {
        mongo: {
            wxApp_xuXuanHui:{
                host: "127.0.0.1",
                port: "27017",
                db: "wxApp_xuXuanHui",
                opts: {
                    user: "",
                    pass: "",
                    poolSize: 6
                }
            },
            wxApp_xuXuanHui_log:{
                host: "127.0.0.1",
                port: "27017",
                db: "wxApp_xuXuanHui_log",
                opts: {
                    user: "",
                    pass: ""
                }
            }
        },
        redis: {
            host: "",
            port: "",
            password:""
        },
        //日志存储到数据库中
        log: "db"
        //日志存储到文件中
        //log:'file'
    },
    heroku:{
        mongo:'mongodb://heroku_2q6b3310:t0gpmgbj6a7mded1shr4up37bp@ds053176.mlab.com:53176/heroku_2q6b3310',
        redis:'redis://h:p22e1bn11hsh9ab9ar412hnc37s@ec2-23-23-233-73.compute-1.amazonaws.com:31109'
    }
};