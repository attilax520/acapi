class tasksCls2:
    def GET(self):
        return "Hello, tasksCls! 3333"
    def POST(self):
        return "Hello, tasksCls! post meth"   
    @staticmethod    
    def m():
        print("m me out...")
        return    
class  staticxCls:
    def GET(self, name):
        import sys
        f = open(sys.path[0]+'/../staticx/' + name)
        return f.read()
def query(db,sql):
    import sqlite3
    import os
    import sys

    # conn = sqlite3.connect('%s/../db_test')
    print(os.getcwd())
    print(sys.path[0])
    conn = sqlite3.connect(sys.path[0]+'/../db_test')
    #D:\0src\acbo_api\dev\src main scrpt  boot path

    print ("数据库打开成功")
    c = conn.cursor()
    print ("数据库打开成功")

    cursor = c.execute(sql)
    results = cursor.fetchall()
    # print(results)
    print('000000000000000000000000000')
    # for item in results:
    #     print(item)

    print(cursor)
    num_fields = len(cursor.description)
    field_names = [i[0] for i in cursor.description]
    
    print(field_names)
    return results,field_names

class editCls:
    def GET(self):
        import web
        import os
        #render = web.template.render('templates/')
        #render = web.template.render('/',cache = False )
        #render = web.template.render('fld/',cache = False )
        print(os.path.dirname(__file__))
        #D:\0src\acbo_api\dev\src\fld
        web_ipt = web.input()
        print(web_ipt)
        print(web_ipt.id)
        print(type(web_ipt.id))
        sql='select * from  table_article where id='+str(int(web_ipt.id))
        print(sql)
        (results,field_names)=query('',sql)
        print(results[0])

        render=  web.template.frender(os.path.dirname(__file__)+"/editor.html"  )
        tit=results[0][field_names.index('name')]
        art={};
        art['id']=results[0][field_names.index('id')]
        return render(results,field_names,tit,results[0][field_names.index('text_content')],art);

        #return "Hello, edit cls"
        print(render)
        #return render.editor()
