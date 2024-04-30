import React, { FC } from 'react';

export interface LogoProps {}

export const Logo: FC<LogoProps> = ({ ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="48"
      fill="none"
      {...rest}
    >
      <g clipPath="url(#clip0_3498_3230)">
        <g clipPath="url(#clip1_3498_3230)">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M22.857 39.086v5.55c0 .658.155 1.089.48 1.38.31.279.74.406 1.336.406.597 0 1-.127 1.31-.405.326-.292.481-.723.481-1.382v-5.55h1.895v5.652c0 1.216-.467 2.129-1.324 2.66-.61.38-1.337.545-2.297.545h-.155c-.96 0-1.7-.164-2.31-.544-.857-.532-1.31-1.445-1.31-2.661v-5.651h1.894Zm-18.27-.127c.844 0 1.687.127 2.362.317l-.156 1.495c-.636-.152-1.401-.291-2.102-.291-1.103 0-1.583.342-1.583.963 0 .544.35.772 1.285 1.026l.687.19c1.103.304 1.558.583 1.882.988.324.406.506.9.506 1.622 0 1.964-1.362 2.673-3.452 2.673-1.025 0-2.076-.177-2.699-.367-.208-.063-.286-.14-.286-.355 0-.215.065-.57.143-.836.078-.266.169-.33.286-.33a.91.91 0 0 1 .246.051 8.118 8.118 0 0 0 2.154.317c1.207 0 1.7-.33 1.7-1.039 0-.633-.402-.874-1.31-1.14l-.87-.254c-.752-.215-1.259-.456-1.609-.823-.35-.368-.597-.9-.597-1.66 0-1.533 1.09-2.547 3.413-2.547Zm48.972 0c1.363 0 2.297.38 2.985 1.09.766.786 1.103 1.926 1.103 3.395 0 1.47-.337 2.623-1.103 3.409-.688.71-1.622 1.09-2.984 1.09-1.363 0-2.324-.38-3.011-1.09-.767-.786-1.103-1.939-1.103-3.409 0-1.47.337-2.61 1.103-3.395.688-.71 1.648-1.09 3.01-1.09Zm10.675 0c.843 0 1.686.127 2.361.317l-.156 1.495c-.636-.152-1.4-.291-2.101-.291-1.104 0-1.584.342-1.584.963 0 .544.35.772 1.285 1.026l.687.19c1.103.304 1.558.583 1.882.988.324.406.507.9.507 1.622 0 1.964-1.363 2.673-3.453 2.673-1.025 0-2.075-.177-2.7-.367-.206-.063-.284-.14-.284-.355 0-.215.065-.57.142-.836.078-.266.17-.33.286-.33.052 0 .117.013.247.051a8.112 8.112 0 0 0 2.154.317c1.206 0 1.7-.33 1.7-1.039 0-.633-.402-.874-1.311-1.14l-.87-.254c-.753-.215-1.258-.456-1.608-.823-.351-.368-.598-.9-.598-1.66 0-1.533 1.09-2.547 3.414-2.547Zm-46.781.127v1.495h-2.648V47.5c0 .253-.22.38-.947.38-.753 0-.947-.127-.947-.393v-6.905h-2.648v-1.495h7.19Zm28.21 0v8.413c0 .253-.221.38-.948.38-.753 0-.947-.127-.947-.393v-8.4h1.894Zm-9.722 0c1.273 0 2.246.304 2.947.912.882.773 1.284 1.99 1.284 3.446 0 1.458-.402 2.686-1.284 3.46-.701.608-1.674.911-2.947.911h-3.14c-.337 0-.454-.1-.454-.405v-8.324h3.594Zm17.618 1.42c-.649 0-1.103.189-1.44.493-.558.507-.74 1.33-.74 2.445 0 1.116.182 1.951.74 2.459.337.304.791.493 1.44.493.65 0 1.078-.19 1.415-.493.558-.508.74-1.343.74-2.459 0-1.114-.182-1.938-.74-2.445-.337-.304-.766-.494-1.414-.494Zm-18.046.075h-1.271v5.74h1.271c.986 0 1.609-.165 1.973-.507.532-.495.753-1.293.753-2.37 0-1.076-.221-1.861-.753-2.356-.364-.343-.987-.507-1.973-.507Z"
            clipRule="evenodd"
          />
          <path
            fill="#EDEDED"
            d="M5.478 0C8.27 0 9.992 1.934 9.992 4.37c0 2.438-1.723 4.371-4.514 4.371-2.79 0-4.513-1.933-4.513-4.371C.965 1.934 2.688 0 5.478 0Zm44.586 13.142c.889 1.415 2.657 4.494 4.449 7.546 1.157 1.973 2.405 4.159 3.08 5.418 2.06-3.444 4.37-8.986 5.889-13.919.152-.494.39-.734.83-.734.233 0 .627.095 1.709.419.651.193 1.95.582 2.434.732.499.153.707.4.707.713 0 .307-.18.795-.433 1.465-2.023 5.353-4.833 11.17-8.127 16.09-1.257 1.876-2.652 2.421-4.974 2.421-2.453 0-3.55-.638-4.754-2.375-.817-1.18-1.67-2.476-2.822-4.22v.001c-2.594 4.15-7.04 6.593-13.088 6.593-4.576 0-8.72-1.372-11.005-3.403-2.325 2.098-6.26 3.403-10.034 3.403-3.78 0-7.756-1.015-10.084-3.287-1.79-1.748-2.816-3.966-2.816-7.85v-9.73c0-.482.174-.684.701-.684H9.22c.534 0 .713.21.713.68v10.764c0 1.721.381 2.886 1.194 3.724.78.805 2.088 1.285 3.564 1.285 1.511 0 2.886-.497 3.76-1.414.995-1.045 1.446-2.534 1.446-5.283V4.973c0-.808.215-1.367.681-1.782.688-.611 2.08-.91 3.773-.91 1.67 0 3.085.299 3.773.91.466.415.682.97.682 1.781v6.768h7.046c.534 0 .72.21.72.68v4.138c0 .471-.186.68-.72.68h-3.956c-1.233 0-2.256-.177-3.09-.525v2.776l-.002.245.002-.244.002 1.52c0 2.561.55 4.095 1.689 5.235 1.192 1.196 3.024 1.853 5.395 1.853 4.997 0 7.584-3.064 7.584-6.446 0-1.346-.402-2.442-1.204-3.786l-.023-.034c-.717-1.196-.909-1.703-.909-2.378 0-1.99 3.607-4.122 6.042-4.122.87 0 1.425.206 2.015.885.161.198.352.425.667.925Z"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3498_3230">
          <path fill="#fff" d="M.965 0h68.073v48H.965z" />
        </clipPath>
        <clipPath id="clip1_3498_3230">
          <path fill="#fff" d="M.965 0h68.073v48H.965z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;
