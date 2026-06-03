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


// Canvas要素を取得
const canvas = document.getElementById("myCanvas");
// 2D描画コンテキストを取得
const ctx = canvas.getContext("2d");

// Canvasにテキストを描画する関数
function drawCanvasText(text) {
     // Canvasをクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // フォントスタイルを設定
    ctx.font = "30px Arial";
    // テキストの色を設定
    ctx.fillStyle = "#333";
    // テキストの位置を中央揃えに
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // テキストを描画
    // fillText(テキストの内容, x座標, y座標)
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}

// ページ読み込み時にCanvasに初期メッセージを描画
drawCanvasText("今日の目標はコレ！");

// ボタンがクリックされた時の処理
const updateButton = document.getElementById('updateCanvasText');
updateButton.addEventListener('click', () => {
    // 例として、ランダムなメッセージを表示
    const messages = [
        "新しいことに挑戦しよう！",
        "一歩ずつ進もう！",
        "楽しく学習しよう！",
        "諦めずに頑張ろう！",
        "プログラミングは楽しい！"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    drawCanvasText(messages[randomIndex]);
});