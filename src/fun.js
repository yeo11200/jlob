// export를 해서 내보내줘야한다
// 받을땐 import
export function a(){
    let careerFirstDate = ['2019-01-01', '2019-05-31'];
    let careerSecDate = ['2019-07-17'];
    
    let careerFirstDateEnd = new Date(careerFirstDate[1]);
    let careerFirstDateStart = new Date(careerFirstDate[0]);

    let careerSecDateEnd = new Date();
    let careerSecDateStart = new Date(careerSecDate[0]);
    // mssecond를 하루로 만드는 공식
    let day = 24 * 60 * 60 * 1000;
    // mssecond를 한달로 만드는 공식
    let month = day * 30;

    let firstMonth = (careerFirstDateEnd.getTime() - careerFirstDateStart.getTime()) / month;
    let secondMonth = (careerSecDateEnd.getTime() - careerSecDateStart.getTime()) / month;


    let allCareer = Math.ceil(firstMonth + secondMonth);
    let data = null;

    if(allCareer > 13){

        var yearCareer = Math.floor((allCareer / 12));
        data = Math.floor(allCareer / 12) +'년' + (allCareer % (12 * yearCareer)) +'개월';
    }else{
        data = allCareer + '개월';
    }

    return data;
}

export function dateYmdFilter(date){

    let dateYmd = null;
    let dateA = null;

    if(date == null){

        dateYmd = 'Now';
    }else{
        dateA = date.split('T');

        dateYmd = dateA[0];
    }

    return dateYmd;
}

export function callTest(name){

    // mssecond를 하루로 만드는 공식
    let day = 24 * 60 * 60 * 1000;
    // mssecond를 한달로 만드는 공식
    let month = day * 30;

    let date = [];
    
    for(let i in name){

        let startDate = new Date(name[i].start);
        let endDate = (name[i].end == null) ? new Date() : new Date(name[i].end);
        let monthDate = (startDate.getTime() - endDate.getTime()) / month;
        console.log(monthDate);
        date.push({idx : name[i].idx, month : monthDate});
    }

    let allCareer = null;
    for(let j in date){
        allCareer -= date[j].month;
    }

    let career = Math.ceil(allCareer);
    let data = null;

    if(career > 13){

        var yearCareer = Math.floor((career / 12));
        data = Math.floor(career / 12) +'년' + (career % (12 * yearCareer)) +'개월';
    }else{
        data = career + '개월';
    }

    return data;
}

export function splitComma(items){

    var html = '<span>기술 스펙 : </span><div>';

    console.log(items);
    if(items !== undefined){
        var splitComma = items.split(',');
        
        for(var i in splitComma){
            console.log(splitComma[i]);
    
            html += '<span>'+splitComma[i]+'</span>';
        }
    }else{
        html += '<span>'+items+'</span>';
    }

    html += '</div>';

    return html;
}

export function toastUi(msg){

    var toast = document.getElementById('toast');

    if(msg !== undefined){
        toast.classList.add('on');
        toast.innerText = msg;
    }

    setTimeout(function(){
        toast.classList.remove('on');
    }, 1000);
}

export function toastUiClick(msg){

    var toast = document.getElementById('toast');

    if(msg !== undefined){
        toast.classList.add('on');
        toast.innerText = msg;
    }
}