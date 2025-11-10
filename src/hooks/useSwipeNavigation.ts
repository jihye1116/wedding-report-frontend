import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

interface UseSwipeNavigationProps {
  onSwipedLeft: () => void;
  onSwipedRight: () => void;
  breakpoint?: number; // px, 이 값 이하에서만 스와이프 활성화 (기본 768)
}

export const useSwipeNavigation = ({
  onSwipedLeft,
  onSwipedRight,
  breakpoint = 768,
}: UseSwipeNavigationProps) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia !== "function"
    ) {
      setIsSmallScreen(false);
      return;
    }
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsSmallScreen(
        "matches" in e ? e.matches : (e as MediaQueryList).matches,
      );
    };
    // 초기값 설정
    handleChange(mql);
    // 리스너 등록 (브라우저 호환)
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener(
        "change",
        handleChange as (e: MediaQueryListEvent) => void,
      );
      return () =>
        mql.removeEventListener(
          "change",
          handleChange as (e: MediaQueryListEvent) => void,
        );
    } else {
      // @ts-ignore - Safari 구버전
      mql.addListener(handleChange);
      return () => {
        // @ts-ignore - Safari 구버전
        mql.removeListener(handleChange);
      };
    }
  }, [breakpoint]);

  const handlers = useSwipeable({
    onSwipedLeft: isSmallScreen ? onSwipedLeft : undefined,
    onSwipedRight: isSmallScreen ? onSwipedRight : undefined,
    preventScrollOnSwipe: isSmallScreen,
    // 작은 모바일에서만 터치 스와이프 활성화, 데스크톱 마우스 스와이프 비활성화
    trackMouse: false,
    // trackTouch 옵션이 지원되지 않더라도 onSwiped* 미설정 + preventScrollOnSwipe=false로 사실상 비활성화
  });

  return handlers;
};
