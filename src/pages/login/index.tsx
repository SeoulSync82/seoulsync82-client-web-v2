import SVGIcon from '@/components/svg-icon/SVGIcon';
import Tooltip from '@/components/tooltip/Tooltip';
import SocialLoginButton from '@/components/buttons/social-login/SocialLoginButton';

export default function Login() {
  return (
    <div className="page">
      <div className="max-container flex h-[88dvh] items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <SVGIcon name="LogoSeoulsync" width={169} height={169} />
          <Tooltip
            size="small"
            direction="bottomMiddle"
            message="⚡️ 로그인하고 나에게 맞는 코스를 추천 받아보세요!"
            isBubble
            className="mb-[15px] mt-[70px]"
          />
          <div className="flex w-full flex-col items-center justify-center gap-[12px]">
            <SocialLoginButton snsType="kakao" />
            <SocialLoginButton snsType="naver" />
            <SocialLoginButton snsType="google" />
          </div>
        </div>
      </div>
    </div>
  );
}
