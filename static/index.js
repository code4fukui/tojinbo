
// メニューリンクの要素を取得
const homelink = document.getElementById('homelink');
const iwaspotlink = document.getElementById('iwaspotlink');
const maplink = document.getElementById('maplink');
const gamelink = document.getElementById('gamelink');
const userlink = document.getElementById('userlink');

// ページ移動時の処理を定義
function navigateToPage(pageId) {
  // アクティブ状態のリンクをリセット
  homelink.classList.remove('active');
  iwaspotlink.classList.remove('active');
  maplink.classList.remove('active');
  gamelink.classList.remove('active');
  userlink.classList.remove('active');

  // クリックされたリンクをアクティブにする
  document.getElementById(pageId).classList.add('active');
  
  // ここでページの移動を実行する
  // 例: window.location.href = '新しいページのURL';
  console.log(`Navigating to ${pageId} page...`);
}

// メニューリンクがクリックされた時の処理を定義
homelink.addEventListener('click', function() {
  navigateToPage('homelink');
});

iwaspotlink.addEventListener('click', function() {
  navigateToPage('iwaspotlink');
});

maplink.addEventListener('click', function() {
  navigateToPage('maplink');
});

gamelink.addEventListener('click', function() {
    navigateToPage('gamelink');
});

userlink.addEventListener('click', function() {
    navigateToPage('userlink');
});