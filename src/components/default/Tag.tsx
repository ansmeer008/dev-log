import styled from 'styled-components';
import { AppColorTokens } from '@/styles/AppColor';
import { AppTypoTokens } from '@/styles/AppTypo';

const TagVariationWrap = styled.div`
  display: inline-block;
  background-color: ${AppColorTokens.LIGHT_GRAY.hex};
  border-radius: 1rem;

  &.size-s {
    ${AppTypoTokens.CAPTION_BOLD};
    padding: 0.2rem 0.8rem;
  }

  &.size-m {
    ${AppTypoTokens.BODY_BOLD};
    padding: 0.4rem 1rem;
  }

  &.size-l {
    ${AppTypoTokens.TITLE_BOLD};
    padding: 0.8rem 1.2rem;
  }
`;

interface TagProps {
  text: string;
  size: 's' | 'm' | 'l';
}

export const Tag = ({ text, size }: TagProps) => {
  return <TagVariationWrap className={`size-${size}`}>{text}</TagVariationWrap>;
};
