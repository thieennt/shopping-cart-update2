import * as React from "react";
import { IIconSVGProps } from "../../typings/Icon";

export interface IAppProps {}

const LogoIcon: React.FC<IIconSVGProps> = (props: IAppProps) => {
  return (
    <div>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_1256)">
          <path
            d="M39.9938 19.7464C39.9286 18.4433 39.3566 17.2173 38.3999 16.3301C37.4432 15.4429 36.1776 14.9649 34.8732 14.9979C33.5689 15.031 32.3292 15.5727 31.4187 16.5072C30.5082 17.4418 29.9991 18.6952 30 20V28.3333C30 27.8913 29.8244 27.4674 29.5119 27.1548C29.1993 26.8422 28.7754 26.6667 28.3334 26.6667H11.6667C11.2247 26.6667 10.8007 26.8422 10.4882 27.1548C10.1756 27.4674 10 27.8913 10 28.3333V20C9.99996 19.0833 9.74791 18.1843 9.27143 17.4013C8.79495 16.6182 8.11237 15.9812 7.2983 15.5598C6.48422 15.1385 5.56999 14.949 4.65552 15.0122C3.74105 15.0754 2.86154 15.3887 2.11312 15.9179C1.3647 16.4472 0.776167 17.172 0.411857 18.0131C0.0475467 18.8543 -0.0785237 19.7794 0.0474254 20.6873C0.173374 21.5953 0.546496 22.4511 1.12601 23.1614C1.70552 23.8716 2.46912 24.4088 3.33334 24.7144V33.3333C3.33334 33.7753 3.50893 34.1993 3.8215 34.5118C4.13406 34.8244 4.55798 35 5.00001 35H6.66668V38.3333H10V35H30V38.3333H33.3334V35H35C35.4421 35 35.866 34.8244 36.1786 34.5118C36.4911 34.1993 36.6667 33.7753 36.6667 33.3333V24.7144C37.6824 24.3551 38.5549 23.6775 39.1544 22.7823C39.7539 21.8872 40.0483 20.8224 39.9938 19.7464Z"
            fill="#029FAE"
          />
          <path
            d="M11.6667 19.9998V24.9998H28.3333V19.9998C28.3352 18.5223 28.8271 17.087 29.7318 15.9189C30.6366 14.7507 31.9032 13.9156 33.3333 13.5442V9.99984C33.3309 7.79046 32.4521 5.67229 30.8898 4.11002C29.3276 2.54776 27.2094 1.66899 25 1.6665H15C12.7906 1.66899 10.6725 2.54776 9.1102 4.11002C7.54794 5.67229 6.66917 7.79046 6.66669 9.99984V13.5442C8.09683 13.9156 9.36344 14.7507 10.2682 15.9189C11.173 17.087 11.6648 18.5223 11.6667 19.9998ZM23.3333 8.33317C23.663 8.33317 23.9852 8.43092 24.2593 8.61405C24.5334 8.79719 24.747 9.05749 24.8731 9.36203C24.9993 9.66657 25.0323 10.0017 24.968 10.325C24.9037 10.6483 24.7449 10.9453 24.5119 11.1783C24.2788 11.4114 23.9818 11.5702 23.6585 11.6345C23.3352 11.6988 23.0001 11.6658 22.6955 11.5396C22.391 11.4135 22.1307 11.1999 21.9476 10.9258C21.7644 10.6517 21.6667 10.3295 21.6667 9.99984C21.6667 9.55781 21.8423 9.13389 22.1548 8.82132C22.4674 8.50876 22.8913 8.33317 23.3333 8.33317ZM23.3333 13.3332C23.663 13.3332 23.9852 13.4309 24.2593 13.6141C24.5334 13.7972 24.747 14.0575 24.8731 14.362C24.9993 14.6666 25.0323 15.0017 24.968 15.325C24.9037 15.6483 24.7449 15.9453 24.5119 16.1783C24.2788 16.4114 23.9818 16.5702 23.6585 16.6345C23.3352 16.6988 23.0001 16.6658 22.6955 16.5396C22.391 16.4135 22.1307 16.1999 21.9476 15.9258C21.7644 15.6517 21.6667 15.3295 21.6667 14.9998C21.6667 14.5578 21.8423 14.1339 22.1548 13.8213C22.4674 13.5088 22.8913 13.3332 23.3333 13.3332ZM16.6667 8.33317C16.9963 8.33317 17.3186 8.43092 17.5926 8.61405C17.8667 8.79719 18.0803 9.05749 18.2065 9.36203C18.3326 9.66657 18.3656 10.0017 18.3013 10.325C18.237 10.6483 18.0783 10.9453 17.8452 11.1783C17.6121 11.4114 17.3151 11.5702 16.9918 11.6345C16.6685 11.6988 16.3334 11.6658 16.0289 11.5396C15.7243 11.4135 15.464 11.1999 15.2809 10.9258C15.0978 10.6517 15 10.3295 15 9.99984C15 9.55781 15.1756 9.13389 15.4882 8.82132C15.8007 8.50876 16.2247 8.33317 16.6667 8.33317ZM16.6667 13.3332C16.9963 13.3332 17.3186 13.4309 17.5926 13.6141C17.8667 13.7972 18.0803 14.0575 18.2065 14.362C18.3326 14.6666 18.3656 15.0017 18.3013 15.325C18.237 15.6483 18.0783 15.9453 17.8452 16.1783C17.6121 16.4114 17.3151 16.5702 16.9918 16.6345C16.6685 16.6988 16.3334 16.6658 16.0289 16.5396C15.7243 16.4135 15.464 16.1999 15.2809 15.9258C15.0978 15.6517 15 15.3295 15 14.9998C15 14.5578 15.1756 14.1339 15.4882 13.8213C15.8007 13.5088 16.2247 13.3332 16.6667 13.3332Z"
            fill="#029FAE"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1256">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default LogoIcon;
