// ページの読み込みが完了したら
window.onload = function() {
    // ナビゲーションのアイテムを取得
    const navItems = document.querySelectorAll('nav ul li a');
  
    // 各アイテムをクリックしたときの処理
    navItems.forEach(function(item) {
      item.addEventListener('click', function(event) {
        // デフォルトのクリックイベントをキャンセル
        event.preventDefault();
        
        // クリックされたアイテムに対応するページに遷移する処理を記述
        // ここでは、console.log()でメッセージを表示するだけにしています。
        console.log(`移動先: ${item.getAttribute('href')}`);
        
        // ナビゲーションのアイテムのアクティブ状態を切り替える
        navItems.forEach(function(navItem) {
          navItem.classList.remove('active');
        });
        item.classList.add('active');
      });
    });
  }
  