import SVGIcon from '@/components/svg-icon/SVGIcon';
import Tooltip from '@/components/tooltip/Tooltip';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/button/Button';
import Service from '@/service/Service';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="page mt-12">
      <div className="max-container flex h-[88dvh] items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <SVGIcon name="LogoSeoulsync" width={169} height={169} />
          <div className="mb-3 mt-[113px]">
            <Tooltip
              size="small"
              direction="bottomMiddle"
              message="⚡️ 로그인하고 나에게 맞는 코스를 추천 받아보세요!"
              isBubble
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-[12px]">
            <Button
              bgColor="kakaoYellow"
              textColor="gray900"
              size="medium"
              rounded="medium"
              onClick={() => navigate('/user/login/kakao')}
            >
              <SVGIcon name={'Kakao'} width={22} height={22} />
              <span className="ml-2 font-bold">카카오톡으로 계속하기</span>
            </Button>
            <Button
              bgColor="naverGreen"
              textColor="white"
              size="medium"
              rounded="medium"
              onClick={() => navigate('/user/login/naver')}
            >
              <SVGIcon name={'Naver'} width={22} height={22} />
              <span className="ml-2 font-bold">네이버로 계속하기</span>
            </Button>
            <Button
              bgColor="googleGray"
              textColor="gray900"
              size="medium"
              rounded="medium"
              onClick={() => navigate('/user/login/google')}
            >
              <SVGIcon name={'Google'} width={22} height={22} />
              <span className="ml-2 font-bold">구글로 계속하기</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
