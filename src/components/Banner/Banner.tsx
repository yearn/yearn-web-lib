import React, { ReactElement, useState } from "react";

import styled from "styled-components";
import { Icon } from "..";
import { Heading2, Text } from "../../typography";
import { Button } from "../Button";
import { IconDirection } from "../Icon/Direction";

export interface BannerDetailsProps {
  heading: string;
  content: ReactElement;
}

interface BannerControlsProps {
  current: number;
  numberOfBanners: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

export interface BannerProps {
  details: BannerDetailsProps[];
  onClose: () => void;
}

export const Banner = ({
  details,
  onClose,
}: BannerProps): ReactElement | null => {
  const [current, setCurrent] = useState(0);

  if (!details) return null;

  const handleClose = (): void => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <BannerContainer>
      <HeaderContainer>
        <StyledHeading2 bold>
          {details?.[current]?.heading || ""}
        </StyledHeading2>
        <Button.Icon icon={<Icon.CrossMark />} onClick={handleClose} />
      </HeaderContainer>
      {details[current].content}
      <BannerControls
        current={current}
        setCurrent={setCurrent}
        numberOfBanners={details.length || 0}
      />
    </BannerContainer>
  );
};

const BannerControls = ({
  current,
  setCurrent,
  numberOfBanners,
}: BannerControlsProps): ReactElement | null => {
  if (numberOfBanners < 1) return null;

  const isFirstBanner = current === 0;
  const isLastBanner = current === numberOfBanners - 1;

  const handleLeftChevronClick = (): void => {
    if (!isFirstBanner) {
      setCurrent((prev) => prev - 1);
    }
  };

  const handleRightChevronClick = (): void => {
    if (!isLastBanner) {
      setCurrent((prev) => prev + 1);
    }
  };

  return (
    <ControlsContainer>
      <Button.Icon
        icon={<Icon.Chevron direction={IconDirection.Left} />}
        onClick={handleLeftChevronClick}
        disabled={isFirstBanner}
      />
      <StyledText bold>{`${current + 1}/${numberOfBanners}`}</StyledText>
      <Button.Icon
        icon={<Icon.Chevron direction={IconDirection.Right} />}
        onClick={handleRightChevronClick}
        disabled={isLastBanner}
      />
    </ControlsContainer>
  );
};

const BannerContainer = styled.section`
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.backgroundVariant};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  padding: 24px;
  border-radius: 8px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledHeading2 = styled(Heading2)`
  color: ${({ theme }) => theme.colors.primary};
  padding-bottom: 12px;
`;

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 12px;
`;
