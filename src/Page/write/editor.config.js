export var formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]

  export var modules = {
    toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, 
         {'indent': '-1'}, {'indent': '+1'}],
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