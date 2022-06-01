#!/usr/bin/python3
# -*- coding: utf-8 -*-
# D:\Programs\Python\Python39\python.exe  D:\0src\acbo_api\dev\src\main.py

import os, sys
#print(sys.version_info)


from config import *

import main_test
import backoffice

def run_callback(socket):
    variables.entry_path = os.path.dirname(sys._getframe().f_code.co_filename)
    variables.entry_path_realpath = os.path.realpath(variables.entry_path)
    #print("variables:", variables.entry_path)
    render._keywords['globals']=global_vars

    return


def web_init(socket):
    
    main_test._test()
    return 1


class tasksCls:
    def GET(self):
        return "Hello, tasksCls!"
    def POST(self):
        return "Hello, tasksCls!"    

if __name__ == "__main__":
    try:
        import web.functions.previleges
        import web.functions.account
    except:
        pass
    
    urls=load_all_urls()
    print("load url...")
    try:
        urls = urls + web.functions.previleges.http_urls.urls+web.functions.account.http_urls.urls
    except:
        pass
    
    #you yva
    # '/backoffice/editmk/edit', 'backoffice.editmk.edit.html'
    url2 = urls + ('/edit', 'tasksCls')
    print(url2)
    print("start server...")
    start(url2, template_globals=global_vars, cache=False, run_callback=run_callback, #ssl=True
          )


