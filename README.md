# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## はじめに

プログラミングスクールにて、個人制作期間にて作成しました。
作り始めた理由として
①今後、チーム制作を通じてTodoサイト「Trello」を利用するため、Todoリストがどのように作られていくのかを把握してみたい
参考URL：https://trello.com
②Railsの基本の定着。ルーティング、アソシエーションなどの流れをきちんと把握すること。
③Trelloの見た目がかっこよかったので真似してみたかった。


本番環境：https://torete.herokuapp.com/

## 制作した所管


- Todoリストは「使いやすさ」が重要。jsをもっと使用し、感覚的な操作をできるようにしたい。
- railsは,MVCを使用しているため、DRYへの意識が強いことを感じた。特にcontrollerのアクション毎にscopeの独立性が高いため、処理の明確化ができるように思う。
- railsはあくまで、サーバーサイド。１ページの中で、細かい実装をしようとするとJS
の役割が大きいということがわかりました。AJAX通信や、modalwindowなどでviewの密度を濃くすることができる。


## 反省点

MVCなのに、SPAサイトを作ろうとしていた。Trelloは、Reactで実装しているため、cardの登録なども非同期でスムーズにできていた。
Railsでも可能ではあるものの、得意分野から外れているように感じました。
モーダルウィンドウでcardの登録を実装した際に特に感じました。
そもそも「newアクション」で専用のviewを作るのが基本。「createアクション」後のredirect_toはよくあるが、「newアクション」は専用のviewでやるべきと思いました。設計思想と根本的に違うことをしようとしました。

このことから、言語の長所・短所を把握し、機能を実装することが重要と認識しました。
計画の時点で、railsで実装する部分、jqueryで実装、webpackを用いてvue.jsなどを利用するなどの選択肢をもっと持てるようになりたいと思いました。

次回の個人制作では、JSでの実装についてもっと理解を深めていければと思います。



