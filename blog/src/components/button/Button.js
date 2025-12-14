import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: ${({ size }) =>
    size === "small"
      ? "6px 12px"
      : size === "large"
      ? "12px 22px"
      : "8px 18px"};

  font-size: ${({ size }) =>
    size === "small" ? "14px" : size === "large" ? "18px" : "16px"};

  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s ease;
  text-decoration: none;

  ${({ variant }) =>
    variant === "outline"
      ? css`
          background: #fff;
          border: 1px solid #ccc;
          color: #333;

          &:hover {
            background: #f2f2f2;
          }
        `
      : css`
          background: #007bff;
          border: none;
          color: white;

          &:hover {
            background: #0056b3;
          }

          &:active {
            background: #004080;
          }
        `}

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const UIButton = styled.button`
  ${baseStyles}
`;

export const UIButtonLink = styled(Link)`
  ${baseStyles}
`;
