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
        //日志存储类型  file或db
        //存储到文件
        log: "file"
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
    }
};