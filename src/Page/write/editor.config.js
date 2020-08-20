export var formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video', 'color'
  ]

  export var modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false]}],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'color'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] }, 'link', 'emoji'],
        ['link', 'image', 'video'],
        ['clean']
      ],
      clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
      }
}

// imageUpload: {
//     url: "<내 image upload API 주소>", // server url
//     method: "POST", // change query method, default 'POST'
//           name : 'images' // 아래 설정으로 image upload form의 key 값을 변경할 수 있다.
//     headers: {
//       Authorization: `Bearer ${<내 토큰 값>}`, 
//       'X-Total-Count': 0,
//     },
//     callbackOK: (serverResponse, next) => { // 성공하면 리턴되는 함수
//         next(serverResponse);
//     },
//     callbackKO: (serverError) => { // 실패하면 리턴되는 함수
//       console.log(serverError);
//         // alert(serverError);
//     },
//     // optional
//     // add callback when a image have been chosen
//     checkBeforeSend: (file, next) => {
//         console.log(file);
//         next(file); // go back to component and send to the server
//     }
//   },
//   clipboard: {
//     // toggle to add extra line breaks when pasting HTML:
//     matchVisual: false,
//   },
//   // imageDrop: true, // imageDrop 등록
//   // imageResize: {} // imageResize 등록