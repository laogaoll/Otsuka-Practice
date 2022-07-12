import './index.less';
import Button from '../components/Button';
import List11 from '../../es/List/List11';
import List09 from '../../es/List/List09';
import Img02 from '../components/Img02';
import Img03 from '../../es/List/Img03';
export default function HomePage() {
    
    const data2 = [
        'https://www.otsuka.co.jp/nutraceutical/products/assets/img/item_im01_new.png',
        'https://www.otsuka.co.jp/nutraceutical/products/assets/img/item_im04_new_1.png',
        'https://www.otsuka.co.jp/nutraceutical/products/assets/img/item_im16_new_1.png',
        'https://www.otsuka.co.jp/nutraceutical/products/assets/img/item_im02.png',
        'https://www.otsuka.co.jp/nutraceutical/products/assets/img/item_im03.png',
        'https://www.otsuka.co.jp/nutraceutical/products/assets/img/item_im05.png',
        'https://www.otsuka.co.jp/nutraceutical/products/assets/img/bodymainte.png',
        'https://www.otsuka.co.jp/nutraceutical/products/assets/img/item_im07_1.png',
      ];

    const data = {
        title: 'ニュースリリース',
        list: [
          {
            title: '2022.07.07',
            label: '企業',
            cnt: '大塚製薬　中小企業の健康課題解決を支援する【健康経営つながるサポート】の本格運用開始',
          },
          {
            title: '2022.06.30',
            label: 'ニュートラシューティカルズ関連事業',
            cnt: 'ポカリスエット リターナブル瓶 250ml 循環型ショッピングプラットフォーム 「Loop」で販売開始',
          },
          {
            title: '2022.06.27',
            label: '医療関連事業',
            cnt: '抗精神病薬「ブレクスピプラゾール」 アルツハイマー型認知症に伴う行動障害（アジテーション）を対象とした グローバルフェーズ3 試験で主要評価項目を達成し有効性を確認',
          },
        ],
        line: 0,
        round: 0,
        bottom: 0,
      };
      const data09 = {
        title: 'List08',
        list: [
          {
            // title: 'title主题title主题',
            label: 'New',
            cnt: '取扱い中止の検査項目について大変ご不便おかけいたしますが、引き続きよろしくお願い申し上げます。',
          },
        ],
        line: 0,
        label: 1,
        tit: 0,
      };
      const data3 = [
        {
          list: [
            {
              img: 'https://www.otsuka.co.jp/health-and-illness/assets/img/index_im01_15.png',
              title: '健康に関する情報',
              cnt: '免疫navi',
            },
            {
              img: 'https://www.otsuka.co.jp/health-and-illness/assets/img/index_im01_14.jpg',
              title: '健康に関する情報',
              cnt: '免疫navi',
            },
            {
              img: 'https://www.otsuka.co.jp/health-and-illness/assets/img/index_im01_01.png',
              title: '健康に関する情報',
              cnt: '免疫navi',
            },
            {
              img: 'https://www.otsuka.co.jp/health-and-illness/assets/img/index_im01_09.png',
              title: '健康に関する情報',
              cnt: '免疫navi',
            },
          ],
        },
        {
          list: [
            {
              img: 'https://www.otsuka.co.jp/health-and-illness/assets/img/index_im02_20.png',
              title: '健康に関する情報',
              cnt: '免疫navi',
            },
            {
              img: 'https://www.otsuka.co.jp/health-and-illness/assets/img/index_im02_09.png',
              title: '健康に関する情報',
              cnt: 'PMSラボ',
            },
            {
              img: 'https://www.otsuka.co.jp/health-and-illness/assets/img/index_im02_05.png',
              title: '健康に関する情報',
              cnt: '熱中症からカラダを守ろう',
            },
            {
              img: 'https://www.otsuka.co.jp/health-and-illness/assets/img/index_im02_15.png',
              title: '健康に関する情報',
              cnt: '食物繊維を摂ろう！',
            },
          ],
        },
      ];
  return (

        
            <div className="g-index">
                <div className="g-head">
                    <div className="bus-head">
                        <h2 className='u-title1'>2つの事業</h2>
                        <div>
                        病気を治すこと。健康を守ること。<br />
大塚製薬は「人々の健康をカラダ全体で考える」トータルヘルスケアカンパニーです。
                        </div>
                    </div>
                    <div className="bus-body">
                            <div>
                                <Button data="医療関連事業"></Button>
                                <span>疾病の診断から治療までを担う医療用医薬品を展開</span>
                            </div>
                            <div>
                                <Button data="ニュートラシューティカルズ関連事業"></Button>
                                <li><span>日々の健康維持・増進をサポートする栄養製品や健粧品*を展開</span></li>
                                <li> <span>*健粧品（Cosmedics）：cosmetics（化粧品）＋medicine（医薬品）</span></li>
                               
                            </div>
                    </div>
                </div>
                <div className="m-info">
                    <div className="info-body">
                        <h2>新着情报</h2>
                       <List11 data={data}></List11>
                        <div className='u-sp'><span>ニュースリリース一覧へ</span></div> 
                    </div>
                </div>
                <div className="m-img11">
                    <div className="img-body">
                        {
                            data2.map((item,index)=>{
                                return(
                                    <div key={index} className="m-item">
                                        <img src={item} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='img-bt'>
            <Button data={'全ての製品はこちら'}></Button>
            <Button data={'ソーシャルメディア公式アカウント一覧'}></Button>
                    </div>
                </div>
                <div className="m-img02">
                    <div className="img02-body">
                        <h2>健康と病気</h2>
                        <List09 data={data09}></List09>
                        <div>{data3.map((item,index)=>{
                            return(
                                <div key ={index} className="item">
                                    <Img02 data={item}></Img02>
                                </div>
                            )
                        })}</div>
                        <div className='bt01'>
                        <Button data={'健康と病気に関する情報一覧へ'}></Button>
                            </div>
                    </div>
                </div>
                <div className="m-img10">
                        <div>
                            <div className="text">
                                <h2>徳島ヴォルティス</h2>
                                <span>四国初のJリーグチームとして設立された</span>
                                <span>ーグチームとして設立され</span>
                            </div>
                            <div className="img">
                                <img src="https://www.otsuka.co.jp/img/index_im05_01.jpg.webp" alt="" />
                            </div>
                        </div>
                        <div>
                        <div className="text">
                                <h2>大塚国際美術館</h2>
                                <p>「大塚国際美術館」は、大塚グループが創立75周年記念事業として徳島県鳴門市に設立した日本最大級の常設展示スペースを有する「陶板名画美術館」です。</p>
    
                            </div>
                            <div className="img">
                                <img src="https://www.otsuka.co.jp/img/index_im05_02.jpg.webp" alt="" />
                            </div>
                        </div>
                </div>
                <div className="g-foot">
                        <div className="m-top">
                            <div>個人情報・特定個人情報保護宣言</div>
                            <div>サイトのご利用について</div>
                            <div>サイトマップ</div>
                        </div>
                        <div className="m-mid">
                            <div>大塚ホールディングス</div>
                            <div>大塚製薬工場</div>
                            <div>大鵬薬品工業</div>
                            <div>大塚倉庫</div>
                            <div>大塚化学</div>
                            <div>大塚食品</div>
                            <div>大塚メディカルデバイス</div>
                        </div>
                        <div className="m-down">
                          <div className="logo">
                              <img src="https://www.otsuka.co.jp/app-files/img/cmn_logo01_02.svg" alt="" />
                              <p>Otsuka-people creating new products for better health worldwide</p>
                          </div>
                          <div>Copyright © Otsuka Pharmaceutical Co., Ltd.</div>
                        </div>
                </div>
            </div>
  );
}
