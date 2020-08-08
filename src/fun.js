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

    return Math.ceil(firstMonth + secondMonth);
}