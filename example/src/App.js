import React, { Component } from 'react'
import MasspaWorkingDays from 'masspa-working-days'
import { translate, Trans } from 'react-i18next';


let data={
  address: "114 Phan Văn Trị, Phường 2, Quận 5, Hồ Chí Minh, Vietnam",
  catServiceId: 2,
  city: "Hồ Chí Minh",
  country: "VN",
  countryCode: "+84",
  createdAt: 1562734174993,
  currencyCode: "VND",
  description: "<p><span>Kim Spa là 1 trong những spa công nghệ cao tiêu chuẩn Mỹ - Châu Âu tại Việt Nam uy tín hàng đầu có cam kết với khách hàng trên toàn quốc. Không gian thiên nhiên không kém phần sang trọng. Với phong cách làm việc và chăm sóc tận tình, chuyên viên được đào tạo bài bản chuyên nghiệp thân thiện với khách hàng, phí dịch vụ phù hợp, không gian ấm cúng, sạch đẹp. Kim Spa là địa điểm lý tưởng cho phái đẹp đến để thư giãn, làm đẹp và thanh lọc cơ thể. Kim spa đề cao các giá trị chăm sóc cơ thể và làm đẹp mang đậm vị Việt. Các sản phẩm ở đây 100% nguyên liệu từ thảo mộc thiên nhiên, được điều chế tại Spa dựa trên những công thức tỉ lệ vàng Hoàng Cung thời xưa. </span></p>",
  discount: '{"start":1570088533894,"end":1571384490826,"enable":0,"canUseVoucher":1,"value":400000,"note":"HOÀN TOÀN TỪ THIÊN NHIÊN","type":"value","branch":"[\"38c1046a-3927-4638-a107-1dd061988b74\"]"}',
  district: "Quận 5",
  imageUrl: "/images/default-image-store.png",
  isActive: 1,
  lat: "10.7571842",
  lng: "106.68240029999993",
  logo: "https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/img-logo/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1573098561474.png",
  maxPrice: 0,
  minPrice: 0,
  mobile: "0934 788 768",
  name: "Kim Spa",
  no: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
  ownerName: null,
  phone: "0283 8377 222",
  pointSystem: 0,
  rating: 1,
  state: null,
  support: '{"japanese":0,"korean":0}',
  updatedAt: 1572950929936,
  userCode: "2a5ab67d-2134-47bf-902d-a063927e96aa",
  usingTax: 0,
  website: "https://kimbeautygroup.vn/",
  workingDays: '{"monday":{"from":1573005649679,"to":1573048849712,"off":0},"tuesday":{"from":1573005649716,"to":1573048849721,"off":0},"wednesday":{"from":1573005649724,"to":1573048849728,"off":0},"thursday":{"from":1573005649731,"to":1573048849733,"off":0},"friday":{"from":1573005649737,"to":1573048849741,"off":0},"saturday":{"from":1573005649744,"to":1573048849746,"off":0},"sunday":{"from":1573005649748,"to":1573048849756,"off":0}}'
}

let branches=[
  {
    address: "114 Phan Văn Trị, Phường 2, Quận 5, Hồ Chí Minh, Vietnam",
    branchCode: "38c1046a-3927-4638-a107-1dd061988b74",
    branchName: "Kim Spa Phan Văn Trị",
    city: "Hồ Chí Minh",
    country: null,
    countryCode: "+84",
    createdAt: 1562734175089,
    district: "Quận 5",
    imageGallery: '["https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/branch/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1569572913145.jpg","https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/branch/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1569572929266.jpg","https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/branch/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1569572936696.jpg","https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/branch/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1569572952608.jpg","https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/branch/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1569898672540.jpg"]',
    imageUrl: "https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/branch/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1569572958576.jpg",
    isMain: 0,
    lat: "10.7571842",
    lng: "106.68240029999993",
    mobile: "0934 788 768",
    phone: "0283 8377 222",
    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    state: null,
    updatedAt: 1569898674123
  },
  {
    address: "39B Nguyễn Đức Cảnh, Phường Hoa Lư, TP Pleiku Gia Lai",
    branchCode: "c539ccda-af88-11e9-97df-42010a8c0fc7",
    branchName: "Kim Spa Gia Lai",
    city: "",
    country: "",
    countryCode: "+84",
    createdAt: null,
    district: "",
    imageGallery: '["https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/branch/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1568781073409.jpg","https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/branch/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1568781087001.jpg","https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/branch/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1568781092234.jpg","https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/branch/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1568781097076.jpg","https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/branch/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1568781103912.jpg","https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/branch/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1568781109315.jpg"]',
    imageUrl: "https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/branch/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1568781116135.jpg",
    isMain: 0,
    lat: "13.9881058",
    lng: "108.00991099999999",
    mobile: "0269 3887 999",
    phone: "",
    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    state: "",
    updatedAt: 1568781110135
  }
]

 class App extends Component {
 

  render () {
    // props: iconColor informationData branches language borderWorkingDays
    const{t,i18n} = this.props;

     const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    return (
      <div>
        <button onClick={()=>changeLanguage('en')}>en</button>
        <button  onClick={()=>changeLanguage('vn')}>vn</button>
        <MasspaWorkingDays informationData={data}  branches={branches}   languages={i18n}/>
      </div>
    )
  }
}
export default translate('translations')(App);
