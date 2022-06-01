

        function listsort(obj){
            changeStatus(obj);
            var sortvaluestoArray = htmltoarray(obj);
            /*var urlnow = window.location.href;
            var index = urlnow.indexOf("?");
            if (index == '-1') {
                index = urlnow.length;
            }
            var urlnew = urlnow.substring(0,index);
            urlnew = urlnew+"?order="+sortvaluestoArray;
            window.location.href = urlnew;*/
            $("#orderRemember").attr("value",sortvaluestoArray);
            $("#form").submit();
        }



        function changeStatus(obj){  /*0 nosort  1 asc  2 desc*/
            var status = $("#"+obj).get(0).value;
            if(status == '0'){
                status = '1';
            }
            else if(status == '1'){
                status = '2';
            }
            else{
                status = '0';
            }
            $("#"+obj).get(0).value = status;
        }

        function createsort(id,value){
            var newsort = Object();
            newsort.id = id;
            newsort.value = value;
            return newsort;
        }

        function htmltoarray(obj) {
            var sortvalues = new Array();
            var i = -1;
           $("#tablecontent thead tr th input").each(function(){
                var id = this.id;
                var value = this.value;
                if(value != 0){
                    i++;
                    var per = createsort(id,value);
                    sortvalues[i] = per;
                }
           });


            var sortvaluesold = new Array();
            var sortvaluestoArrayold = $("#sortvalue").get(0).value;
            var toArrayold = sortvaluestoArrayold.split(",");
            for (var i = 0; i < toArrayold.length; i++) {
                var arrayStatusold = toArrayold[i].split(" ");
                var perold = createsort(arrayStatusold[0],valuetoStatus(arrayStatusold[1]));
                sortvaluesold[i] = perold;
            }


            var newest = new Array();
            j=-1;
            for (var i = 0; i < sortvaluesold.length; i++) {
                var oldid = sortvaluesold[i].id;
                for (var k = 0; k <sortvalues.length; k++) {
                    var newid = sortvalues[k].id;
                    if (oldid == newid) {
                        j++;
                        newest[j]=sortvalues[k];
                    }
                }
            }

            var flag ='0';
            for (var i = 0; i < sortvaluesold.length; i++) {
                if (obj == sortvaluesold[i].id) {
                    flag = '1';
                }
            }
            if (flag == '0') {
                var index = newest.length;
                var newvalue = $("#"+obj).get(0).value;
                newest[index]=createsort(obj,newvalue);
            }
            sortvalues=newest;

           var sortvaluestoArray = "";
           for (var i = 0; i < sortvalues.length; i++) {
               if (sortvaluestoArray == "") {
                var str = sortvalues[i].id+" "+statustoValue(sortvalues[i].value);
               } else {
                var str = ","+sortvalues[i].id+" "+statustoValue(sortvalues[i].value);
               }
               sortvaluestoArray = sortvaluestoArray+str;
           }
           return sortvaluestoArray;
        }

        function statustoValue(obj){
            if(obj == '1'){
                obj = 'asc';
            }
            else if(obj == '2'){
                obj = 'desc';
            }
            else{
                obj = 'asc';
            }
            return obj;
        }

        function valuetoStatus(obj){
            if(obj == 'asc'){
                obj = '1';
            }
            else if(obj == 'desc'){
                obj = '2';
            }
            else{
                obj = '0';
            }
            return obj;
        }

        function arraytohtml() {
            initTable();
            var sortvalues = new Array();
            var sortvaluestoArray = $("#sortvalue").get(0).value;
            var toArray = sortvaluestoArray.split(",");
            for (var i = 0; i < toArray.length; i++) {
                var arrayStatus = toArray[i].split(" ");
                var per = createsort(arrayStatus[0],valuetoStatus(arrayStatus[1]));
                sortvalues[i] = per;
            }
            for (var i = 0; i < sortvalues.length; i++) {
                var idexist = sortvalues[i].id;
                $("#tablecontent thead tr th input").each(function(){
                    var id = this.id;
                    var status = sortvalues[i].value;
                    if(idexist == id){
                        this.value = sortvalues[i].value;
                        var newid="#"+id+"1";
                        if (status == 1) {
                            /*up*/
                            $(newid).attr("class","glyphicon glyphicon-arrow-up");
                            /*$(newid).attr("class")="glyphicon glyphicon-menu-up";*/
                        } else {
                            /*down*/
                            $(newid).attr("class","glyphicon glyphicon-arrow-down");
                            /*$(newid).attr("class")="glyphicon glyphicon-menu-down";*/
                        }
                    }
               });
            }
        }

        onload = arraytohtml;
