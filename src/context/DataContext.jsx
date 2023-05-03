import React, { useState } from "react";

const DataContext = React.createContext("");

const DataProvider = ({children}) => {
    const [donutList, setDonutList] = useState(
        [
            {   
                id : 1,
                category: "GLAZED",
                name : "오리지널 글레이즈드",
                detail : "크리스피크림의 가장 대표적인 도넛으로 부드럽고 달콤한 맛의 오리지널 글레이즈드",
                image : "https://img.lotteeatz.com/upload/product/2023/01/02/20230102162840841_0.jpg",
                price : 1700

            },
            {
                id : 2,
                category: "LIMITED",
                name : "돈워리 비벨리",
                detail : "달콤한 망고 우유크림처럼 달콤하고 행복한 세상을 꿈꾸는 벨리곰",
                image : "https://img.lotteeatz.com/upload/product/2023/03/29/20230329091835298_7.jpg",
                price : 3200
            },
            {
                id : 3,
                category: "LIMITED",
                name : "커여운 벨리곰",
                detail : "딸기 풍선껌맛을 연상시키는 장난 가득한 귀여운 벨리곰",
                image : "https://img.lotteeatz.com/upload/product/2023/03/29/20230329091817996_8.jpg",
                price : 3600
            },
            {
                id : 4,
                category: "LIMITED",
                name : "레인보우 벨리",
                detail : "블루베리맛 하늘에 우유크림맛 구름 위를 둥둥 떠다니는 벨리곰",
                image : "https://img.lotteeatz.com/upload/product/2023/03/29/20230329091850241_9.jpg",
                price : 3200
            },
            {
                id : 5,
                category: "LIMITED",
                name : "초코홀릭 벨리",
                detail : "진한 초콜릿 늪에 빠진 장난꾸러기 벨리곰",
                image : "https://img.lotteeatz.com/upload/product/2023/03/29/20230329091907371_5.jpg",
                price : 3400
            },
            {
                id : 6,
                category: "",
                name : "초코홀릭",
                detail : "밀크초콜릿과 다크초콜릿이 어우러진 도넛",
                image : "https://img.lotteeatz.com/upload/product/2023/01/02/20230102162924400_3.jpg",
                price : 1900
            },
            {
                id : 7,
                category: "",
                name : "초콜릿 아이스드 글레이즈드",
                detail : "부드러운 오리지널 글레이즈드 위에 초콜릿 아이싱을 입힌 도넛",
                image : "https://img.lotteeatz.com/upload/product/2023/01/02/20230102162914493_6.jpg",
                price : 1900
            },
            {
                id : 8,
                category: "",
                name : "슈거 코티드",
                detail : "도넛이 글레이즈 폭포로 들어가기 전에 꺼낸 후 글레이즈 대신 설탕을 묻힌 제품",
                image : "https://img.lotteeatz.com/upload/product/2023/01/02/20230102162851472_1.jpg",
                price : 1700
            },
            {
                id : 9,
                category: "FILLED",
                name : "뉴욕 치즈케익",
                detail : "진한 크림 치즈 필링과 크림 치즈 아이싱, 고소한 쿠키가 어우러진 도넛",
                image : "https://img.lotteeatz.com/upload/product/2023/01/02/20230102163017660_0.jpg",
                price : 2200
            },
            {
                id : 10,
                category: "CAKE",
                name : "글레이즈드 사워크림",
                detail : "사워크림 향이 나는 진하고 촉촉한 도넛 전체에 글레이즈를 입힌 도넛",
                image : "https://img.lotteeatz.com/upload/product/2023/01/02/20230102163008440_9.jpg",
                price : 1900
            },
            {
                id : 11,
                category: "CAKE",
                name : "글레이즈드 초콜릿 케익",
                detail : "진하고 촉촉한 초콜릿 케익 도넛 위에 글레이즈드를 입힌 도넛",
                image : "https://img.lotteeatz.com/upload/product/2023/01/02/2023010216295896_8.jpg",
                price : 1900
            },
            {
                id : 12,
                category: "",
                name : "로투스 비스코프 도넛",
                detail : "로투스 쿠키크림을 가득 채운 도넛에 진한 로투스 스프레드와 로투스 크럼블을 토핑한 도넛",
                image : "https://img.lotteeatz.com/upload/product/2023/01/02/20230102163028617_3.jpg",
                price : 2200
            },
            {
                id : 13,
                category: "FILLED",
                name : "프리미엄 스트로베리 필드",
                detail : "상큼한 스트로베리 잼을 가득 채운 도넛 위에 딸기맛 파우더 슈거가 뿌려진 도넛",
                image : "https://img.lotteeatz.com/upload/product/2023/01/02/20230102162903462_3.jpg",
                price : 2200
            },
            {
                id : 14,
                category: "FILLED",
                name : "우유크림 듬뿍",
                detail : "글레이즈 쉘도넛에 부드러운 우유크림이 듬뿍 담긴 달콤한 도넛",
                image : "https://img.lotteeatz.com/upload/product/2022/09/22/20220922133338779_6.jpg",
                price : 2200
            },
            {
                id : 15,
                category: "FILLED",
                name : "초코 우유크림 듬뿍",
                detail : "글레이즈 쉘 도넛에 초코 우유크림이 듬뿍 담긴 달콤한 도넛",
                image : "https://img.lotteeatz.com/upload/product/2022/09/30/20220930181300566_1.jpg",
                price : 2200
            },
            {
                id : 16,
                category: "",
                name : "메이플 링",
                detail : "달콤한 메이플 스프레드 위에 고소한 아몬드를 토핑한 도넛",
                image : "https://img.lotteeatz.com/upload/product/2022/09/30/2022093018135423_8.jpg",
                price : 1900
            },
            {
                id : 17,
                category: "",
                name : "오리지널 글레이즈드 더즌",
                detail : "크리스피크림의 가장 대표적인 도넛으로 부드럽고 달콤한 맛의 오리지널 글레이즈드(12개입)",
                image : "	https://img.lotteeatz.com/upload/product/2023/02/09/20230209035130481_1.png",
                price : 16000
            },
            {
                id : 18,
                category: "",
                name : "오리지널 글레이즈드 하프더즌",
                detail : "크리스피크림의 가장 대표적인 도넛으로 부드럽고 달콤한 맛의 오리지널 글레이즈드(6개입)",
                image : "https://img.lotteeatz.com/upload/product/2019/12/02/20191202173505945_9.jpg",
                price : 10200
            },
            {
                id : 19,
                category: "",
                name : "어쏘티드 더즌(FIX)",
                detail : "크리스피크림의 베스트 도넛 12가지로 구성된 세트 메뉴",
                image : "https://img.lotteeatz.com/upload/product/2023/02/09/20230209161737983_8.jpg",
                price : 18000
            },
            {
                id : 20,
                category: "",
                name : "더블 더즌 딜(FIX)",
                detail : "부드럽고 달콤한 오리지널 글레이즈드 더즌과 다양한 맛의 어쏘티드 더즌(FIX)을 함께 구성한 제품",
                image : "https://img.lotteeatz.com/upload/product/2022/09/30/2022093017564794_0.jpg",
                price : 33000
            },
            {
                id : 21,
                category: "COFFEE",
                name : "아메리카노",
                detail : "크리스피 크림만의 진한 버터 스카치향을 느끼실 수 있는 에스프레소와 신선한 물을 혼합한 음료",
                image : "https://img.lotteeatz.com/upload/product/2020/02/03/20200203124958619_8.jpg",
                price : 3700
            },
            {
                id : 22,
                category: "COFFEE",
                name : "라떼",
                detail : "부드럽게 마음을 달래주는 스팀우유와 풍부하고 진한 향의 에스프레소를 섞고 그 위에 우유거품을 살짝 얹은 음료",
                image : "https://img.lotteeatz.com/upload/product/2020/02/03/20200203125017162_1.jpg",
                price : 3900
            },
            {
                id : 23,
                category: "COFFEE",
                name : "바닐라 라떼",
                detail : "풍부한 향의 에스프레소 위에 향긋한 바닐라향과 신선한 우유를 넣고 우유거품을 살짝 올린 음료",
                image : "https://img.lotteeatz.com/upload/product/2020/02/03/20200203125045878_4.jpg",
                price : 4400
            },
            {
                id : 24,
                category: "COFFEE",
                name : "모카",
                detail : "풍부한 향의 에스프레소 위에 달콤쌉싸름한 초콜릿, 신선한 우유가 환상적으로 조화된 음료",
                image : "https://img.lotteeatz.com/upload/product/2020/02/03/20200203125131200_8.jpg",
                price : 4400
            },
            {
                id : 25,
                category: "COFFEE",
                name : "카라멜 마끼아또",
                detail : "풍부한 향의 에스프레소 위에 신선한 우유, 달콤한 카라멜 시럽 그리고 우유 거품을 살짝 올린 음료",
                image : "https://img.lotteeatz.com/upload/product/2020/02/03/20200203125217151_6.jpg",
                price : 4400
            },
            {
                id : 26,
                category: "COFFEE",
                name : "카푸치노",
                detail : "아메리카노보다 부드럽고 풍부한 향의 에스프레소 위에 신선한 우유를 넣고 부드러운 우유거품을 얹은 음료",
                image : "https://img.lotteeatz.com/upload/product/2020/02/07/20200207170508969_9.jpg",
                price : 3900
            },
            {
                id : 27,
                category: "DRINKS",
                name : "스트로베리 스무디",
                detail : "상큼달콤한 딸기 맛의 시원하면서도 상큼한 맛을 즐길 수 있는 제품",
                image : "https://img.lotteeatz.com/upload/product/2019/12/23/20191223155750186_7.jpg",
                price : 5500
            },
            {
                id : 28,
                category: "DRINKS",
                name : "망고 스무디",
                detail : "열대과일 망고의 달콤함과 부드러움을 시원하게 담아낸 제품",
                image : "https://img.lotteeatz.com/upload/product/2019/12/02/20191202174730518_9.jpg",
                price : 5500
            },
            {
                id : 29,
                category: "DRINKS",
                name : "살구자두 스무디",
                detail : "상큼하고 깔끔한 살구자두맛의 스무디",
                image : "https://img.lotteeatz.com/upload/product/2019/12/02/20191202174745364_4.jpg",
                price : 5500
            },
            {
                id : 30,
                category: "DRINKS",
                name : "메론 스무디",
                detail : "달콤한 메론맛의 부드러운 스무디",
                image : "https://img.lotteeatz.com/upload/product/2019/12/02/2019120217480114_5.jpg",
                price : 5500
            },
            {
                id : 31,
                category: "DRINKS",
                name : "다크 초콜릿",
                detail : "다크 초콜릿 특유의 깊고 진한 맛을 느낄 수 있는 프리미엄 초콜릿 음료",
                image : "https://img.lotteeatz.com/upload/product/2021/11/24/20211124130532387_3.jpg",
                price : 3700
            },
            {
                id : 32,
                category: "DRINKS",
                name : "밀크 티",
                detail : "진하게 우려낸 홍차에 따뜻한 우유를 더한 부드러운 티라떼",
                image : "https://img.lotteeatz.com/upload/product/2021/11/24/20211124134344957_8.jpg",
                price : 4200
            }
        ]
    );

    const [cartList, setCartList] = useState([]);

    const value = {
      state: { donutList, cartList },
      action: { setDonutList, setCartList }
    };

    return <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
}

export {DataProvider};

export default DataContext;