import React from "react";

const EventData = React.createContext("");

const DataProvider = ({children}) => {
  const [eventList, setEventList] = useState(
    [
      {
        id : 1,
        content : 
          "크크벨리곰 인증샷 #EVENT 하나, 둘, 셋-찰칵!📸 벨리곰이랑 사진 찍자곰🐻 초대형 어메이징 벨리곰이랑 인증샷 못찍어서 아쉬웠던 오글이들 모여라! 4월 30일부터 5월 9일까지 크리스피 크림 유니폼을 입은 특별한 벨리곰이 매장에 찾아온다곰! 크리스피 크림 도넛 강남역점, 수원인계점, 대전둔산점에서더 스페셜해진 #크크벨리곰 을 만나봐!크크벨리곰 인증샷 찍고 SNS에 업로드 하면추첨을 통해 푸짐한 경품을 줄게!📍 필1수 해시태그: #크크벨리곰 #크리스피크림도넛※인증샷 이벤트의 상세한 내용은 현장 안내문을 통해 확인가능합니다.※본 이벤트의 당첨자 발표 및 공지는 크리스피 크림 도넛 인스타그램에서 안내될 예정입니다.",
        image : "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6…HnJ3bvZIhd-qQAQCQYG2f5R-QR0ywXSROjRoA&oe=645769A7",

      },
      {
        id : 2,
        content : 
          "벨리곰이랑 피크닉 어때? 벨리곰 피크닉 매트를 촥- 펼쳐주면 어디든 행복한 시간을 보낼 수 있다곰💗 📣벨리랑 피크닉 떠나고 싶은 사람들 주목 지금 크리스피 크림 도넛 인스타그램에서 진행하는 이벤트에 참여하고 벨리곰 피크닉 매트 받아가자! 🍩참여방법🍩 벨리곰과 떠나고 싶은 피크닉 장소는? 댓글로 남겨주면 ‘벨리곰 피크닉 매트’를 선물로 주겠다곰!! 🥰💞 🎁당첨자 선물: 벨리곰 피크닉 매트/3명 📆이벤트 기간: 4월 24일(월)~4월 30일(일) 💝당첨자 발표: 5월 3일(수) ※본 이벤트는 크리스피 크림 도넛 인스타그램에서만 진행됩니다.",
        image : "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6…09Mv8JcMx1RUt998y3uZnKJJRekK8h1G9iBHg&oe=6458B505"
      }
    ]
  )


const value = {
  state: { eventList },
  action: { setEventList }
};

return <EventData.Provider value={value}>
    {children}
</EventData.Provider>
}

export {DataProvider};

export default EventData;