import React from "react";

const EventData = React.createContext("");

const DataProvider = ({children}) => {
  const [eventList, setEventList] = useState(
    [
      {
        id : 1,
        image : "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6…HnJ3bvZIhd-qQAQCQYG2f5R-QR0ywXSROjRoA&oe=645769A7",
        content : "크크벨리곰 인증샷 #EVENT 하나, 둘, 셋- 찰칵!📸 벨리곰이랑 사진 찍자곰🐻 초대형 어메이징 벨리곰이랑 인증샷 못찍어서 아쉬웠던 오글이들 모여라! 4월 30일부터 5월 9일까지 크리스피 크림 유니폼을 입은 특별한 벨리곰이 매장에 찾아온다곰! 크리스피 크림 도넛 강남역점, 수원인계점, 대전둔산점에서더 스페셜해진 #크크벨리곰 을 만나봐!크크벨리곰 인증샷 찍고 SNS에 업로드 하면추첨을 통해 푸짐한 경품을 줄게!📍 필1수 해시태그: #크크벨리곰 #크리스피크림도넛※인증샷 이벤트의 상세한 내용은 현장 안내문을 통해 확인가능합니다.※본 이벤트의 당첨자 발표 및 공지는 크리스피 크림 도넛 인스타그램에서 안내될 예정입니다."
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