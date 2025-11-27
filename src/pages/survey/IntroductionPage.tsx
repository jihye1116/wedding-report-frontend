"use client";

import Image from "next/image";
import { Fragment, useRef, useState } from "react";
import toast from "react-hot-toast";

import CommentIcon from "@/assets/icons/comment.svg";
import EditIcon from "@/assets/icons/edit.svg";
import FavoriteIcon from "@/assets/icons/favorite.svg";
import Logo from "@/assets/icons/logo.svg";
import PersonIcon from "@/assets/icons/person.svg";
import ScheduleIcon from "@/assets/icons/schedule.svg";
import { ActionButton } from "@/components/ActionButton";
import { AnswerButton } from "@/components/AnswerButton";
import { InputField } from "@/components/InputField";
import { Navigator } from "@/components/Navigator";
import { SelectionCircle } from "@/components/SelectionCircle";
import { StartButton } from "@/components/StartButton";
import { useIntroduction } from "@/hooks/useIntroduction";
import { useSwipeNavigation } from "@/hooks/useSwipeNavigation";
import { verifyAccessCode } from "@/utils/api";

interface IntroductionPageProps {
  onNext: () => void;
}

const IntroductionPage = ({ onNext }: IntroductionPageProps) => {
  const { step, setStep, introData, setIntroData } = useIntroduction();
  const [authCode, setAuthCode] = useState("");
  const [isError, setIsError] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [partnerGender, setPartnerGender] = useState<string>("");

  const authCodeRef = useRef<HTMLInputElement>(null);

  // 인증 코드는 5자리 (예: LOVE1)

  const {
    agreeAll,
    agreePrivacy,
    event_promotion_agree,
    name,
    partnerName,
    phoneNumber,
    partnerPhoneNumber,
    relationshipDuration,
    gender,
  } = introData;

  // 전화번호 입력 핸들러 (숫자만 허용)
  const handlePhoneNumberChange = (fieldName: string, value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    setIntroData({ ...introData, phoneNumber: numericValue });
  };

  const handlePartnerPhoneNumberChange = (fieldName: string, value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    setIntroData({ ...introData, partnerPhoneNumber: numericValue });
  };

  // 전화번호 유효성 검사 (11자리 숫자)
  const isValidPhoneNumber = (phone: string) => {
    return phone && phone.length === 11 && /^[0-9]{11}$/.test(phone);
  };

  const isAuthStepComplete = authCode.length === 5;
  const isStep2Complete = !!(
    name &&
    partnerName &&
    isValidPhoneNumber(phoneNumber) &&
    isValidPhoneNumber(partnerPhoneNumber)
  );
  const isStep3Complete = !!agreePrivacy;
  const isStep4Complete = !!(relationshipDuration && gender);

  // input refs
  const nameRef = useRef<HTMLInputElement>(null);
  const partnerNameRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const partnerPhoneNumberRef = useRef<HTMLInputElement>(null);

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleNextFromAuth = async () => {
    if (!isAuthStepComplete || authLoading) return;
    setIsError(false);
    setAuthLoading(true);
    try {
      const { success, message } = await verifyAccessCode(authCode);
      if (!success) {
        setIsError(true);
        toast.error(message || "인증 코드가 유효하지 않습니다.");
        return;
      }
      toast.success("인증이 완료되었습니다.");
      handleNextStep();
    } catch (e) {
      setIsError(true);
      const msg =
        e instanceof Error ? e.message : "인증 중 오류가 발생했습니다.";
      toast.error(msg);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleNextFromStep2 = () => {
    if (!name) {
      nameRef.current?.focus();
      toast.error("이름을 입력해주세요.");
      return;
    }
    if (!partnerName) {
      partnerNameRef.current?.focus();
      toast.error("파트너 이름을 입력해주세요.");
      return;
    }
    if (!phoneNumber || !isValidPhoneNumber(phoneNumber)) {
      phoneNumberRef.current?.focus();
      if (!phoneNumber) {
        toast.error("전화번호를 입력해주세요.");
      } else {
        toast.error("전화번호를 11자리 숫자로 정확히 입력해주세요.");
      }
      return;
    }
    if (!partnerPhoneNumber || !isValidPhoneNumber(partnerPhoneNumber)) {
      partnerPhoneNumberRef.current?.focus();
      if (!partnerPhoneNumber) {
        toast.error("파트너 전화번호를 입력해주세요.");
      } else {
        toast.error("파트너 전화번호를 11자리 숫자로 정확히 입력해주세요.");
      }
      return;
    }
    if (!gender) {
      toast.error("성별을 선택해주세요.");
      return;
    }
    if (!relationshipDuration) {
      toast.error("연애 기간을 선택해주세요.");
      return;
    }
    if (!agreePrivacy) {
      toast.error("개인정보 처리방침 동의를 해주세요.");
      return;
    }
    onNext();
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleAgreeAll = () => {
    const newValue = !agreeAll;
    setIntroData({
      ...introData,
      agreeAll: newValue,
      agreePrivacy: newValue,
      event_promotion_agree: newValue,
    });
  };

  const handleAgreePrivacy = () => {
    const newValue = !agreePrivacy;
    const newAgreeAll = newValue && event_promotion_agree;
    setIntroData({
      ...introData,
      agreePrivacy: newValue,
      agreeAll: newAgreeAll,
    });
  };

  const handleAgreeEventPromotion = () => {
    const newValue = !event_promotion_agree;
    const newAgreeAll = newValue && agreePrivacy;
    setIntroData({
      ...introData,
      event_promotion_agree: newValue,
      agreeAll: newAgreeAll,
    });
  };

  const onSwipedLeft = () => {
    switch (step) {
      case 0:
        handleNextFromAuth();
        break;
      case 1:
        handleNextStep();
        break;
      case 2:
        handleNextFromStep2();
        break;
      default:
        break;
    }
  };

  const onSwipedRight = () => {
    if (step > 0) {
      handleBack();
    }
  };

  const swipeHandlers = useSwipeNavigation({
    onSwipedLeft,
    onSwipedRight,
  });

  return (
    <div {...swipeHandlers} className="flex h-dvh flex-col">
      <Image
        className="mx-auto pt-8 pb-5 xl:mt-20"
        src={Logo}
        alt="Logo"
        height={70}
      />
      {step === 0 && (
        <div className="flex flex-1 flex-col">
          <main className="wrapper flex grow flex-col items-center justify-center gap-5 py-5 text-[#111111]">
            <h1 className="text-center text-2xl font-bold">인증 코드 입력</h1>
            <p className="text-center text-base">
              전달 받으신 코드를 입력해주세요.
            </p>
            <div className="flex w-full flex-col items-center gap-2">
              <input
                ref={authCodeRef}
                type="text"
                placeholder="코드 입력"
                maxLength={5}
                // maxLength={5}
                value={authCode}
                onChange={(e) => {
                  setAuthCode(e.target.value);
                  setIsError(false);
                }}
                className={`${
                  isError
                    ? "border-[#FF6666] text-[#FF6666] placeholder-[#FF6666] focus:border-[#FF6666]"
                    : "border-gray-300 focus:border-black"
                } h-12 w-full border outline-none`}
                style={{
                  borderRadius: "12px",
                  textAlign: "center",
                  fontSize: "14px",
                  padding: "20px 12px",
                  letterSpacing: authCode ? "10px" : undefined,
                }}
              />
              {isError && (
                <p
                  style={{
                    color: "#FF6666",
                  }}
                >
                  코드가 일치하지 않습니다. 다시 확인해 주세요.
                </p>
              )}
            </div>
            <div className="flex w-full justify-end">
              <ActionButton
                onClick={handleNextFromAuth}
                disabled={!isAuthStepComplete || authLoading}
                text={authLoading ? "인증 중..." : "인증하기"}
              />
            </div>
          </main>
          <div className="wrapper flex h-full flex-col justify-end py-10">
            <div className="flex justify-end"></div>
          </div>
        </div>
      )}
      {step === 1 && (
        <Fragment>
          <main className="wrapper flex flex-col gap-10 py-5">
            <div>
              <h1 className="text-center text-3xl font-medium text-[#111111]">
                우리 커플의 꽃길은?
              </h1>
              <h2 className="mt-2 text-center font-medium text-[#111111]">
                두 사람이 함께 걷는 길, 더 잘 이해하기
              </h2>
            </div>
            <article className="flex flex-col gap-4 leading-snug whitespace-pre-wrap text-[#111111]">
              <p>안녕하세요! 😊</p>
              <p>
                지금부터 두 분의 성향을 함께 살펴보고, 앞으로의 관계 흐름을
                예측해보는 결혼 시뮬레이션이 시작됩니다.
              </p>
              <p>
                먼저 서로의 성향, 감정 반응, 생활 리듬을 살펴보는 심리/가치관
                테스트가 진행됩니다.
              </p>
              {/* 아래에 사진과 동일한 부분 퍼블리싱.  */}
              <div className="mt-4 flex flex-col gap-3">
                {/* 상단 민트색 점선 구분선*/}
                <div
                  className="w-full"
                  style={{
                    height: 2,
                    backgroundImage:
                      "repeating-linear-gradient(90deg, rgba(109,212,189,0.8) 0, rgba(109,212,189,0.8) 8px, transparent 8px, transparent 20px)",
                    backgroundRepeat: "repeat-x",
                    backgroundPosition: "left center",
                  }}
                />
                <div className="pt-[15px] pb-5">
                  <p className="text-center font-medium">[테스트 상세 안내]</p>
                  <div className="mt-3 flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                      <Image
                        src={EditIcon}
                        alt="총 문항"
                        width={24}
                        height={24}
                      />
                      <span className="text-sm">총 120문항</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image
                        src={ScheduleIcon}
                        alt="소요 시간"
                        width={24}
                        height={24}
                      />
                      <span className="text-sm">약 2~30분 소요</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image
                        src={CommentIcon}
                        alt="질문 구성"
                        width={24}
                        height={24}
                      />
                      <span className="text-sm">질문 구성</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border border-[#DCDCDC] px-3 py-3.5">
                      <Image
                        src={PersonIcon}
                        alt="나에 대한 질문"
                        width={24}
                        height={24}
                      />
                      <span className="text-sm">나에 대한 질문</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border border-[#DCDCDC] px-3 py-3.5">
                      <Image
                        src={FavoriteIcon}
                        alt="파트너에 대한 질문"
                        width={24}
                        height={24}
                      />
                      <span className="text-sm">파트너에 대한 질문</span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-medium">
                    ※두 분 모두 각각 참여해야 하므로, 파트너에게도 링크를 공유해
                    주세요!
                  </p>
                </div>
                {/* 하단 민트색 점선 구분선*/}
                <div
                  className="w-full"
                  style={{
                    height: 2,
                    backgroundImage:
                      "repeating-linear-gradient(90deg, rgba(109,212,189,0.8) 0, rgba(109,212,189,0.8) 8px, transparent 8px, transparent 20px)",
                    backgroundRepeat: "repeat-x",
                    backgroundPosition: "left center",
                  }}
                />
                <p className="text-sm">
                  <span
                    className="underline"
                    style={{
                      textDecorationColor: "rgba(109,212,189,0.4)",
                      textDecorationThickness: "8px",
                      textUnderlineOffset: "-2px",
                    }}
                  >
                    편하게 집중할 수 있는 시간과 공간에서 진행해 주시면
                    좋습니다.
                  </span>
                </p>
              </div>
            </article>
          </main>
          <div className="wrapper flex h-full flex-col justify-end py-10">
            <div className="flex justify-end">
              <StartButton onClick={handleNextStep} />
            </div>
          </div>
        </Fragment>
      )}
      {step === 2 && (
        <div className="flex flex-1 flex-col">
          <main className="wrapper flex flex-col gap-10 overflow-y-auto py-5 pt-10 leading-snug text-[#111111]">
            {/* 나의 정보 입력 */}
            <section className="flex flex-col gap-6">
              <h2 className="text-xl font-bold">1. 나의 정보</h2>
              <div className="flex flex-col gap-4">
                <label className="leading-snug font-medium">
                  이름을 적어주세요<span className="text-[#FF6666]">*</span>
                </label>
                <InputField
                  ref={nameRef}
                  name="name"
                  value={name}
                  onChange={(fieldName, value) =>
                    setIntroData({ ...introData, name: value })
                  }
                  placeholder="본인의 이름(별칭) 입력"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="leading-snug font-medium">
                  내 휴대전화 번호를 적어주세요
                  <span className="text-[#FF6666]">*</span>
                </label>
                <InputField
                  ref={phoneNumberRef}
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="내 휴대전화 번호 11자리 입력(숫자만)"
                  type="tel"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="leading-snug font-medium">
                  성별을 선택해주세요<span className="text-[#FF6666]">*</span>
                </label>
                <div className="flex gap-4">
                  {[
                    {
                      label: "A",
                      text: "여성",
                      value: "female",
                      color: "blue" as const,
                    },
                    {
                      label: "B",
                      text: "남성",
                      value: "male",
                      color: "green" as const,
                    },
                  ].map((option) => (
                    <AnswerButton
                      key={option.value}
                      label={option.label}
                      text={option.text}
                      color={option.color}
                      selected={gender === option.value}
                      onClick={() =>
                        setIntroData({ ...introData, gender: option.value })
                      }
                    />
                  ))}
                </div>
              </div>
              <h2 className="text-xl font-bold">2. 파트너의 정보</h2>

              <div className="flex flex-col gap-4">
                <label className="leading-snug font-medium">
                  내 파트너의 이름을 적어주세요
                  <span className="text-[#FF6666]">*</span>
                </label>
                <InputField
                  ref={partnerNameRef}
                  name="partnerName"
                  value={partnerName}
                  onChange={(fieldName, value) =>
                    setIntroData({ ...introData, partnerName: value })
                  }
                  placeholder="내 파트너의 이름(별칭) 입력"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="leading-snug font-medium">
                  내 파트너의 휴대전화 번호를 적어주세요
                  <span className="text-[#FF6666]">*</span>
                </label>
                <InputField
                  ref={partnerPhoneNumberRef}
                  name="partnerPhoneNumber"
                  value={partnerPhoneNumber}
                  onChange={handlePartnerPhoneNumberChange}
                  placeholder="파트너의 휴대전화 번호 11자리 입력(숫자만)"
                  type="tel"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="leading-snug font-medium">
                  파트너의 성별을 선택해주세요
                </label>
                <div className="flex gap-4">
                  {[
                    {
                      label: "A",
                      text: "여성",
                      value: "female",
                      color: "blue" as const,
                    },
                    {
                      label: "B",
                      text: "남성",
                      value: "male",
                      color: "green" as const,
                    },
                  ].map((option) => (
                    <AnswerButton
                      key={option.value}
                      label={option.label}
                      text={option.text}
                      color={option.color}
                      selected={partnerGender === option.value}
                      onClick={() => setPartnerGender(option.value)}
                    />
                  ))}
                </div>
              </div>
              <p className="pt-1 text-sm leading-snug font-medium">
                ※두 분의 설문 결과가 정확히 연결되어야 리포트 발송이 가능합니다.
                이름과 휴대전화 번호를 다시 한 번 확인하고 다음 단계로 넘어가
                주세요!
              </p>
            </section>

            {/* 연애 기간 입력 */}
            <section className="flex flex-col gap-6">
              <h2 className="text-xl font-bold">3. 연애 기간</h2>
              <h2 className="text-xl font-bold">
                몇 년째 연애중 인가요?<span className="text-[#FF6666]">*</span>
              </h2>
              <div className="flex w-fit flex-col gap-4">
                {[
                  { label: "A", text: "1년 미만", value: 1 },
                  { label: "B", text: "1~2년", value: 2 },
                  { label: "C", text: "3~4년", value: 3 },
                  { label: "D", text: "5~9년", value: 4 },
                  { label: "E", text: "10년 이상", value: 5 },
                ].map((option) => (
                  <AnswerButton
                    key={option.value}
                    label={option.label}
                    text={option.text}
                    color="blue"
                    selected={relationshipDuration === option.value}
                    onClick={() =>
                      setIntroData({
                        ...introData,
                        relationshipDuration: option.value,
                      })
                    }
                  />
                ))}
              </div>
            </section>

            {/* 개인정보 처리방침 동의 */}
            <section className="flex flex-col gap-5">
              <h2 className="text-xl font-bold">
                개인정보 처리방침 동의<span className="text-[#FF6666]">*</span>
              </h2>
              <p className="text-sm">
                본 설문은 응답자의 성향 분석을 통해 요청하신 보고서를 작성하기
                위한 목적으로 진행됩니다. 설문 참여 과정에서 수집된 개인정보는
                보고서 작성 완료 후 즉시 익명 처리되며, 익명화된 데이터는 향후
                연구 및 AI 학습 목적으로 활용될 수 있습니다.
              </p>
              <div className="flex items-center gap-2.5 border-b border-[#DCDCDC] pb-3">
                <SelectionCircle
                  size="sm"
                  selected={agreeAll}
                  onClick={handleAgreeAll}
                />
                <p className="text-sm font-bold">전체동의(선택사항 포함)</p>
              </div>
              <div className="flex flex-col gap-4.5">
                <div className="flex items-center gap-2.5">
                  <SelectionCircle
                    size="sm"
                    selected={agreePrivacy}
                    onClick={handleAgreePrivacy}
                  />
                  <p className="text-sm">(필수) 개인정보 처리방침 동의</p>
                </div>
                <div className="flex flex-col gap-3 text-sm whitespace-pre-wrap">
                  <p>(주)후아는 다음과 같이 개인정보를 수집·이용합니다.</p>
                  <div>
                    <p>1. 수집하는 개인정보 항목</p>
                    <ul className="mt-1 list-disc space-y-0.5 pl-5">
                      <li>이름, 성별, 전화번호</li>
                      <li>
                        설문 응답자가 자발적으로 제공하는 추가 정보 (예: A, B 등
                        응답 항목 내 자율 기재 내용)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p>2. 개인정보 수집 및 이용 목적</p>
                    <ul className="mt-1 list-disc space-y-0.5 pl-5">
                      <li>
                        결혼 시뮬레이션 리포트 작성 및 개인 맞춤형 리포트 제공
                      </li>
                      <li>
                        설문 응답 결과 분석 및 서비스 품질 개선을 위한 연구 활용
                      </li>
                      <li>AI 모델 학습을 위한 비식별화된 데이터 분석</li>
                    </ul>
                  </div>
                  <div>
                    <p>3. 개인정보 보유 및 이용 기간</p>
                    <ul className="mt-1 list-disc space-y-0.5 pl-5">
                      <li>
                        개인정보는 수집일로부터 최대 1년간 보관 후, 즉시
                        파기합니다.
                      </li>
                      <li>
                        단, 관계 법령에 따라 보존이 필요한 경우 해당 기간 동안
                        안전하게 보관합니다.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p>4. 동의를 거부할 권리</p>
                    <ul className="mt-1 list-disc space-y-0.5 pl-5">
                      <li>
                        귀하는 개인정보 제공에 동의하지 않을 권리가 있습니다.
                      </li>
                      <li>
                        다만, 필수 항목에 동의하지 않을 경우 서비스 제공(결혼
                        시뮬레이션 리포트 작성)이 제한될 수 있습니다.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4.5">
                <div className="flex items-center gap-2.5">
                  <SelectionCircle
                    size="sm"
                    selected={event_promotion_agree}
                    onClick={handleAgreeEventPromotion}
                  />
                  <p className="text-sm">(선택) 마케팅 정보 수신 동의</p>
                </div>
                <p className="text-sm">
                  (주)후아의 서비스, 이벤트, 프로모션 등 마케팅 정보 발송
                </p>
              </div>
            </section>
          </main>
          <div className="flex-1" />
          <Navigator
            onNext={handleNextFromStep2}
            onBack={handleBack}
            canProceed={isStep2Complete && isStep3Complete && isStep4Complete}
          />
        </div>
      )}
    </div>
  );
};

export default IntroductionPage;
