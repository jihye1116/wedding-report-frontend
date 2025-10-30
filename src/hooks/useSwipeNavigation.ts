
import { useSwipeable } from 'react-swipeable';

interface UseSwipeNavigationProps {
  onSwipedLeft: () => void;
  onSwipedRight: () => void;
}

export const useSwipeNavigation = ({ onSwipedLeft, onSwipedRight }: UseSwipeNavigationProps) => {
  const handlers = useSwipeable({
    onSwipedLeft,
    onSwipedRight,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return handlers;
};
