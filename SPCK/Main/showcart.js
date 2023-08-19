
// ///cài đặt mặc định
// let card = document.querySelector(".products");
// var sl = 0;
// fetch(`https://644fd59eba9f39c6ab6da861.mockapi.io/cardItem`)
//   .then(async res => {
//     const data = await res.json();
//     console.log(
//       'searchInput:', data
//     )
//     showData(data);
//   })


// function showData(data) {
//   card.innerHTML = '';
//   let dataUser = '';
//   data.forEach((info) => {
//     const {
//       title,
//       price,
//       avatar,
//       link
//     } = info;
//     dataUser += ` <div class="card">
//         <div class="image-container">
//         <img src=${avatar} alt="" class="image" >
//         <div class="middle">
//           <div class="product-button">
            
//             <a href=${link}><button>
//                 <p>Xem chi tiết</p>
//               </button></a>
//           </div>
//         </div>
//       </div>

//       <div class="product-name">
//         <h5 class="product-name">${title}</h5>
//         <h5>Price: <span class="prince_card">${price}</span></h5>
//         <input type="number" name="soluong" min="1" max="10" value="1">
//         <button class="btnCart" onclick="themvaogiohang(this)">
//               Thêm vào giỏ hàng
//         </button>
//       </div>
//       </div> 
//       `;
//   });
//   card.innerHTML = dataUser;
// }

document.getElementById("showcart").style.display = "none";
var giohang = new Array();

function themvaogiohang(x) {
  var boxsp = x.parentElement.children;
  console.log("Ngaan " + x);
  var hinh = boxsp[0].children[0].scr;
  var tensp = boxsp[1].innerText;
  var gia = boxsp[2].children[0].innerText;
  var soluong = boxsp[3].value;
  var sp = new Array( hinh, tensp, gia, soluong);

  giohang.push(sp);

  console.log(giohang);
  showcountsp();

// luu gio hang len  sessionStorage
sessionStorage.setItem("giohang", JSON.stringify(giohang));

}

function showcountsp() {
  document.getElementById("countsp").innerHTML = giohang.length;
}

function showmycart() {
  var ttgh = "";
  var tong = 0;
  for (let i = 0; i < giohang.length; i++) {
    let tt = parseInt(giohang[i][2]) * parseInt(giohang[i][3]) ;
    tong += tt;
    ttgh += '<tr>' +
      '<td>' + (i + 1) + '</td>' +
      '<td><img src="' + giohang[i][0] + '" alt=""></td>' +
      '<td>' + giohang[i][1] + '</td>' +
      '<td>' + giohang[i][2] + '</td>' +
      '<td>' + giohang[i][3] + '</td>' +
      '<td>' +
      ' <div>' + tt + '</div>' +
      '</td>' +
      '</tr>';

  }
  ttgh += '<tr>' +
    '<th colspan="5">Tổng đơn hàng </th>' +
    '<th>' +
    '<div>' + tong +
    '</th>' +
    '</tr>' +
    '</tr >';

document.getElementById("mycart").innerHTML = ttgh;
}







function showcart() {

  var x = document.getElementById("showcart");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
 showmycart();

}




function showgiohang_trangthanhtoan(){
  var gh = sessionStorage.getItem("giohang");
  var giohang = JSON.parse(gh);
  var ttgh = "";
  var tong = 0;
  for (let i = 0; i < giohang.length; i++) {
    let tt = parseInt(giohang[i][2]) * parseInt(giohang[i][3]) ;
    tong += tt;
    ttgh += '<tr>' +
      '<td>' + (i + 1) + '</td>' +
      '<td><img src="' + giohang[i][0] + '" alt=""></td>' +
      '<td>' + giohang[i][1] + '</td>' +
      '<td>' + giohang[i][2] + '</td>' +
      '<td>' + giohang[i][3] + '</td>' +
      '<td>' +
      ' <div>' + tt + '</div>' +
      '</td>' +
      '</tr>';

  }
  ttgh += '<tr>' +
    '<th colspan="5">Tổng đơn hàng </th>' +
    '<th>' +
    '<div>' + tong +
    '</th>' +
    '</tr>' +
    '</tr >';

document.getElementById("mycart").innerHTML = ttgh;
showgiohang_trangthanhtoan();

}


