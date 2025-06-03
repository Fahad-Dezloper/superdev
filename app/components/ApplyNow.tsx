"use client"
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .icon-Container svg {
    transition-duration: 1.5s;
  }
  .icon-Container:hover svg {
    transition-duration: 1.5s;
    animation: arrow 1s linear infinite;
  }
  @keyframes arrow {
    0% {
      opacity: 0;
      margin-left: 0px;
    }
    100% {
      opacity: 1;
      margin-left: 10px;
    }
  }
`;

const ApplyNow = () => {
  return (
    <StyledWrapper>
      <a href='https://airtable.com/appdfQFBoIXdYtre1/shrrIsfy6iUMv8OeI' target='_blank' rel='noreferrer'>
      <button className="flex w-[170px] h-fit bg-[#1d2129] rounded-[40px] justify-between items-center border-none cursor-pointer">
        <span className="w-[calc(170px-45px)] font-primary pl-4 h-full flex items-center justify-center text-white text-[1.1em] tracking-[1.2px]">
          Apply Now!
        </span>
        <span className="icon-Container w-[45px] h-[45px] bg-white flex items-center justify-center rounded-full border-3 border-[#1d2129]">
          <svg 
            width={16} 
            height={19} 
            viewBox="0 0 16 19" 
            fill="nones" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.61321" cy="1.61321" r="1.5" fill="black" />
            <circle cx="5.73583" cy="1.61321" r="1.5" fill="black" />
            <circle cx="5.73583" cy="5.5566" r="1.5" fill="black" />
            <circle cx="9.85851" cy="5.5566" r="1.5" fill="black" />
            <circle cx="9.85851" cy="9.5" r="1.5" fill="black" />
            <circle cx="13.9811" cy="9.5" r="1.5" fill="black" />
            <circle cx="5.73583" cy="13.4434" r="1.5" fill="black" />
            <circle cx="9.85851" cy="13.4434" r="1.5" fill="black" />
            <circle cx="1.61321" cy="17.3868" r="1.5" fill="black" />
            <circle cx="5.73583" cy="17.3868" r="1.5" fill="black" />
          </svg>
        </span>
      </button>
      </a>
    </StyledWrapper>
  );
}

export default ApplyNow;
