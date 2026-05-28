console.log("ファイル連動中かチェック");

// 変数messegeを宣言
let message="";  
message=document.getElementById("welcomeMessage"); 
message.textContent="こんにちは!";

// 条件分岐
// もしも○○ならA、でなければB
// 処理が分岐する



// let hour = 16; //時間を記録する変数
let hour = new Date().getHours(); //時間を取得する命令

//もしも変数hourが13より以降なら”こんにちは!""
if(hour >= 18){ //変数hourが18より以降なら”こんばんは!""
    message.textContent = "こんばんわ!";
}
else if(hour >= 10){ //変数hourが10以上なら”こんにちは!""
message.textContent="こんにちは!";
} else if(hour >= 4){ //でなければ
    message.textContent = "おはよう!";
}

//繰り返し処理
let starEle1 = document.getElementById("stars1");


//カウント専用の変数を用意
//カウント専用の変数がどうなるまで繰り返しなのか条件を用意
//カウント専用の変数がどのようのにカウントされるのか決める
//　++　指定した変数を1増やす
for (let i =0 ; i < 3; i++) {
let addCnt = document.createElement("span");
addCnt.textContent = "☆";
starEle1.appendChild(addCnt);
}

//数の大きい・小さいの比較の記号
// a > 5  →aは5より大きい
// a < 5 →aは5より小さい
// a >= 5  →aは5以上
// a <= 5  →aは5

// a == 5  →aは5と同じ
// a != 5  →aは5と同じじゃない

//　a != 5  →aは5と同じじゃない

//　※「=」は代入演算子　A　＝　B　：Bの結果をAに代入する


